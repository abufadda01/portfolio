import React from 'react'
import "./social.css"
import { socials } from '../../data/socials'



const Social = () => {
  return (
    <div style={{textAlign : "center"}}>
        
        <h2>Socials</h2>

        {socials && socials.map((social) => {
            return <SingleScoial key={social.id} social={social} />
        })}

    </div>
  )
}



const SingleScoial = ({social}) => {

    const {id , icon , link} = social

    return(
            <a key={id} href={link}>
                <img src={icon} alt="icon"  style={{width : 30 , height : 35 , borderRadius : "50%" , margin : 5 , fontSize : "15px" , objectFit : "contain"}}/>
            </a>
    )
}



export default Social