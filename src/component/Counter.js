import React,{useState} from 'react'

export default function Counter(props) {
    let plus =()=> {
        
     setCount(count+1)
    }
    const minus = () => {
      if (count> 0) {
        
        setCount(count-1)
      }

    }
    const change=(event) => {
        setCount(event.target.value)
        console.log("changw")
    }
    const [count , setCount] = useState(5)
  return (
    <>
      
    <h3 style={{color:props.mode==="light"?"black":"white"}}>{props.head}</h3>
    <div className="my-3">
      <textarea style={{fontSize:'70px', textAlign :"center" }} type="number" value={count} onChange={change} rows="1"/><br />
        <button style={{fontSize:'20px', textAlign :"center"}} className="btn-success btn my-5 mx-2 " onClick={plus}>+</button>
        <button style={{fontSize:'20px', textAlign :"center"}} className="btn-success btn my-5 mx-2 " onClick={minus}>-</button>
        </div>
   
    </>

  )
}
