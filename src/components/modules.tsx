import { SectionHeading } from "@/components/section-heading";

type ModulesProps = {
  kind: "les" | "pole" | "sklon";
  caption: string;
};

export function Modules({ kind, caption }: ModulesProps) {
  return (
    <section className="bg-charcoal py-[72px]">
      <SectionHeading index="03" title="МОДУЛИ" copy={caption} dark />
      <div className="page-shell page-gutter mt-12">
        <div
          className="relative h-[220px] border border-rule-dark bg-slab md:h-[280px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #302e2a 1px, transparent 1px), linear-gradient(to bottom, #302e2a 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 25%",
          }}
        >
          {kind === "les" ? <LesModules /> : null}
          {kind === "pole" ? <PoleModules /> : null}
          {kind === "sklon" ? <SklonModules /> : null}
        </div>
      </div>
    </section>
  );
}

function ModuleBox({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <div className={`absolute border border-bone bg-[#4e4942] ${className}`}>
      <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.16em] text-bone">
        {label}
      </span>
    </div>
  );
}

function LesModules() {
  return (
    <>
      <ModuleBox className="top-[28%] left-[27%] h-[39%] w-[16%]" label="01" />
      <ModuleBox className="top-[21%] left-[44.5%] h-[46%] w-[13.5%]" label="02" />
      <ModuleBox className="top-[34%] left-[59%] h-[32%] w-[11.5%]" label="03" />
    </>
  );
}

function PoleModules() {
  return (
    <>
      <ModuleBox className="top-[34%] left-[15%] h-[26%] w-[23%]" label="01" />
      <ModuleBox className="top-[34%] left-[38%] h-[26%] w-[26%]" label="02" />
      <ModuleBox className="top-[34%] left-[64%] h-[26%] w-[21%]" label="03" />
    </>
  );
}

function SklonModules() {
  return (
    <>
      <ModuleBox className="top-[14%] left-[24%] h-[23%] w-[17%]" label="01" />
      <ModuleBox className="top-[34%] left-[43%] h-[23%] w-[17%]" label="02" />
      <ModuleBox className="top-[54%] left-[61%] h-[23%] w-[17%]" label="03" />
    </>
  );
}
