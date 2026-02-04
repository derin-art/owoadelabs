import { siteContent } from "@/app/data/site-content";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">About Us</h1>
             <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              {siteContent.about.mission}
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {siteContent.about.stats.map((stat) => (
             <div key={stat.label} className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
                <span className="text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</span>
                <span className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">{stat.label}</span>
             </div>
          ))}
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Our Story</h2>
            <p>{siteContent.about.story}</p>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Our Vision</h2>
             <p>{siteContent.about.vision}</p>
        </div>
      </div>
    </div>
  );
}
