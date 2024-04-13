import './index.css'
import { FiPlus } from "react-icons/fi";
import { FaCompass } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Discover from '../Discover';
import {Link, Outlet} from 'react-router-dom'
const SideMenu=()=>{
    const closeBtn=()=>{
        document.querySelector('.side-menu').style.display='none';
        document.querySelector('.side-menu-close').style.display='block';
        document.querySelector('.discover').style.margin='0px 0px 0px 0px';
    
    }
    const openMenu=()=>{
        document.querySelector('.side-menu-close').style.display='none';
        document.querySelector('.side-menu').style.display='flex';
        document.querySelector('.discover').style.margin='0px 0px 0px 250px';
    }
    return(
        <>
        <div className="side-menu">
            <div className='close' onClick={closeBtn}>
                <h1 className='side-menu-heading'>charecter.ai</h1>
                <FaAnglesLeft size={20} className='close-icon' color='#ececee'/>
            </div>
            <Link to={'/create'}>
                <button type='button' className='create-btn'><FiPlus size={20} className='plus'/>Create</button>
            </Link>
            <Link to={'/'}>
                <button type='button' className='discover-btn'><FaCompass size={20} className='compass'/>Discover</button>
            </Link>
            <p className='side-menu-sub'>chats</p>
        </div>
        <div className='side-menu-close'><HiOutlineMenuAlt2 onClick={openMenu} size={25} /></div>
        <Outlet/>
        </>

    )
}

export default SideMenu;