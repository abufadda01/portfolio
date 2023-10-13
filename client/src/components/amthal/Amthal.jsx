// bind() means that this function don't have an access to the properties inside this class

import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./amthal.css"


const Amthal = () => {

  const [titleMathal , setTitleMathal] = useState({})
  const [tenAmthal , setTenAmthal] = useState([])
  const [opeTenAmthal , setOpenTenAmthal] = useState(false)



  useEffect(() => {

    const getMathal = async () => {
      try {
        const response = await axios.get("http://localhost:5000/amthal/random")
        setTitleMathal(response.data)
      } catch (error) {
        console.log(error)
      }
    }


    const getTenAmthal = async () => {
      try {
        const response = await axios.get("http://localhost:5000/amthal/randomTen")
        setTenAmthal(response.data)
      } catch (error) {
        console.log(error)
      }
    }


    getMathal()
    getTenAmthal()

  } , [])



  return (
    <div className='amthal'>

      <div className='amthalContainer'>

        <h2 className='title'>مثل اليوم</h2>
        <h3 className='title'>{titleMathal.title}</h3>

        <hr />

        <button onClick={() => setOpenTenAmthal((prev) => !prev)} className='mathalBtn'>هل تريد المزيد من الامثال ؟</button>
        
        {opeTenAmthal && <div className='tenAmthal' style={{display : "flex" , alignItems : "center" , flexDirection : "column" , marginTop : "10px"}}>
          {tenAmthal && tenAmthal.map((mathal) => {
            return <span className='span' style={{margin : "20px 10px"}} key={mathal.id}>{mathal.title}</span>
          })}
        </div>}
      
      </div>

    </div>
  )
}

export default Amthal