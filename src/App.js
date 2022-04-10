import React from "react"
import Hero from "./Hero"
import Projects from "./Projects"
import Contact from "./Contact"
  
export default function App() {

  return (
    <main>
      <header>
        <h1>Welcome to my Portfolio!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </header>
      <Hero />
      {/* <Projects />
      <Contact /> */}

    </main>
  )
}