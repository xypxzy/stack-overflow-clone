'use client'

import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants/menu'
import { SignedOut } from '@clerk/nextjs'
import { LogIn, UserCog } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LeftSidebar() {
	const pathname = usePathname()

	return (
		<section
			className='background-light900_dark200 light-border sticky 
		left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'
		>
			<div className='flex flex-1 flex-col gap-6'>
				{sidebarLinks.map((item, key) => {
					const isActive =
						(pathname.includes(item.route) && item.route.length > 1) ||
						pathname === item.route

					return (
						<Link
							href={item.route}
							key={key}
							className={`${
								isActive
									? 'primary-gradient rounded-lg text-light-900'
									: 'text-dark300_light900'
							} flex items-center justify-start gap-4 bg-transparent p-4 max-lg:justify-center`}
						>
							<Image
								src={item.imgURL}
								alt={item.label}
								width={20}
								height={20}
								className={isActive ? 'invert-0' : 'invert dark:invert-0'}
							/>
							<p
								className={`${
									isActive ? 'base-bold' : 'base-medium'
								} max-lg:hidden`}
							>
								{item.label}
							</p>
						</Link>
					)
				})}
			</div>
			<SignedOut>
				<div className='flex flex-col gap-3'>
					<Link href={'/sign-in'}>
						<Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
							<LogIn className='h-5 w-5 invert-0 dark:invert lg:hidden' />
							<span className='primary-text-gradient max-lg:hidden'>
								Log in
							</span>
						</Button>
					</Link>
					<Link href={'/sign-up'}>
						<Button className='small-medium btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
							<UserCog className='h-5 w-5 invert-0 dark:invert lg:hidden' />
							<span className='primary-text-gradient max-lg:hidden'>
								Sign up
							</span>{' '}
						</Button>
					</Link>
				</div>
			</SignedOut>
		</section>
	)
}
