import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type ImageSlotProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  containerClassName?: string;
};

export default function ImageSlot({
  src,
  alt,
  containerClassName,
  className,
  ...rest
}: ImageSlotProps) {
  return (
    <div className={cn('relative overflow-hidden bg-site-surface', containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill={rest.fill ?? true}
        className={cn('object-cover', className)}
        sizes={rest.sizes ?? '(max-width: 768px) 100vw, 50vw'}
        {...rest}
      />
    </div>
  );
}
