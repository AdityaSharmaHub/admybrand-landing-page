export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="w-32 h-8 bg-white/10 rounded animate-pulse mb-8" />
        </div>
      </div>

      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-6 bg-white/10 rounded animate-pulse mb-6" />
          <div className="w-full h-16 bg-white/10 rounded animate-pulse mb-6" />
          <div className="w-3/4 h-6 bg-white/10 rounded animate-pulse mb-8" />

          <div className="flex items-center space-x-6 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="w-32 h-4 bg-white/10 rounded animate-pulse" />
              <div className="w-24 h-3 bg-white/10 rounded animate-pulse" />
            </div>
          </div>

          <div className="aspect-video bg-white/10 rounded-2xl animate-pulse mb-12" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-full h-4 bg-white/10 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
