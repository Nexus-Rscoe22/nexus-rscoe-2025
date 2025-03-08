import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Roadmap from "@/components/roadmap"
import HowItWorks from "@/components/how-it-works"
import Events from "@/components/events"
import Gallery from "@/components/gallery"
import JoinUs from "@/components/join-us"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#1C2526]">
        <Header />
        <main>
          <Hero />
          <About />
          <Roadmap />
          <HowItWorks />
          <Events />
          <Gallery />
          <JoinUs />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

