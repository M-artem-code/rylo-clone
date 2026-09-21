import { GhostLink, SlipButton } from "@/components/kolasik/slip-button";
import { shippingCopy } from "@/data/shipping";

export default function ShippingPage() {
  return (
    <main>
      <section className="ship-head">
        <div className="kicker">{shippingCopy.kicker}</div>
        <h1>{shippingCopy.title}</h1>
        <p className="sub">{shippingCopy.sub}</p>
      </section>
      <ul className="facts">
        {shippingCopy.facts.map((fact) => (
          <li key={fact.term}>
            <span className="k">{fact.term}</span>
            <span className={fact.placeholder ? "placeholder" : undefined}>{fact.value}</span>
          </li>
        ))}
      </ul>
      <section className="ship-table">
        <table className="doc-table">
          <thead>
            <tr>
              {shippingCopy.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shippingCopy.rows.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <td className="placeholder">{row[1]}</td>
                <td className="placeholder">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <p className="ship-note">{shippingCopy.note}</p>
      <section className="ship-cta">
        <SlipButton href={shippingCopy.primaryHref}>{shippingCopy.primary}</SlipButton>
        <GhostLink href={shippingCopy.secondaryHref}>{shippingCopy.secondary}</GhostLink>
      </section>
    </main>
  );
}
