"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Brain,
  Target,
  BarChart3,
  Zap,
  Shield,
  Rocket,
  ChevronDown,
  Play,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  BookOpen,
  ExternalLink,
  User,
  Clock,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"
import { Carousel } from "@/components/ui/carousel"
import { FAQ } from "@/components/ui/custom/faq"
import { ContactForm } from "@/components/ui/custom/contact-form"
import { GlassCard } from "@/components/ui/custom/glass-card"
import { AnimatedCounter } from "@/components/ui/custom/animated-counter"
import { BackgroundBeams } from "@/components/ui/custom/background-beams"
import Header from "@/components/header/header"
import Footer from "@/components/footer/Footer"
import { SparklesText } from "@/components/ui/custom/sparkle-text";
import Link from "next/link"
import { PricingCalculator } from "@/components/ui/custom/pricing-calculator"
import { getFeaturedBlogPosts } from "@/lib/blog-data"
import { InfiniteMovingCards } from "@/components/ui/custom/infinite-moving-cards"
import { BorderBeam } from "@/components/ui/custom/border-beam"
import { Particles } from "@/components/ui/custom/particles"

export default function LandingPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Create compelling copy, visuals, and campaigns with advanced AI that understands your brand voice.",
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description: "Identify and reach your ideal customers with precision using machine learning algorithms.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Track performance metrics and optimize campaigns with actionable insights and predictive analytics.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description:
        "Streamline your marketing processes with intelligent automation that saves time and increases efficiency.",
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description:
        "Monitor and protect your brand reputation across all digital channels with AI-powered sentiment analysis.",
    },
    {
      icon: Rocket,
      title: "Campaign Optimization",
      description:
        "Continuously improve campaign performance with self-learning algorithms that adapt to market changes.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      title: "Marketing Director",
      company: "TechFlow Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "ADmyBRAND AI Suite transformed our marketing ROI by 340%. The AI-generated content is indistinguishable from our best copywriters.",
      quote: "ADmyBRAND AI Suite transformed our marketing ROI by 340%. The AI-generated content is indistinguishable from our best copywriters."
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      title: "CEO",
      company: "GrowthLab",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "This platform is a game-changer. We've reduced our campaign setup time by 80% while improving conversion rates across all channels.",
      quote: "This platform is a game-changer. We've reduced our campaign setup time by 80% while improving conversion rates across all channels.",
    },
    {
      name: "Emily Watson",
      role: "Brand Manager",
      title: "Brand Manager",
      company: "InnovateCorp",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The brand protection features alone saved us from a potential PR crisis. The AI caught negative sentiment trends before they escalated.",
      quote: "The brand protection features alone saved us from a potential PR crisis. The AI caught negative sentiment trends before they escalated.",
    },
    {
      name: "Aditya Sharma",
      role: "Founder",
      title: "Founder",
      company: "AdityaCodeLab",
      image: "/placeholder-user.jpg",
      rating: 4,
      text: "Nice product. It worked seamlessly with my day-to-day tasks and helped me a lot.",
      quote: "Nice product. It worked seamlessly with my day-to-day tasks and helped me a lot.",
    },
  ]

  const faqData = [
    {
      question: "How does ADmyBRAND AI Suite integrate with existing marketing tools?",
      answer:
        "Our platform seamlessly integrates with over 100+ marketing tools including HubSpot, Salesforce, Google Ads, Facebook Ads, and more through our robust API and pre-built connectors.",
    },
    {
      question: "What kind of ROI can I expect from using ADmyBRAND AI Suite?",
      answer:
        "Our customers typically see a 200-400% increase in marketing ROI within the first 3 months, with significant improvements in conversion rates, lead quality, and campaign efficiency.",
    },
    {
      question: "Is my data secure with ADmyBRAND AI Suite?",
      answer:
        "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and remains completely private.",
    },
    {
      question: "Can I customize the AI to match my brand voice?",
      answer:
        "Yes! Our AI learns your brand voice, tone, and style preferences. You can train it with your existing content and set specific guidelines to ensure all generated content aligns with your brand identity.",
    },
    {
      question: "What support is available during onboarding?",
      answer:
        "We provide dedicated onboarding specialists, comprehensive training materials, live workshops, and 24/7 support to ensure you get maximum value from day one.",
    },
  ]

  const blogPosts = getFeaturedBlogPosts()

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <BackgroundBeams />
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center max-w-5xl mx-auto space-y-10"
          >
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-200 border-purple-500/20">
              🚀 AI-Powered Marketing Revolution
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Transform Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                {" "}
                Marketing
              </span>
              <span className="flex items-center justify-center gap-2 md:gap-4">
                <span>with</span>
                <SparklesText>AI Magic</SparklesText>
              </span>
            </h1>

            <p className="md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed -mt-4">
              Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, target
              perfect audiences, and optimize performance — all while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80 md:text-lg px-6 py-3 md:px-8 md:py-4 cursor-pointer"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent md:text-lg px-6 py-3 md:px-8 md:py-4 cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative mt-16"
            >
              <GlassCard className="p-2 md:p-4 mx-auto">
                {/* <img
                  src="https://placehold.co/1200x600/c084fc/a855f7"
                  alt="ADmyBRAND AI Suite Dashboard"
                  className="w-full rounded-xl shadow-2xl"
                  loading="lazy"
                /> */}
                <video
                  controls
                  loop
                  autoPlay
                >
                  <source src="https://res.cloudinary.com/aditya-hub/video/upload/v1753967085/admybrand-video-1753964957299_1_1_eghqcu.mp4" type="video/mp4"></source>
                </video>
              <BorderBeam duration={14} size={100} borderWidth={2} />
              </GlassCard>
            </motion.div>

            <div className="flex items-center justify-center space-x-8 md:space-x-16 pt-8">
              <div className="text-center">
                <AnimatedCounter end={340} suffix="%" className="text-2xl md:text-5xl font-bold text-purple-400" />
                <p className="text-sm md:text-base md:mt-2 text-gray-400">ROI Increase</p>
              </div>
              <div className="text-center">
                <AnimatedCounter end={50000} suffix="+" className="text-2xl md:text-5xl font-bold text-pink-400" />
                <p className="text-sm md:text-base md:mt-2 text-gray-400">Happy Customers</p>
              </div>
              <div className="text-center">
                <AnimatedCounter end={99.9} suffix="%" className="text-2xl md:text-5xl font-bold text-purple-400" />
                <p className="text-sm md:text-base md:mt-2 text-gray-400">Uptime</p>
              </div>
            </div>

          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative">
        <div className="container mx-auto px-6 md:px-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-8">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Powerful AI Tools for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Modern Marketers
              </span>
            </h2>
            <p className="md:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, optimize, and scale your marketing campaigns with the power of artificial
              intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 md:p-8 h-full hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Calculator */}
      <section id="pricing" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-6">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Perfect Plan
              </span>
            </h2>
            <p className="md:text-xl text-gray-300 max-w-3xl mx-auto">
              Start free and scale as you grow. Use our interactive calculator to find the perfect plan for your needs.
            </p>
          </motion.div>

          <PricingCalculator />
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 md:px-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-6">
              Resources
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Latest Insights &
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Resources
              </span>
            </h2>
            <p className="md:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest articles, guides, and industry insights on AI marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-500/80 text-white text-xs">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-6
                     line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between text-sm text-gray-300 mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center mb-2 md:mb-0 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                size="md"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent cursor-pointer"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-8">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Loved by
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Marketing Teams
              </span>
            </h2>
            <p className="md:text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are transforming their marketing with ADmyBRAND AI Suite.
            </p>
          </motion.div>

          {/* <Carousel items={testimonials} /> */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-8">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="md:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about ADmyBRAND AI Suite and how it can transform your marketing.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <FAQ items={faqData} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-6">
                Get in Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Marketing?
                </span>
              </h2>
              <p className="md:text-xl text-gray-300 mb-8">
                Join thousands of marketers who are already using AI to supercharge their campaigns. Start your free
                trial today or get in touch with our team.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-400">hello@admybrand.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-4 md:p-6">
                <ContactForm />
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      <Modal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} title="Sample Video">
        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
          <video width="100%" height="100%" autoPlay loop controls>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  )
}
