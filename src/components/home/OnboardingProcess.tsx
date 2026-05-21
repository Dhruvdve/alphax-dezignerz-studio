import { onboardingProcess } from "@/content/experience";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

export function OnboardingProcess() {
  return (
    <Section variant="navy" id="process">
      <FadeIn>
        <span className="label-accent">{onboardingProcess.eyebrow}</span>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {onboardingProcess.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {onboardingProcess.subheadline}
        </p>
      </FadeIn>

      <ol className="relative mt-12 space-y-0">
        {onboardingProcess.steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.06}>
            <li className="relative grid gap-3 border-l border-white/20 py-8 pl-8 sm:grid-cols-12 sm:gap-8 sm:pl-10">
              <span
                className="absolute -left-2 top-10 flex h-4 w-4 rounded-full bg-white ring-4 ring-navy"
                aria-hidden
              />
              <div className="sm:col-span-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                  {step.phase}
                </p>
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/75 sm:col-span-9 sm:text-base">
                {step.body}
              </p>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
