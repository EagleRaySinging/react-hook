import { useState } from "react";

function Hooks () {

const [num, setNum] = useState(0)

  return(
    <div>
      <p>現在的數字是{num}</p>
      <button onClick={() => {
        setNum(num + 1);
      }}>加一</button>
      <button onClick={() => {
        if(num > 0) {
          setNum(num - 1);
        }else {
          alert(`no number to discount!`)
        }
      }}>減一</button>
    </div>
  )
}




export default Hooks;