import ReactDOM from "react-dom/client"
import { useState } from "react"

import "./style.css"


const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter()
{
    var [count,setCount]=useState(0)

function increment()
{
 setCount(count+1)
}
function decrement()
{
    setCount(count-1)
}

  return(
    <section className="container">
    <div className="random-number" style={{width:'200px', height:'200px', backgroundColor:'skyblue', alignItems:'center',
        textAlign:'center', justifyContent:'center', border:'2px solid black', placeItems:'center'}}>
            <h1>Count</h1>
      <h1>{count}</h1>
      <button className="generate-button" onClick={increment}>INC</button>
      <button className="generate-button" onClick={decrement}>DEC</button>
    </div>
    </section>
  )
}


root.render(
<>
<Counter/>


</>)
