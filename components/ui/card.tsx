"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl", className)}
      {...props}
    />
  )
})

Card.displayName = "Card"

export { Card }
