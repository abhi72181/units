import { useState } from "react";

function App() {
  

  const [inv,setInv]=useState({
    Score:76,
    Wicket:2,
    Ball:50
  })
    
  const addone=(value)=>{
    setInv({...inv,Score:inv.Score + value})
  }

  const addfour=(value)=>{
    setInv({...inv,Score:inv.Score + value})
  }

  const addsix=(value)=>{
    setInv({...inv,Score:inv.Score + value})
  }
    
  const addwicket=(value)=>{
    setInv({...inv,Wicket:inv.Wicket + value})
  }

  const addball=(value)=>{
    setInv({...inv,Ball:inv.Ball + value})
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
              inv.Score
            }
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
              inv.Wicket
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
               `${Math.floor(inv.Ball/6)}.${inv.Ball%6}`
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>addone(1)}>Add 1</button>
        <button className="addScore4" onClick={()=>addfour(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>addsix(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>addwicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>addball(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status" >{inv.Score>100?"India Won":""}</h1>
    </div>
  );
}

export default App;
