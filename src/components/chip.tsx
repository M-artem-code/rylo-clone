type ChipProps = {
  children: React.ReactNode;
  accent?: boolean;
};

export function Chip({ children, accent = false }: ChipProps) {
  return <span className={accent ? "chip chip--cyan" : "chip"}>{children}</span>;
}
