import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../Search/Search'
import MobileNav from './MobileNav'
import ThemeSwitcher from './ThemeSwitcher'
import logo from '/assets/images/icon.svg'

export default function Navbar() {
	return (
		<nav
			className='background-light900_dark200 flex-between fixed z-50 flex w-full
			gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'
		>
			<Link href={'/'} className='flex items-center gap-1'>
				<Image src={logo} width={23} height={23} alt='CodeQueryHub' />
				<p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
					Code Query <span className='text-primary-500'>Hub</span>
				</p>
			</Link>
			<Search />
			<div className='flex-between gap-5'>
				<ThemeSwitcher />
				<SignedIn>
					<UserButton
						afterSignOutUrl='/'
						appearance={{
							elements: {
								avatarBox: 'h-10 w-10',
							},
							variables: {
								colorPrimary: '#ff7000',
							},
						}}
					/>
				</SignedIn>
				<MobileNav />
			</div>
		</nav>
	)
}
