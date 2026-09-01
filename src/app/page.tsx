import Image from "next/image";
import Link from "next/link";
import { ongoingProject, projects } from "@/lib/projects";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-14 border-b border-rule">
        <p className="text-sm text-moss mb-3">Frontendutvecklare & UX-designer, Göteborg</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] max-w-2xl">
          Jag designar flöden och bygger dem sen på riktigt.
        </h1>
        <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
          Fem case studies nedan, från ett grupprojekt om matleverans till en
          egen redesign av en förskolas hemsida. Jag jobbar i Figma men landar
          helst i kod.
        </p>
      </section>

      <section id="projekt" className="mx-auto max-w-4xl px-6 py-10">
        <ul>
          {projects.map((project) => (
            <li key={project.slug} className="group border-b border-rule">
              <Link
                href={`/projekt/${project.slug}`}
                className="flex items-baseline justify-between gap-6 py-6"
              >
                <div>
                  <h2 className="font-display text-2xl group-hover:text-moss transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-ink-soft mt-1">{project.tag}</p>
                </div>
                <span className="text-sm text-ink-soft whitespace-nowrap">
                  {project.year} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 border-t border-rule">
        <p className="text-sm text-mustard mb-2">Pågående</p>
        <Link
          href={`/projekt/${ongoingProject.slug}`}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          <div className="relative w-full sm:w-56 aspect-[9/16] shrink-0 overflow-hidden rounded-sm border border-rule">
            <Image
              src={ongoingProject.images[0].src}
              alt={ongoingProject.images[0].alt}
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl">{ongoingProject.title}</h2>
            <p className="text-ink-soft mt-2 max-w-md leading-relaxed">
              {ongoingProject.summary}
            </p>
            <span className="text-sm text-moss mt-3 inline-block">
              Se var det ligger →
            </span>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 border-t border-rule text-sm text-ink-soft">
        <p>
          Andra experiment: en landningssida om ångest byggd från grunden
          (Feelseen) och en tidig Figma-prototyp för den här portfolion,
          som senare kodades. Fråga gärna om dem direkt.
        </p>
      </section>
    </div>
  );
}
