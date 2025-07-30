"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "./button"
import { GlassCard } from "./glass-card"

interface TestimonialItem {
  name: string
  role: string
  company: string
  image: string
  rating: number
  text: string
}

interface CarouselProps {
  items: TestimonialItem[]
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8">
              <div className="text-center">
                <img
                  src={"/placeholder-user.jpg"}
                  alt={items[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(items[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">"{items[currentIndex].text}"</p>
                <div>
                  <h4 className="text-lg font-semibold text-white">{items[currentIndex].name}</h4>
                  <p className="text-gray-400">
                    {items[currentIndex].role} at {items[currentIndex].company}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button variant="ghost" size="sm" onClick={prevSlide}>
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-purple-500" : "bg-white/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <Button variant="ghost" size="sm" onClick={nextSlide}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

export const CarouselContent = () => null
export const CarouselItem = () => null
export const CarouselPrevious = () => null
export const CarouselNext = () => null
