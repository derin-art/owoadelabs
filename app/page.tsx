export default function Home() {
  const links = [
    { name: "Rowland's Portfolio", link: "https://rojthegoat.com", description: "Creative Development" },
    { name: "Lagos meet's editorials", link: "https://lagos-meet.com", description: "Creative Development, Web Development" },
    { name: "Seabreeze", link: "https://challenge.theseabreezebook.com/", description: "Creative Development, Web Development" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8 font-mono text-black dark:bg-black dark:text-white">
      <main className="flex w-full max-w-md flex-col space-y-12">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tighter">OwoadeLabs </h1>

          <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 max-w-7xl">We build design-led, technology-driven solutions that solve real-world problems.</div>
          
        </header>



<div>
  <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Projects</h2>
</div>
        <ul className="flex flex-col space-y-3">
          {links.map((project) => (
            <li key={project.name}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-transparent py-2 transition-all hover:border-neutral-200 dark:hover:border-neutral-800"
              >
                <span className="text-base font-medium transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                  {project.name}
                </span>
                <span className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-neutral-400">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <a
            href="mailto:owoadelabs@gmail.com"
            className="inline-block rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Contact
          </a>
        </div>
      </main>

     
    </div>
  );
}
