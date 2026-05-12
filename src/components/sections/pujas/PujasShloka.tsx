import { PUJAS_SHLOKA } from '@/constants/pujas';

export default function PujasShloka() {
  return (
    <section className="bg-site-surface py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <blockquote>
          <p
            lang="kn"
            className="font-kannada text-2xl md:text-3xl text-primary leading-relaxed whitespace-pre-line"
          >
            {PUJAS_SHLOKA.kannada}
          </p>
          <footer className="mt-6 text-base italic font-display text-site-text-muted">
            — {PUJAS_SHLOKA.translation}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
