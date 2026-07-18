import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills'
import Timeline from '../components/home/Timeline'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle('Marcus Ellested · Platform Engineer')

  return (
    <>
      <Hero />
      <Skills />
      <Timeline />
    </>
  )
}
