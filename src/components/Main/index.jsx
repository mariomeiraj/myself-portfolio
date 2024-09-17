import Content from '../Content'
import NavigationHome from '../NavigationHome'
import styles from './main.module.css'

export default function Header() {
	return (
		<main className={styles.main}>
			<NavigationHome />
			<Content />
		</main>
	)
}
