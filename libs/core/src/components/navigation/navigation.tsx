import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useNavigation } from '../../hooks';

export interface NavigationProps {
  className?: string;
}

export function Navigation(props: NavigationProps): JSX.Element {
  const { className } = props;

  const { versionedDocsNavigation } = useNavigation();
  const router = useRouter();

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul className="space-y-9 overflow-x-hidden">
        {versionedDocsNavigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      router.pathname.includes(link.href.slice(1))
                        ? 'before:bg-devfile text-devfile font-semibold'
                        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;