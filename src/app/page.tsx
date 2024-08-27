import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import "~/styles/globals.css";
import Projects from "./components/projects/Projects";

export default function HomePage() {
  return (
    <main className="custom-container bg-gradient-to-b from-primary from-60% to-tertiary to-100% gap-8">
      <Intro />
      <About />
      <Projects />
    </main>
  )
}