import React,{useEffect, useState} from 'react'

export default function Counter(props) {
  const [count , setCount] = useState(0)
    let plus =()=> {
        
     setCount(count+1)
    }
    const minus = () => {
      if (count> 0) {
        setCount(count-1)
      }

    }
    useEffect(()=>{
      if(count>=1){
      document.title = `chats (${count})`
      }
      else{
        document.title =  `chats`
      }
    },[count])
  return (
    <>
      
    <h3 style={{color:props.mode==="light"?"black":"white"}}>{props.head}</h3>
    <div className="my-3">
       <h1 style={{color:props.mode==="light"?"black":"white"}}>{count}</h1>
        <button style={{fontSize:'20px', textAlign :"center"}} className="btn-success btn my-5 mx-2 " onClick={plus}>+</button>
        <button style={{fontSize:'20px', textAlign :"center"}} className="btn-success btn my-5 mx-2 " onClick={minus}>-</button>
        </div>
   
    </>

  )
}
