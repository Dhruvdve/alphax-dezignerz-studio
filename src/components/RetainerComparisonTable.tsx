import { retainerComparison } from "@/content/experience";
import { FadeIn } from "@/components/FadeIn";

export function RetainerComparisonTable() {
  const { columns, rows, popularIndex } = retainerComparison;

  return (
    <FadeIn delay={0.1} className="mt-12 overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl border border-navy/10 bg-white text-left shadow-soft">
        <thead>
          <tr className="border-b border-navy/10 bg-surfaceMuted">
            <th className="p-4 text-sm font-bold text-navy/60">Feature</th>
            {columns.map((col, i) => (
              <th
                key={col}
                className={`p-4 text-sm font-bold ${
                  i === popularIndex ? "bg-navy text-white" : "text-navy"
                }`}
              >
                <span className="block">{col}</span>
                {i === popularIndex ? (
                  <span
                    className="mt-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: "#2E4BDB" }}
                  >
                    Most Popular
                  </span>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-navy/10 last:border-0">
              <td className="p-4 text-sm font-semibold text-navy">{row.label}</td>
              {row.values.map((val, i) => (
                <td
                  key={`${row.label}-${i}`}
                  className={`p-4 text-center text-sm font-medium ${
                    i === popularIndex ? "bg-navy/5 text-navy" : "text-navy/85"
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
  );
}
