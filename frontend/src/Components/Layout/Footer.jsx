import React, { useContext } from 'react'
import {Context} from '../../main'
import { Link } from 'react-router-dom'
import {FaFacebookF,FaYoutube,FaLinkedin} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {

  const {isAuthorized}=useContext(Context);
  
  return (
    <footer className={"footerShow"}>
      <div>&copy; All Rights Reserver By AMIPKR7</div>
      <div>
       
        <Link to={'/'} target="_blank"><FaFacebookF/></Link>
        <Link to={'/'} target="_blank"><FaLinkedin/></Link>
        <Link to={'/'} target="_blank"><RiInstagramFill/></Link>
      </div>
    </footer>
  )
}

export default Footer
