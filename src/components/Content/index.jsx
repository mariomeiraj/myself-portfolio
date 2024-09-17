'use client'
import AboutContent from './aboutContent'
import { usePathname } from 'next/navigation'
import Contact from './contactContent'
import Projects from './projectsContent'
export default function Content() {
	console.log(usePathname())

	if (usePathname() === '/') {
		return <AboutContent />
	} else if (usePathname() === '/contact') {
		return <Contact />
	} else if (usePathname() === '/projects') {
		return <Projects />
	}
}
