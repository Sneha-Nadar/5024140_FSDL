import { useState } from "react"
import Navbar from "./components/Navbar"
import MoodSelector from "./components/MoodSelector"
import MoodCard from "./components/MoodCard"
import MoodHistory from "./components/MoodHistory"
import Footer from "./components/Footer"

function App(){

  const [mood,setMood] = useState("😊")
  const [history,setHistory] = useState([])

  const updateMood = (newMood)=>{
    setMood(newMood)
    setHistory([...history,newMood])
  }

  return (
    <div className="app">

      <Navbar/>

      <MoodSelector setMood={updateMood}/>

      <MoodCard mood={mood}/>

      <MoodHistory history={history}/>

      <Footer/>

    </div>
  )
}

export default App