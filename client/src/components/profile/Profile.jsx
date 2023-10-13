import React, { useState } from 'react'
import "./profile.css"
import profilePic from "../../assets/profile.jpg"


// this.fun.bind(this) in class component in the constructor to tell react i want this fun to have an access of every thing inside the class

const Profile = () => {

  const [displayBio , setDisplayBio] = useState(false)

  const toogle = () => {
    setDisplayBio((prev) => !prev)
  }


  return (
    <div className='profile'>

        <img className='profilePic' src={profilePic} alt="profile pic" />
        <h1>Hello</h1>
        <p>I'm Laith Abu Fadda</p>

        <div>
          {/* double and operator */}
          {displayBio && <>
            <p className='p'>Im a full stack web developer</p>
            <p className='p'>mern stack specially</p>
            </>
          }

          {/* ternary operator */}
          {/* {displayBio ? (
            <>
            <p className='p'>Im a full stack web developer</p>
            <p className='p'>mern stack specially</p>
            </>
          ) : (
            <></>
          )} */}

          <button onClick={toogle} className='btn'>{displayBio ? "Hide" : "Show More"}</button>

        </div>

    </div>
  )
}



export default Profile