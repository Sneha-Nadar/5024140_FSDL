import React from "react";

function MoodHistory({ history }) {

  return (

    <div className="history">

      <h2>Mood History</h2>

      {history.length === 0 ? (
        <p>No moods recorded yet</p>
      ) : (
        history.map((item,index)=>(
<p key={index}>
{item.date} : {item.mood}
</p>
))
      )}

    </div>

  );
}

export default MoodHistory;