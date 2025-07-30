import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog & Resources - ADmyBRAND AI Suite",
  description: "Stay ahead with the latest AI marketing insights, guides, and industry trends from ADmyBRAND AI Suite.",
}

export default function BlogPage() {
  return <BlogClientPage />
}