// app/page.tsx
// Drop this into a fresh `create-next-app` project (with TypeScript + Tailwind)
// Replace the placeholder text/links with your own info.

type Project = {
  name: string;
  description: string;
  contribution: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    name: "Project One",
    description: "One sentence on the problem this solves.",
    contribution: "What you specifically built or designed (e.g. 'Built the caching layer and API').",
    tech: ["Next.js", "PostgreSQL", "Redis"],
    demo: "https://example.com",
    repo: "https://github.com/yourname/project-one",
  },
  {
    name: "Project Two",
    description: "One sentence on the problem this solves.",
    contribution: "Your specific role and what made it technically interesting.",
    tech: ["Python", "FastAPI", "Docker"],
    demo: "https://example.com",
    repo: "https://github.com/yourname/project-two",
  },
  {
    name: "Project Three",
    description: "One sentence on the problem this solves.",
    contribution: "What you built and any tradeoffs worth mentioning.",
    tech: ["TypeScript", "AWS", "Terraform"],
    repo: "https://github.com/yourname/project-three",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Rachit Pokhrel
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
          Backend engineer who likes distributed systems and clean APIs.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="mailto:rachit.pokhrel@gmail.com" className="underline underline-offset-4 hover:text-neutral-500">
            Email
          </a>
          <a href="https://github.com/rachitpokhrel" className="underline underline-offset-4 hover:text-neutral-500">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rachitpokhrel" className="underline underline-offset-4 hover:text-neutral-500">
            LinkedIn
          </a>
          <a href="/resume.pdf" className="underline underline-offset-4 hover:text-neutral-500">
            Resume
          </a>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-6">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <div className="flex gap-3 text-sm">
                  {project.demo && (
                    <a href={project.demo} className="underline underline-offset-4">
                      Demo
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} className="underline underline-offset-4">
                      Code
                    </a>
                  )}
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
                {project.description}
              </p>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm mb-3">
                {project.contribution}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
