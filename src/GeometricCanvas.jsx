import { useEffect, useRef } from 'react'

export function GeometricCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = window.devicePixelRatio || 1
    let w, h, animationId
    const gridSize = 80
    const accentR = 180, accentG = 230, accentB = 0

    const nodes = []
    const nodeCount = 28

    function initNodes() {
      nodes.length = 0
      const cols = Math.ceil(w / gridSize) + 2
      const rows = Math.ceil(h / gridSize) + 2
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          gx: Math.floor(Math.random() * cols),
          gy: Math.floor(Math.random() * rows),
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.7,
        })
      }
    }

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initNodes()
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      const t = Date.now() * 0.001

      const ox = (t * 6) % gridSize
      const oy = (t * 4) % gridSize

      ctx.lineWidth = 0.5

      ctx.strokeStyle = `rgba(${accentR}, ${accentG}, ${accentB}, 0.08)`
      for (let x = -gridSize + ox; x <= w + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = -gridSize + oy; y <= h + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      for (const node of nodes) {
        const nx = ((node.gx * gridSize + ox) % (w + gridSize * 2)) - gridSize
        const ny = ((node.gy * gridSize + oy) % (h + gridSize * 2)) - gridSize
        const pulse = Math.sin(t * node.speed + node.phase)
        const opacity = 0.1 + 0.18 * Math.max(0, pulse)
        const size = 3 + 4 * Math.max(0, pulse)

        ctx.fillStyle = `rgba(${accentR}, ${accentG}, ${accentB}, ${opacity})`
        ctx.fillRect(nx - size / 2, ny - size / 2, size, size)
      }

      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="geometric-canvas" aria-hidden="true" />
}
