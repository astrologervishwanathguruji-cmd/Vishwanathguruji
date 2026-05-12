import { Award, BookOpen, Globe2, Users2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const credentials = [
  {
    icon: BookOpen,
    title: 'Classical Training',
    description:
      'Deep study in Brihat Parashara Hora Shastra, Jaimini Sutras, and the Atharva Veda — under traditional gurukul guidance.',
  },
  {
    icon: Users2,
    title: '55,000+ Consultations',
    description:
      'Over three decades of direct one-on-one counsel — across every life situation, from marriage to court cases.',
  },
  {
    icon: Award,
    title: 'Recognition',
    description:
      'Featured in regional press and television; recipient of community honours for ethical practice and service.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description:
      'Clients across India and the diaspora — consultations offered in-person, over phone, and via WhatsApp.',
  },
];

export default function CredentialsSection() {
  return (
    <section className="bg-site-surface py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="Credentials"
          title="A Lifetime in the Vedic Tradition"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-site-white p-6 rounded-md border border-site-border/40 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent-pale text-accent mx-auto flex items-center justify-center mb-4">
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">{title}</h3>
              <p className="text-sm text-site-text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
