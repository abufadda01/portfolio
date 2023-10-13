import React from 'react'
import js from "../../assets/js.png"
import node from "../../assets/n.png"
import reactImg from "../../assets/react.jpg"
import "./courses.css"

import { DATA } from '../../data/courses'


const Courses = () => {
  return (
    <div className='courses'>

        <h2>Courses</h2>
        
        <div className='container'>

            {DATA && DATA.map((data) => {
              return <Course key={data.id} course={data}/>
            })}


            {/* <div className='course'>
                <img src={node} alt="node" />
                <h3>NodeJS Course</h3>
                <p>my first javascript course within 60 hours</p>
                <button>Enroll</button>
            </div>

            <div className='course'>
                <img src={reactImg} alt="react" />
                <h3>ReactJS Course</h3>
                <p>my first javascript course within 60 hours</p>
                <button>Enroll</button>
            </div> */}

        </div>

    </div>
  )
}


const Course = ({course}) => {

  const {id , img , title , desc , link} = course

  return(
    <div key={id} className='course'>
        <img src={img} alt="js" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <button onClick={() => window.location.href = link}>Enroll</button>
    </div>
  )
}



export default Courses