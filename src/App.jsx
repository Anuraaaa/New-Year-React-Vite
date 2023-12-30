import Particles from "react-particles"
import {loadHyperspacePreset} from 'tsparticles-preset-hyperspace'
import { Typewriter } from "react-simple-typewriter"
import { useState } from "react"
import Countdown from "react-countdown"
import music1 from './assets/music1.mp3'
import music2 from './assets/music2.mp3'

function App() {
  const [message, setMessage] = useState(["Menuju Tahun Baru 2024", "Bye 2023 👋"])
  const [click, setClick] = useState(true)

  const particleInit = async(engine) => {
    await loadHyperspacePreset(engine)
  }

  const timeLeft = () => {
    const newYear = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const calculateTime = newYear - nowDate
    return calculateTime
  }

  const audio1 = new Audio()
  audio1.src = music1
  audio1.loop = true

  const audio2 = new Audio()
  audio2.src = music2
  audio2.loop = true

  const handleClick = () => {
    if (click) {
      const random = Math.floor(Math.random() * (2 - 1 + 1)) + 1
      if (random == 1) {
        audio1.play()
        setClick(false)
      } else if (random == 2) {       
        audio2.play()
        setClick(false)
      }
    }
  }
  console.log(click)

  return (
    <>    
      <Particles init={particleInit} options={{ preset: "hyperspace" }}/>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter words={message} loop={false} cursor cursorStyle={"✨"}/>
        </span>
        <div className="z-50 text-white">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => {
            setMessage(["Selamat Tahun Baru 2024", "Happy New Year 2024"])
            const button = document.getElementById('button')
            button.classList.remove("hidden")
          }}/>
        </div>
        <button className="bg-white text-black z-50 p-4 rounded-lg animate-bounce mt-8 hidden" onClick={handleClick} id="button">Click Me</button>
      </div>
    </>
    
  )
}

export default App
