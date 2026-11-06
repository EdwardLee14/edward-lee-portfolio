import { useEffect, useRef } from 'react'

// Hero background: thin pipeline lines that converge to the right,
// with small packets travelling along them. Static frame under reduced motion.
export function FlowCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0, h = 0, raf = 0, lines = [], packets = [], visible = true

    const LINE = 'rgba(235, 238, 255, 0.13)'
    const PACKET = 'rgba(245, 247, 255, 0.85)'

    function build() {
      const parent = canvas.parentElement
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(10, Math.round(h / 34))
      const sinkY = h * 0.42
      lines = Array.from({ length: count }, (_, i) => {
        const y0 = (h / (count - 1)) * i
        const y1 = sinkY + (y0 - sinkY) * 0.18
        return { y0, y1, bend: 0.35 + ((i * 37) % 23) / 100 }
      })
      packets = Array.from({ length: Math.round(count * 1.6) }, (_, i) => ({
        line: i % count,
        t: Math.random(),
        speed: 0.018 + Math.random() * 0.035,
        len: 10 + Math.random() * 26,
      }))
    }

    // Each line is a horizontal run that eases toward the sink after `bend`.
    function point(l, t) {
      const x = t * w
      const k = t < l.bend ? 0 : (t - l.bend) / (1 - l.bend)
      const e = k * k * (3 - 2 * k)
      return [x, l.y0 + (l.y1 - l.y0) * e]
    }

    function frame(dt) {
      ctx.clearRect(0, 0, w, h)
      ctx.lineWidth = 1
      ctx.strokeStyle = LINE
      for (const l of lines) {
        ctx.beginPath()
        for (let s = 0; s <= 48; s++) {
          const [x, y] = point(l, s / 48)
          s ? ctx.lineTo(x, y) : ctx.moveTo(x, y)
        }
        ctx.stroke()
      }
      ctx.strokeStyle = PACKET
      ctx.lineWidth = 2
      for (const p of packets) {
        p.t += p.speed * dt
        if (p.t > 1.05) { p.t = -0.05; p.line = Math.floor(Math.random() * lines.length) }
        const l = lines[p.line]
        const span = p.len / w
        const [x0, y0] = point(l, Math.max(0, p.t - span))
        const [x1, y1] = point(l, Math.min(1, Math.max(0, p.t)))
        ctx.beginPath()
        ctx.moveTo(x0, y0)
        ctx.lineTo(x1, y1)
        ctx.stroke()
      }
    }

    let last = performance.now()
    function loop(now) {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (visible) frame(dt)
      raf = requestAnimationFrame(loop)
    }

    build()
    if (reduced) frame(0)
    else raf = requestAnimationFrame(loop)

    const ro = new ResizeObserver(() => { build(); if (reduced) frame(0) })
    ro.observe(canvas.parentElement)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(canvas)

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect() }
  }, [])

  return <canvas ref={ref} className="flow-canvas" aria-hidden="true" />
}
