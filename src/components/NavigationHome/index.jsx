import styles from './nav.module.css'
import Link from 'next/link'

export default function NavigationHome() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/">about me</Link>
				</li>
				<li>
					<Link href="/projects">projects</Link>
				</li>
				<li>
					<Link href="/contact">get in contact</Link>
				</li>
			</ul>
		</nav>
	)
}
