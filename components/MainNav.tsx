import * as React from 'react';

import Link from 'next/link';

import Icons from './Icons';
import { Dropdown } from '@antd';
import { useTranslations } from 'next-intl';

export interface NavItem {
	title: React.ReactNode;
	href: string;
}

export function MainNav() {
  const t = useTranslations();

  const NavItems: NavItem[] = [
		{
			title: t('nav.home'),
			href: '/',
		},
	];
  
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="hidden items-center space-x-2 md:flex">
				<Icons.logo className="h-6 w-6" />
				<span className="hidden font-bold sm:inline-block">
					{t('site.title')}
				</span>
			</Link>
			{NavItems?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className="flex items-center font-sans font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100"
            >
              {item.title}
            </Link>
          ),
      )}
      <Dropdown
        menu={{
          items: NavItems?.map(item => ({
            key: item.href,
            label: (<Link href={item.href}>{item.title}</Link>)
          }))
        }}
      >
        <div className='btn md:hidden'>
          <Icons.logo className="mr-2 h-4 w-4" />{" "}
          <span className="font-bold">Menu</span>
        </div>
      </Dropdown>
		</div>
	);
}
