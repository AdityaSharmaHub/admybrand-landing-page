"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Calculator, Users, Zap, TrendingUp } from "lucide-react"
import { Button } from "../button"
import { GlassCard } from "./glass-card"
import { Badge } from "../badge"

interface PricingTier {
  name: string
  basePrice: number
  description: string
  features: string[]
  popular?: boolean
  userMultiplier: number
  contentMultiplier: number
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    basePrice: 29,
    description: "Perfect for small businesses",
    userMultiplier: 1,
    contentMultiplier: 1,
    features: [
      "5,000 AI-generated content pieces",
      "Basic audience targeting",
      "Standard analytics dashboard",
      "Email support",
      "Basic integrations",
    ],
  },
  {
    name: "Professional",
    basePrice: 99,
    description: "For growing marketing teams",
    userMultiplier: 1.5,
    contentMultiplier: 2,
    popular: true,
    features: [
      "25,000 AI-generated content pieces",
      "Advanced audience targeting",
      "Real-time analytics & insights",
      "A/B testing automation",
      "Priority support",
      "Advanced integrations",
      "Custom workflows",
    ],
  },
  {
    name: "Enterprise",
    basePrice: 299,
    description: "For large organizations",
    userMultiplier: 2,
    contentMultiplier: 5,
    features: [
      "Unlimited AI-generated content",
      "Custom AI model training",
      "Advanced predictive analytics",
      "White-label solutions",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security features",
    ],
  },
]

export function PricingCalculator() {
  const [teamSize, setTeamSize] = useState(5)
  const [contentVolume, setContentVolume] = useState(10000)
  const [selectedTier, setSelectedTier] = useState(1)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const calculatePrice = (tier: PricingTier) => {
    const userFactor = Math.max(1, teamSize / 5) * tier.userMultiplier
    const contentFactor = Math.max(1, contentVolume / 10000) * tier.contentMultiplier
    const basePrice = tier.basePrice * userFactor * contentFactor
    const discount = billingCycle === "annual" ? 0.2 : 0
    return Math.round(basePrice * (1 - discount))
  }

  const calculateSavings = (tier: PricingTier) => {
    if (billingCycle === "monthly") return 0
    const monthlyTotal = calculatePrice({ ...tier }) / 0.8 // Reverse the discount to get monthly price
    const annualTotal = calculatePrice(tier) * 12
    return Math.round(monthlyTotal * 12 - annualTotal)
  }

  return (
    <div className="space-y-12">
      {/* Calculator Controls */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <GlassCard className="p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Calculator className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold">Interactive Pricing Calculator</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Team Size: <span className="text-purple-400 font-bold">{teamSize} users</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1</span>
                  <span>50</span>
                  <span>100+</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Monthly Content Volume:{" "}
                <span className="text-purple-400 font-bold">{contentVolume.toLocaleString()}</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={contentVolume}
                  onChange={(e) => setContentVolume(Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1K</span>
                  <span>50K</span>
                  <span>100K+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white/5 rounded-xl p-1 flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-lg transition-all cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-lg transition-all relative cursor-pointer ${
                  billingCycle === "annual"
                    ? "bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Annual
                <Badge className="absolute -top-5 -right-5 bg-green-500 text-white text-xs px-2 py-1">Save 20%</Badge>
              </button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => {
          const price = calculatePrice(tier)
          const savings = calculateSavings(tier)

          return (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard
                className={`p-8 h-full relative ${tier.popular ? "border-2 border-purple-500/50 scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="text-gray-400">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>
                  {billingCycle === "annual" && savings > 0 && (
                    <div className="text-green-400 text-sm">Save ${savings.toLocaleString()} per year</div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="w-4 h-4 text-purple-400 mr-2" />
                    <span>Optimized for {teamSize} team members</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Zap className="w-4 h-4 text-purple-400 mr-2" />
                    <span>{contentVolume.toLocaleString()} content pieces/month</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-purple-400 mr-2" />
                    <span>Estimated ROI: {Math.round(price * 3.4)}%</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full cursor-pointer ${
                    tier.popular
                      ? "bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80"
                      : "bg-gradient-to-r from-purple-500/60 to-pink-500/60 hover:from-purple-600/60 hover:to-pink-600/60"
                  }`}
                  onClick={() => setSelectedTier(index)}
                >
                  {index === 2 ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>

      {/* Calculator Summary */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <GlassCard className="p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Your Estimated ROI</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                ${(calculatePrice(pricingTiers[selectedTier]) * 3.4).toLocaleString()}
              </div>
              <p className="text-gray-300">Monthly Revenue Increase</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">{Math.round(teamSize * 8)}hrs</div>
              <p className="text-gray-300">Time Saved Per Month</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">{Math.round(340 * (teamSize / 5))}%</div>
              <p className="text-gray-300">Average ROI Increase</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #a855f7, #ec4899);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #a855f7, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
      `}</style>
    </div>
  )
}
