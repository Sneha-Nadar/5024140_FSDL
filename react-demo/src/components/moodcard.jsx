function MoodCard({mood}){

  return (

    <div className="mood-card">

      <h2>Your Mood Today</h2>

      <p className="big-mood">{mood}</p>

    </div>

  )
}

export default MoodCard