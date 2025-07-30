"use client"

import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Search, Filter, TrendingUp, Brain, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/custom/glass-card"
import Header from "@/components/header/header"
import Footer from "@/components/footer/Footer"
import { getAllBlogPosts } from "@/lib/blog-data"

const blogPosts = getAllBlogPosts()

const categories = ["All", "AI Trends", "Case Study", "Guide", "Analytics", "Brand Strategy", "Strategy"]

export default function BlogClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/20 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog & Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Marketing
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay ahead of the curve with expert insights, practical guides, and the latest trends in AI-powered
              marketing.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm w-80"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm">
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-6 md:px-20 mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-purple-400" />
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <GlassCard key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500/80 text-white text-xs">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white text-xs">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </GlassCard>
            ))}
        </div>
      </div>

      {/* All Posts */}
      <div className="container mx-auto px-6 md:px-20 pb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Brain className="w-6 h-6 mr-2 text-purple-400" />
          All Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <GlassCard key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500/80 text-white text-xs">{post.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-6 pb-16">
        <GlassCard className="p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Get the latest AI marketing insights delivered straight to your inbox. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
            />
            <Button className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80">
              Subscribe
            </Button>
          </div>
        </GlassCard>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}