import { Reveal } from './Reveal';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionTitleProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-3xl text-left';

  return (
    <Reveal className={alignment}>
      <p className={`eyebrow ${light ? 'text-clay-light' : 'text-clay'}`}>
        {eyebrow}
      </p>
      <h2
        className={`display-title mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${
          light ? 'text-white' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-7 sm:text-lg ${
            light ? 'text-white/72' : 'text-ink/68'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

