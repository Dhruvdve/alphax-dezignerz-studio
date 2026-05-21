import { whyAlphaXComparison } from "@/content/experience";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

export function WhyAlphaXComparison() {
  const { columns, rows, eyebrow, headline, subheadline } = whyAlphaXComparison;

  return (
    <Section variant="surface">
      <FadeIn>
        <span className="label-accent">{eyebrow}</span>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">{headline}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/85">{subheadline}</p>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse overflow-hidden rounded-2xl border border-navy/10 bg-white text-left shadow-soft">
          <thead>
            <tr className="border-b border-navy/10 bg-surfaceMuted">
              <th className="p-3 text-left text-xs font-bold text-navy/60 sm:p-4 sm:text-sm">
                Compare
              </th>
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={`p-3 text-center text-xs font-bold sm:p-4 sm:text-sm ${
                    i === 0 ? "bg-navy text-white" : "text-navy"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-navy/10 last:border-0">
                <td className="p-3 text-sm font-semibold text-navy sm:p-4">{row.label}</td>
                {row.values.map((val, i) => (
                  <td
                    key={`${row.label}-${i}`}
                    className={`p-3 text-center text-xs font-medium sm:p-4 sm:text-sm ${
                      i === 0 ? "bg-navy/5 font-semibold text-navy" : "text-navy/80"
                    }`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </FadeIn>
    </Section>
  );
}
