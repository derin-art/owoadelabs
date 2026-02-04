import { siteContent } from "@/app/data/site-content";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
           Comprehensive digital solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {siteContent.services.map((service) => {
           const Icon = service.icon;
           return (
            <div key={service.id} className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-white">{service.title}</h2>
              <p className="mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-16 border-t border-neutral-200 pt-8 dark:border-neutral-800 text-center">
         <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{siteContent.policies.refund.title}</h2>
         <p className="max-w-2xl mx-auto text-sm text-neutral-600 dark:text-neutral-400">
           {siteContent.policies.refund.content}
         </p>
      </div>
    </div>
  );
}
