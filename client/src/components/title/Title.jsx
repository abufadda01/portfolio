import React, { useState , useEffect } from 'react'
import "./title.css"


const Title = () => {

    const [titleIndex , setTitleIndex] = useState(0)
    const [fade , setFade] = useState(true)
    const titles = ["a software engineer" , "mern stack developer" , "real madrid fan" , "mia san mia always"]
    
    
    // as ComponentDidMount()
    useEffect(() => {

        const titleInterval = setInterval(() => {
            // to keep the index with the limit of the array length
            let newTitleIndex = (titleIndex + 1) % titles.length 
            setTitleIndex(newTitleIndex)
            setFade(true)
        } , 5000)


        const titleTimeout = setTimeout(() => {
            setFade(false)
        } , 3000)


        // as componentWillUnMount()
        return () => {
            clearTimeout(titleTimeout)
            clearInterval(titleInterval)
        }

        // each time titleIndex state change useEffect() hook will run
    },[titleIndex])
    
    


    return (
        <p className={fade ? 'title-fade-in' : 'title-fade-out'} style={{marginBottom : "30px"}} key={titleIndex}>I am a {titles[titleIndex]}</p>
    )

}



export default Title