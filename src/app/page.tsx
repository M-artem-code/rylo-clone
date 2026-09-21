import Image from "next/image";
import Link from "next/link";

import { NlButton } from "@/components/northline/NlButton";
import { home } from "@/data/home";

export default function HomePage() {
  const kitchen = home.directions.items[0];
  const wardrobe = home.directions.items[1];
  const storage = home.directions.items[2];
  const soft = home.directions.items[3];
  const commercial = home.directions.items[4];

  return (
    <main>
      <section className="relative h-[640px] overflow-hidden md:h-[760px]">
        <Image
          src={home.hero.image}
          alt={home.hero.imageAlt}
          fill
          priority
          className="object-cover object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-nl-ink/55 via-nl-ink/20 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-center px-5 md:px-[72px]">
          <p className="text-[13px] tracking-[0.12em] text-nl-cream">{home.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-[620px] font-display text-[40px] leading-[1.12] font-medium text-white md:text-[58px]">
            {home.hero.title}
          </h1>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.45] text-[#ebe4dc] md:text-[17px]">
            {home.hero.text}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <NlButton href={home.hero.primary.href}>{home.hero.primary.label}</NlButton>
            <NlButton href={home.hero.secondary.href} variant="ghost-light">
              {home.hero.secondary.label}
            </NlButton>
          </div>
        </div>
        <p className="absolute right-5 bottom-6 text-[12px] tracking-[0.06em] text-nl-cream md:right-[72px]">
          {home.hero.caption}
        </p>
      </section>

      <section className="px-5 py-16 md:px-[72px] md:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">
          {home.approach.label}
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start">
          <h2 className="max-w-[720px] font-display text-[32px] leading-[1.15] font-medium md:text-[40px]">
            {home.approach.title}
          </h2>
          <div>
            <p className="max-w-[500px] text-[16px] leading-[1.5] text-nl-muted">
              {home.approach.text}
            </p>
            <div className="relative mt-10 h-[200px] w-full max-w-[500px] bg-nl-cream">
              <Image
                src={home.approach.image}
                alt={home.approach.imageAlt}
                fill
                className="object-contain object-left"
                sizes="500px"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      <section className="px-5 py-16 md:px-[72px] md:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">
          {home.directions.label}
        </p>
        <h2 className="mt-8 font-display text-[26px] leading-[1.15] font-medium md:text-[28px]">
          {home.directions.title}
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[820fr_452fr]">
          <Link href={kitchen.href} className="group block">
            <div className="relative h-[280px] md:h-[420px]">
              <Image
                src={kitchen.image}
                alt={kitchen.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 820px, 100vw"
              />
            </div>
            <div className="bg-nl-ink px-7 py-5 text-nl-cream">
              <p className="text-[20px] font-medium">{kitchen.title}</p>
              <p className="mt-1 text-[13px] text-[#d2c8be]">{kitchen.text}</p>
            </div>
          </Link>
          <div className="flex flex-col gap-6">
            <Link href={wardrobe.href} className="group block">
              <div className="relative h-[200px] md:h-[236px]">
                <Image src={wardrobe.image} alt={wardrobe.imageAlt} fill className="object-cover" sizes="452px" />
              </div>
              <p className="mt-3 text-[18px] font-medium">{wardrobe.title}</p>
              <p className="mt-1 text-[13px] text-nl-muted">{wardrobe.text}</p>
            </Link>
            <Link href={storage.href} className="group block">
              <div className="relative h-[160px] md:h-[180px]">
                <Image src={storage.image} alt={storage.imageAlt} fill className="object-cover" sizes="452px" />
              </div>
              <p className="mt-3 text-[18px] font-medium">{storage.title}</p>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[soft, commercial].map((item) => (
            <Link key={item.title} href={item.href} className="block">
              <div className="relative h-[240px] md:h-[340px]">
                <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="50vw" />
              </div>
              <p className="mt-4 text-[18px] font-medium">{item.title}</p>
              <p className="mt-1 text-[13px] text-nl-muted">{item.text}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[420fr_300fr_140fr_140fr_minmax(180px,1fr)]">
          {home.directions.custom.images.map((image) => (
            <div key={image.src} className="relative h-[180px] md:h-[220px]">
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="300px" />
            </div>
          ))}
          <div className="flex flex-col justify-center py-2">
            <p className="text-[20px] font-medium">{home.directions.custom.title}</p>
            <p className="mt-3 text-[14px] leading-[1.45] text-nl-muted">
              {home.directions.custom.text}
            </p>
            <Link href={home.directions.custom.href} className="mt-6 text-[13px] font-medium text-nl-terr">
              {home.directions.custom.link}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      <section className="px-5 py-16 md:px-[72px] md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">
              {home.materials.label}
            </p>
            <h2 className="mt-8 max-w-[640px] font-display text-[26px] leading-[1.15] font-medium md:text-[28px]">
              {home.materials.title}
            </h2>
          </div>
          <Link href={home.materials.href} className="hidden text-[14px] font-medium text-nl-terr md:block">
            {home.materials.link}
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-6">
          {home.materials.items.map((item) => (
            <Link key={item.title} href={home.materials.href} className="block">
              <div className="relative h-[120px] md:h-[160px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="204px" />
              </div>
              <p className="mt-3 text-[13px] tracking-[0.08em] text-nl-muted">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      <section className="px-5 py-16 md:px-[72px] md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">
              {home.projects.label}
            </p>
            <h2 className="mt-8 font-display text-[26px] leading-[1.15] font-medium md:text-[28px]">
              {home.projects.title}
            </h2>
          </div>
          <Link href={home.projects.href} className="hidden text-[14px] font-medium text-nl-terr md:block">
            {home.projects.link}
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-[780fr_492fr]">
          {home.projects.items.slice(0, 2).map((item) => (
            <Link key={item.num} href={home.projects.href} className="block">
              <div className="relative h-[240px] md:h-[360px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="50vw" />
              </div>
              <p className="mt-4 text-[13px] text-nl-ink">
                {item.num}  {item.title}
              </p>
              <p className="mt-1 text-[13px] text-nl-muted">{item.text}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {home.projects.items.slice(2).map((item) => (
            <Link key={item.num} href={home.projects.href} className="block">
              <div className="relative h-[200px] md:h-[240px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="50vw" />
              </div>
              <p className="mt-4 text-[13px] text-nl-muted">
                {item.num}  {item.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      <section className="px-5 py-16 md:px-[72px] md:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">
          {home.process.label}
        </p>
        <h2 className="mt-8 font-display text-[26px] leading-[1.15] font-medium md:text-[28px]">
          {home.process.title}
        </h2>
        <div className="relative mt-12 grid grid-cols-2 gap-6 md:grid-cols-5">
          <div className="pointer-events-none absolute top-[86px] right-10 left-10 hidden h-px bg-nl-line md:block" />
          {home.process.steps.map((step) => (
            <Link key={step.num} href={home.process.href} className="relative block">
              <div className="relative h-[120px]">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="220px" />
              </div>
              <span className="absolute top-[78px] left-1/2 z-10 -translate-x-1/2 bg-nl-bg px-3 text-[13px] font-medium text-nl-terr">
                {step.num}
              </span>
              <p className="mt-8 text-[15px] font-medium">{step.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-5 border-t border-nl-line md:mx-[72px]" />

      <section className="px-5 py-16 md:px-[72px] md:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-nl-muted">{home.why.label}</p>
        <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
          <ul className="border-t border-nl-line">
            {home.why.reasons.map((reason) => (
              <li
                key={reason}
                className="border-b border-nl-line py-3.5 text-[20px] md:text-[22px]"
              >
                {reason}
              </li>
            ))}
          </ul>
          <p className="max-w-[560px] text-[18px] leading-[1.45] text-nl-muted">{home.why.text}</p>
        </div>
      </section>

      <section className="bg-nl-bg2 px-5 py-16 md:px-[72px] md:py-[80px]">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_360px]">
          <div>
            <h2 className="max-w-[640px] font-display text-[36px] leading-[1.15] font-medium whitespace-pre-line md:text-[48px]">
              {home.cta.title}
            </h2>
            <p className="mt-8 max-w-[560px] text-[17px] leading-[1.45] text-nl-muted">
              {home.cta.text}
            </p>
            <NlButton href={home.cta.href} className="mt-10">
              {home.cta.label}
            </NlButton>
          </div>
          <div className="relative h-[240px] md:h-[280px]">
            <Image
              src={home.cta.image}
              alt={home.cta.imageAlt}
              fill
              className="object-cover"
              sizes="360px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
