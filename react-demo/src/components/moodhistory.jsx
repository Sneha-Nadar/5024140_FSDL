function MoodHistory({history}){

  return (

    <div className="history">

      <h2>Mood History</h2>

      {history.length === 0 ? (
        <p>No moods recorded yet</p>
      ) : (
        history.map((m,index)=>(
          <p key={index}>{m}</p>
        ))
      )}

    </div>

  )
}

export default MoodHistory