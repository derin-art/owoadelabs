import { siteContent } from "@/app/data/site-content";

export default function PolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">Legal & Policies</h1>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none">
             <section className="mb-12">
               <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">{siteContent.policies.privacy.title}</h2>
               <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {siteContent.policies.privacy.content}
               </p>
             </section>

             <section className="mb-12">
               <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">{siteContent.policies.terms.title}</h2>
               <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {siteContent.policies.terms.content}
               </p>
             </section>

             <section>
               <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">{siteContent.policies.refund.title}</h2>
               <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {siteContent.policies.refund.content}
               </p>
             </section>
          </div>
        </div>
      </div>
    </div>
  );
}
