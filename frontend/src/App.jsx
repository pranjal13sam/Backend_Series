import { useEffect, useState } from 'react'
import axios from 'axios'


import './App.css'

function App() {
  const [jokes,setJokes]=useState([])


  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      console.log("response: ",response)
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <>
     <h1>Chai aur full stack</h1>
     <p>JOKES COMING FROM BACKEND:{jokes.length}</p>

     {
     jokes.map((joke, index) => (
      <div key={index}> {/* Using index as the key here */}
        <h3>{index +1}. {joke.title}</h3> {/* Display the index */}
        <h5>{joke.content}</h5>
      </div>
    ))
        
      
     }
    </>
  )
}

export default App
