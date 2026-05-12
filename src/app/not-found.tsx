import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="bg-site-bg py-24 md:py-32 text-center min-h-[60vh] flex items-center">
      <div className="max-w-container mx-auto px-6">
        <div className="font-display text-8xl md:text-9xl font-bold text-accent">404</div>
        <h1 className="font-display text-2xl md:text-3xl text-primary font-bold mt-4">
          The page you sought is not here.
        </h1>
        <p className="text-site-text-muted mt-3 max-w-lg mx-auto">
          The link may be outdated or mistyped. Return home, or browse Guruji&apos;s services and
          articles.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Button href="/">Return Home</Button>
          <Button href="/services" variant="outline">
            Browse Services
          </Button>
        </div>
      </div>
    </section>
  );
}
