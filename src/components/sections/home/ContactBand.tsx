'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { SERVICES } from '@/constants/services';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email address'),
  problemType: z.string().min(1, 'Select a problem type'),
  message: z.string().min(10, 'Please describe your concern (10+ characters)'),
});

type FormValues = z.infer<typeof schema>;

export default function ContactBand() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    console.info('Contact submission:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <section className="bg-site-surface py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeader
            align="left"
            accent="Get in Touch"
            title="Request a Consultation"
            subtitle="Fill in your details and Guruji's team will contact you within 24 hours."
          />
          {submitted ? (
            <div className="flex items-start gap-3 bg-accent-pale/60 border border-accent rounded-md p-4 text-primary">
              <CheckCircle2 className="text-accent shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Message received.</div>
                <p className="text-sm text-site-text-muted mt-1">
                  Thank you. We will be in touch shortly. For urgent matters, call{' '}
                  <a href={`tel:${SITE_CONFIG.phone}`} className="underline">
                    {SITE_CONFIG.phoneDisplay}
                  </a>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent"
                />
                {errors.name && <p className="text-xs text-primary mt-1">{errors.name.message}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent"
                  />
                  {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent"
                  />
                  {errors.email && <p className="text-xs text-primary mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <select
                  {...register('problemType')}
                  defaultValue=""
                  className="w-full px-4 py-3 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent"
                >
                  <option value="" disabled>
                    Problem Type
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.problemType && (
                  <p className="text-xs text-primary mt-1">{errors.problemType.message}</p>
                )}
              </div>
              <div>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-primary mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-site-white p-5 rounded-md border border-site-border/40">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-2">
              Address
            </div>
            <p className="text-sm flex gap-2 items-start">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              {SITE_CONFIG.address}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-site-white p-5 rounded-md border border-site-border/40">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-2">
                Phone
              </div>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm flex items-center gap-2">
                <Phone size={14} className="text-accent" /> {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="bg-site-white p-5 rounded-md border border-site-border/40">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-2">
                Email
              </div>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm flex items-center gap-2">
                <Mail size={14} className="text-accent" /> {SITE_CONFIG.email}
              </a>
            </div>
          </div>
          <div className="rounded-md overflow-hidden border-2 border-accent aspect-[4/3]">
            <iframe
              src={SITE_CONFIG.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Centre location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
