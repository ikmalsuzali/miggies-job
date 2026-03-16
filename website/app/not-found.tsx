import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-brass mb-4">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4">
          Page not found
        </h1>
        <p className="text-ink-light text-base mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/">Return Home</Button>
      </div>
    </section>
  )
}
