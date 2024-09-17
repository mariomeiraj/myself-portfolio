import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<p>Mario Meira</p>
				<span>web developer and design enthusiast.</span>
			</div>
		</header>
	)
}
