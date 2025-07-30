"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const beams = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      angle: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.5,
      opacity: 0.1 + Math.random() * 0.1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        ctx.save()
        ctx.translate(beam.x, beam.y)
        ctx.rotate(beam.angle)

        const gradient = ctx.createLinearGradient(-200, 0, 200, 0)
        gradient.addColorStop(0, `rgba(168, 85, 247, 0)`)
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${beam.opacity})`)
        gradient.addColorStop(1, `rgba(236, 72, 153, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(-200, -1, 400, 2)
        ctx.restore()

        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed

        if (beam.x < -200) beam.x = canvas.width + 200
        if (beam.x > canvas.width + 200) beam.x = -200
        if (beam.y < -200) beam.y = canvas.height + 200
        if (beam.y > canvas.height + 200) beam.y = -200
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
