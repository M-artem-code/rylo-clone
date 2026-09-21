import Image from "next/image";
import { Chip } from "@/components/chip";
import { SectionHeading } from "@/components/section-heading";
import { homeAtmosphere } from "@/data/home";

export function Atmosphere() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="atmosphere__top">
          <div>
            <SectionHeading kicker={homeAtmosphere.kicker} title={homeAtmosphere.title} />
            <p className="lede">{homeAtmosphere.body}</p>
          </div>
          <div className="atmosphere__labels">
            {homeAtmosphere.labels.map((label, index) => (
              <Chip key={label} accent={index === homeAtmosphere.labels.length - 1}>
                {label}
              </Chip>
            ))}
          </div>
        </div>
        <div className="atmosphere__frame">
          <Image
            src={homeAtmosphere.image.src}
            alt={homeAtmosphere.image.alt}
            width={1160}
            height={520}
          />
          <div className="atmosphere__caption mono">{homeAtmosphere.image.caption}</div>
        </div>
      </div>
    </section>
  );
}
