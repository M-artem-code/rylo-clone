import type { MaterialId } from "@/data/site";

export function MaterialChip({
  id,
  label,
  active = false,
  onClick,
}: {
  id: MaterialId;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const className = `chip${active ? " active" : ""}`;
  const inner = (
    <>
      <i className={`swatch sw-${id}`} />
      <span className="name">{label}</span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick} aria-pressed={active}>
        {inner}
      </button>
    );
  }

  return <span className={className}>{inner}</span>;
}
