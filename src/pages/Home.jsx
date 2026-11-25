import Hero from '../components/Hero'
import { Intro, Story, Spotlight, Training, Competitions, VideoSection, Mission, Support } from '../components/Sections'
import { Marquee } from '../components/Common'
export default function Home() {
  return (<>
    <Hero /><Marquee /><Intro /><Story /><Spotlight /><Marquee dark text="Their dreams have no boundaries" /><Training /><Competitions /><VideoSection />
    <Mission /><Support />
  </>)
}
