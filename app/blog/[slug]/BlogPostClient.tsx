"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  LinkIcon,
  ChevronUp,
  Tag,
  Eye,
  ThumbsUp,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/custom/glass-card"

interface BlogPost {
  title: string
  excerpt: string
  author: string
  authorBio: string
  authorImage: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
  content: string
  relatedPosts: Array<{
    title: string
    slug: string
    image: string
  }>
}

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = post.title

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(url)
      // You could add a toast notification here
      return
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  // Convert markdown-like content to JSX (simplified)
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mb-6 mt-8">
            {line.slice(2)}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mb-4 mt-8">
            {line.slice(3)}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold mb-3 mt-6">
            {line.slice(4)}
          </h3>
        )
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-bold mb-4">
            {line.slice(2, -2)}
          </p>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="mb-2 ml-4">
            {line.slice(2)}
          </li>
        )
      }
      if (line.trim() === "") {
        return <br key={index} />
      }
      if (line.includes("*")) {
        // Simple italic handling
        const parts = line.split("*")
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part))}
          </p>
        )
      }
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Back Button */}
      <div className="py-8">
        <div className="container mx-auto md:px-6">
          <Link href="/blog">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8 cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-purple-500/80 text-white mb-6">{post.category}</Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-white/10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 space-x-6 mb-4 md:mb-0">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-gray-400">Author</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>1.2K views</span>
                  </div>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`text-white hover:bg-white/10 cursor-pointer ${isLiked ? "text-red-400" : ""}`}
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {likes}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`text-white hover:bg-white/10 cursor-pointer ${isBookmarked ? "text-yellow-400" : ""}`}
                >
                  <Bookmark className="w-4 h-4" />
                </Button>

                <div className="relative group">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 cursor-pointer">
                    <Share2 className="w-4 h-4" />
                  </Button>

                  {/* Share Dropdown */}
                  <div className="absolute -right-50 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <GlassCard className="p-4 space-y-2 min-w-[200px]">
                      <button
                        onClick={() => handleShare("twitter")}
                        className="cursor-pointer flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span>Share on Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="cursor-pointer flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span>Share on LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare("facebook")}
                        className="cursor-pointer flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-blue-500" />
                        <span>Share on Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare("copy")}
                        className="cursor-pointer flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <LinkIcon className="w-4 h-4 text-gray-400" />
                        <span>Copy Link</span>
                      </button>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-12">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="text-gray-300 leading-relaxed">{renderContent(post.content)}</div>
          </motion.div>
        </div>
      </div>

      {/* Tags */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <Tag className="w-5 h-5 text-purple-400" />
            <span className="font-semibold">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} className="bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start space-x-6">
              <img
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                className="w-20 h-20 rounded-full flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">About {post.author}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{post.authorBio}</p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 cursor-pointer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 cursor-pointer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Related Posts */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${relatedPost.slug}`}>
                  <GlassCard className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="aspect-video">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold line-clamp-2">{relatedPost.title}</h4>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8">
            <div className="flex items-center space-x-2 mb-6">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <h3 className="text-2xl font-bold">Comments (12)</h3>
            </div>

            {/* Comment Form */}
            <div className="mb-8">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                rows={4}
              />
              <div className="flex justify-end mt-4">
                <Button className="cursor-pointer bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80">
                  Post Comment
                </Button>
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-6">
              <div className="flex space-x-4">
                <img
                  src="/placeholder-user.jpg"
                  alt="John Doe"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold">John Doe</span>
                    <span className="text-sm text-gray-400">2 hours ago</span>
                  </div>
                  <p className="text-gray-300">
                    Great article! I've been looking for a comprehensive guide like this. The implementation strategy
                    section is particularly helpful.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <img
                  src="/placeholder-user.jpg"
                  alt="Sarah Miller"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold">Sarah Miller</span>
                    <span className="text-sm text-gray-400">5 hours ago</span>
                  </div>
                  <p className="text-gray-300">
                    We implemented similar strategies at our company and saw a 250% increase in qualified leads. The key
                    is definitely starting with data quality as mentioned in the article.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Try ADmyBRAND AI Suite and see how AI marketing automation can transform your business.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r cursor-pointer from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80"
            >
              Start Free Trial
            </Button>
          </GlassCard>
        </div>
      </div>

      <footer className="w-full flex items-center justify-center py-4">
        <p className="text-sm text-gray-300">&copy; 2025 ADmyBRAND. All rights are reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 cursor-pointer bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-full flex items-center justify-center text-white hover:from-purple-600/80 hover:to-pink-600/80 transition-all duration-300 z-40"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>  
      )}
    </div>
  )
}
