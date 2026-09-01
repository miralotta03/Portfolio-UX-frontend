import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ongoingProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return [...projects, ongoingProject].map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = [...projects, ongoingProject].find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-10 border-b border-rule">
        <Link href="/#projekt" className="text-sm text-ink-soft hover:text-ink">
          ← Alla projekt
        </Link>
        <p className="text-sm text-moss mt-6 mb-2">{project.tag}</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-[1.1]">
          {project.title}
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row gap-8 text-sm">
          <div>
            <p className="text-ink-soft mb-1">Roll</p>
            <p className="max-w-xs">{project.role}</p>
          </div>
          <div>
            <p className="text-ink-soft mb-1">Typ</p>
            <p>{project.year}</p>
          </div>
          {project.figma && project.figma.length > 0 && (
          <div>
            <p className="text-ink-soft mb-1">Figma</p>
            <ul className="space-y-1">
              {project.figma.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-moss hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-10 grid sm:grid-cols-[minmax(0,1fr)_220px] gap-10">
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-xl mb-3">Problemet</h2>
            <p className="text-ink-soft leading-relaxed">{project.problem}</p>
          </div>

          {project.images.map((image, i) => (
            <div
              key={image.src}
              className="relative w-full overflow-hidden rounded-sm border border-rule"
              style={{ minHeight: 240 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1000}
                className="w-full h-auto"
                priority={i === 0}
              />
            </div>
          ))}

          <div>
            <h2 className="font-display text-xl mb-3">Resultat</h2>
            <p className="text-ink-soft leading-relaxed">{project.result}</p>
          </div>
        </div>

        <aside className="sm:sticky sm:top-8 self-start">
          <p className="text-sm text-ink-soft mb-3">Process</p>
          <ul className="space-y-4">
            {project.process.map((step) => (
              <li key={step} className="text-sm leading-relaxed border-l border-rule pl-4">
                {step}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-10 border-t border-rule">
        <Link href="/#projekt" className="text-sm text-moss hover:underline">
          ← Tillbaka till alla projekt
        </Link>
      </div>
    </article>
  );
}
