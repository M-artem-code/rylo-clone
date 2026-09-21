import { RequestForm } from "@/components/kolasik/request-form";
import { SizeStave } from "@/components/kolasik/size-stave";
import { WheelWindow } from "@/components/kolasik/wheel-window";
import { ring15 } from "@/data/products";
import { requestCopy } from "@/data/request";
import { contacts } from "@/data/site";

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function withInch(value: string | undefined) {
  if (!value) return requestCopy.defaultDiameter;
  return value.includes("\"") ? value : `${value}"`;
}

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const diameter = withInch(first(params.diameter));
  const material = first(params.material) ?? requestCopy.defaultMaterial;
  const model = first(params.model) ?? requestCopy.defaultModel;
  const activeDiameter = diameter.replace("\"", "") as "12" | "15" | "18" | "21";

  return (
    <main>
      <section className="request-page">
        <aside className="request-aside">
          <WheelWindow src={ring15.image} alt={ring15.name} size="md" />
          <div style={{ marginTop: 18 }}>
            <SizeStave
              active={
                activeDiameter === "12" ||
                activeDiameter === "15" ||
                activeDiameter === "18" ||
                activeDiameter === "21"
                  ? activeDiameter
                  : "15"
              }
            />
          </div>
          <div className="kicker">{requestCopy.kicker}</div>
          <h1>{requestCopy.title}</h1>
          <p className="help">{requestCopy.help}</p>
          <div className="request-contacts">
            <div>{contacts.phone}</div>
            <div>{contacts.email}</div>
            <div>{contacts.telegram}</div>
          </div>
        </aside>
        <RequestForm
          defaults={{
            diameter,
            material,
            model,
          }}
        />
      </section>
    </main>
  );
}
