import Link from "next/link"
import styles from "./intro.module.css"

export default function Intro() {
  return (
    <section className="relative h-dvh grid justify-center items-end text-white">
      <h1 className={`text-4xl md:text-6xl max-w-2xl tracking-wide leading-snug md:text-center md:leading-tight`}>
        Hi, I&apos;m <span className="text-secondary">Sam Edwards</span>. I am a <span className="text-secondary">Full Stack</span> Web Developer.
      </h1>
      <Link href="#about" className={`${styles.arrow} mb-6 mx-auto p-4 lg:mb-16`}>
        <svg width="16" height="70" viewBox="0 0 16 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.29289 111.685C7.68342 112.075 8.31658 112.075 8.70711 111.685L15.0711 105.321C15.4616 104.93 15.4616 104.297 15.0711 103.906C14.6805 103.516 14.0474 103.516 13.6569 103.906L8 109.563L2.34315 103.906C1.95262 103.516 1.31946 103.516 0.928932 103.906C0.538408 104.297 0.538408 104.93 0.928932 105.321L7.29289 111.685ZM7 0.977417L7 110.977H9L9 0.977417L7 0.977417Z" fill="white"/>
        </svg>
      </Link>
    </section>
  )
}
