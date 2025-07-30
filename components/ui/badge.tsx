"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium border backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

export { Badge }
