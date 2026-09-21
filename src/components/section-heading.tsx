type SectionHeadingProps = {
  kicker: string;
  title: string;
  titleAs?: "h1" | "h2";
  titleClassName?: string;
};

export function SectionHeading({
  kicker,
  title,
  titleAs = "h2",
  titleClassName = "section-title",
}: SectionHeadingProps) {
  const Title = titleAs;
  return (
    <>
      <div className="kicker">{kicker}</div>
      <Title className={titleClassName}>{title}</Title>
      <div className="rule" />
    </>
  );
}
