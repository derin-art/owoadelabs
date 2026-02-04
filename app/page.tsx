import Link from 'next/link';
import { siteContent } from './data/site-content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            {siteContent.company.tagline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            {siteContent.company.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/#contact"
              className="rounded-md bg-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Get started
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Everything you need to scale
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              We provide end-to-end solutions that help you navigate the digital landscape with confidence.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {siteContent.services.slice(0, 3).map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="flex flex-col">
                     <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white">
                          <Icon className="h-6 w-6 text-white dark:text-black" aria-hidden="true" />
                      </div>
                      {service.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                      <p className="flex-auto">{service.description}</p>
                      <p className="mt-6">
                        <Link href="/services" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
                          Learn more <span aria-hidden="true">→</span>
                        </Link>
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-24 sm:py-32 dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              A selection of our recent work.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {siteContent.projects.map((project) => (
              <article key={project.name} className="flex flex-col items-start justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <div className="group relative w-full">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
                 <div className="relative mt-8 flex items-center gap-x-4">
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                        View Project <span aria-hidden="true">→</span>
                     </a>
                 </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 sm:py-32 dark:bg-black hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-neutral-900 dark:text-white">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Trusted by the impactful
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-ms-4 lg:-ms-4 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-2">
              {siteContent.testimonials.map((testimonial) => (
                <div key={testimonial.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-neutral-50 p-8 text-sm leading-6 dark:bg-neutral-900">
                    <blockquote className="text-neutral-900 dark:text-white">
                      <p>“{testimonial.text}”</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div>
                        <div className="font-semibold text-neutral-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-neutral-600 dark:text-neutral-400">{testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section id="contact" className="relative isolate overflow-hidden bg-neutral-900 py-16 sm:py-24 lg:py-32 dark:bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to work with us?</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-300">
                  Lets discuss your project and how we can help you achieve your goals.
                </p>
                 <div className="mt-6 flex max-w-md gap-x-4">
                     <a
                    href={`mailto:${siteContent.company.email}`}
                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Contact Sales
                  </a>
                 </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                   <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">Quality Assurance</dt>
                  <dd className="mt-2 leading-7 text-neutral-400">Rigorous testing to ensure your product is bug-free.</dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">On-time Delivery</dt>
                  <dd className="mt-2 leading-7 text-neutral-400">We respect deadlines and deliver on our promises.</dd>
                </div>
              </dl>
            </div>
          </div>
      </section>
    </div>
  );
}
