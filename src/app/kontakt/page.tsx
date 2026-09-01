export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-4xl mb-8">Kontakt</h1>
      <div className="max-w-xl space-y-4 text-ink-soft leading-relaxed">
        <ul className="space-y-2">
          <li>
            <a href="mailto:din@mail.se" className="text-moss hover:underline">
              miralotta03@hotmail.se
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/ditt-namn"
              className="text-moss hover:underline"
            >
              https://www.linkedin.com/in/mira-olsson-b05970255/
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ditt-namn"
              className="text-moss hover:underline"
            >
              https://github.com/miralotta03
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
