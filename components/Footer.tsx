import Link from 'next/link';
import { siteContent } from '@/app/data/site-content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {siteContent.company.name}
            </Link>
            <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
              {siteContent.company.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {siteContent.navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Legal</h3>
             <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/policy" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                    Privacy & Terms
                  </Link>
                </li>
             </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Contact</h3>
             <ul className="mt-4 space-y-2">
                <li className="text-sm text-neutral-500 dark:text-neutral-400">
                  <a href={`mailto:${siteContent.company.email}`} className="hover:text-neutral-900 dark:hover:text-white">
                     {siteContent.company.email}
                  </a>
                </li>
                 <li className="text-sm text-neutral-500 dark:text-neutral-400">
                   {siteContent.company.address}
                 </li>
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {currentYear} {siteContent.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
