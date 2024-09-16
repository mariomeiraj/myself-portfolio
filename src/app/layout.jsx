import './globals.css'

export const metadata = {
	title: 'MySelf | MarioMeira'
}

export default function RootLayout({ children }) {
	return (
		<html lang="ptBR">
			<body>{children}</body>
		</html>
	)
}
