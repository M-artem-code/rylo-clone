import Image from "next/image";

import { Eyebrow } from "@/components/site/Eyebrow";
import { OrbitalButton } from "@/components/site/OrbitalButton";
import { capsuleHero, capsuleInterior } from "@/data/capsule";

export function CapsuleView() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="px-page relative z-10 pt-12">
          <Eyebrow>{capsuleHero.eyebrow}</Eyebrow>
          <h1 className="mt-3 font-display text-[52px] leading-none font-extrabold text-navy md:text-[64px]">
            {capsuleHero.title}
          </h1>
          <p className="mt-3 font-display text-[24px] font-semibold text-cobalt md:text-[28px]">{capsuleHero.name}</p>
          <p className="mt-6 max-w-[380px] font-body text-[17px] leading-7 text-mute">{capsuleHero.lead}</p>
        </div>
        <div className="relative mx-auto mt-[-40px] h-[520px] max-w-[1400px] md:h-[640px]">
          <Image src={capsuleHero.image} alt="" fill className="object-contain object-[70%_42%]" sizes="1400px" />
          {capsuleHero.hotspots.map((spot) => (
            <div
              key={spot.label}
              className="absolute hidden items-center gap-2 md:flex"
              style={{ left: spot.x, top: spot.y }}
            >
              <span className="size-3 rounded-full border-2 border-white bg-violet" />
              <span className="rounded-[10px] border border-line bg-white/90 px-3 py-1.5 font-ui text-[13px] font-semibold text-navy">
                {spot.label}
              </span>
            </div>
          ))}
        </div>
        <div className="px-page relative z-10 pb-16">
          <div className="max-w-[740px] rounded-[20px] bg-white/90 p-7 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {capsuleHero.specs.map((spec) => (
                <div key={spec.label}>
                  <p className="font-display text-[26px] font-bold text-navy">{spec.value}</p>
                  <p className="mt-1 font-mono text-[11px] text-mute">{spec.label}</p>
                </div>
              ))}
            </div>
            <OrbitalButton href={capsuleHero.cta.href} className="mt-6">
              {capsuleHero.cta.label}
            </OrbitalButton>
          </div>
        </div>
      </section>

      <section className="grid min-h-[720px] bg-white lg:grid-cols-[1.1fr_1fr]">
        <div className="relative min-h-[420px]">
          <Image
            src={capsuleInterior.interiorImage}
            alt=""
            fill
            className="object-cover object-[50%_55%]"
            sizes="50vw"
          />
        </div>
        <div className="px-8 py-12 lg:px-12">
          <div className="relative mb-8 h-[280px] overflow-hidden rounded-[20px]">
            <Image
              src={capsuleInterior.explodedImage}
              alt=""
              fill
              className="object-contain object-center"
              sizes="600px"
            />
          </div>
          <Eyebrow>{capsuleInterior.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-[26px] font-bold text-navy">{capsuleInterior.title}</h2>
          <ul className="mt-8 space-y-6">
            {capsuleInterior.items.map((item) => (
              <li key={item.title}>
                <p className="font-ui text-[16px] font-semibold text-navy">{item.title}</p>
                <p className="mt-1 font-body text-[14px] text-mute">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
