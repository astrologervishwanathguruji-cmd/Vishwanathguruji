'use client';

import { BaseSyntheticEvent, useState } from 'react';
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

/** Custom chevron, native OS arrows ignore padding and sit flush right */
const PROBLEM_TYPE_SELECT_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B6258' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;

export default function ContactBand() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues, event?: BaseSyntheticEvent) => {
    setSubmitted(true);
    (event?.target as HTMLFormElement | undefined)?.submit();
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
            <form
              action={`https://formsubmit.co/${SITE_CONFIG.email}`}
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New consultation request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
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
                  className="w-full appearance-none cursor-pointer pl-4 pr-12 py-3 bg-site-white border border-site-border/60 rounded-md text-sm focus:outline-none focus:border-accent"
                  style={{
                    backgroundImage: PROBLEM_TYPE_SELECT_BG,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.125rem 1.125rem',
                  }}
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="min-w-0 bg-site-white p-5 rounded-md border border-site-border/40">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-2">
                Phone
              </div>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-sm flex items-start gap-2 min-w-0 break-words"
              >
                <Phone size={14} className="text-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
            <div className="min-w-0 bg-site-white p-5 rounded-md border border-site-border/40">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-2">
                Email
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm flex w-full min-w-0 max-w-full items-start gap-2"
              >
                <Mail size={14} className="text-accent shrink-0 mt-0.5" />
                <span className="min-w-0 max-w-full break-all">{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>
          <div className="rounded-md overflow-hidden border-2 border-accent aspect-[4/3]">
            <iframe
              src={SITE_CONFIG.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Astrologer Vishwanath Guruji Jayanagar on Google Maps"
            />
          </div>
          <a
            href={SITE_CONFIG.mapDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
