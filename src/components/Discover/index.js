import './index.css'
import Card from "../Card"
import { PiSparkleFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5"


const data = [
    {
        "name":'Ella - Dating coach',
        'url':'https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0',
        'id':'ghpkfh',
        'msg':'Hi! i am a dating coach',
        'msgNo':'13.1m',
    },
    {
        "name":'Zoro',
        'url':'https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0',
        'id':'faggzoro',
        'msg':'Righy-hand man of the Pirate king.',
        'msgNo':'40m',
    },
    {
        "name":'Novel Write AI',
        'url':'https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0',
        'id':'Yaash',
        'msg':'I am Novel writing AI. I will support your ideas.',
        'msgNo':'23.5m',
    },
    {
        "name":'Gamer Boy',
        'url':'https://character.ai/_next/image?url=%2Fhomeassets%2Fzeus.webp&w=128&q=25',
        'id':'gameer',
        'msg':'I can talk"forever"about games with you.',
        'msgNo':'6.8m',
    },
    {
        "name":'Expert Musician',
        'url':'https://characterai.io/i/80/static/avatars/ButterflyEffect.png?webp=true&anim=0',
        'id':'sap_',
        'msg':'Music Theory geak and genius',
        'msgNo':'6.7m',
    },
    {
        "name":'Creative Helper',
        'url':'https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/D1Dar3krrm79DrKNlUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0',
        'id':'Zuzier',
        'msg':'I help with creative writing!',
        'msgNo':'39.8m',
    },
]





const Discover=()=>{
    return(
        <div className="discover">
            <div className='search-container'>
                <IoSearch  size={20} className='serach-icon'/>
                <input placeholder='Search for Characters' className='input-container' type='search'></input>
            </div>
            <div className='discover-top-container'>
            </div>
            <div className='message-container'>
                <div className='message-con-text' >
                    <p>What to you want todo?</p>
                    <h1>Go an on adventure!</h1>
                </div>
                <div className='message-con' >
                    <div className='message-profile'>
                        <img className='profile' src='https://characterai.io/i/80/static/avatars/uploaded/2024/2/21/7Oa7WcFcz9Gp1oenHZ-IfcwNFbajpj6yeH74jUQAVv0.webp?webp=true&anim=0' alt='profile'/>
                        <p className='message-name'>Escape Room</p>
                    </div>
                    <p className='text'>Welcome to your next challenge. Can you escape in time?</p>
                    <p className='reply'>Reply...</p>
                </div>
                <div className='message-con' >
                <div className='message-profile'>
                        <img className='profile' src='https://characterai.io/i/80/static/avatars/uploaded/2024/2/17/U_XA0s10BiAyh4EB0qXcxW5ysVLk8WwW-Mu005m_NmM.webp?webp=true&anim=0' alt='profile'/>
                        <p className='message-name'>Trip Planner</p>
                    </div>
                    <p className='text'>I'm Trevor the Trip Planner, ready to orachestrate your dream journey. What destination is calling you today?</p>
                    <p className='reply'>Reply...</p>
                </div>
            </div>
            <h1 className='sub-head'>For you</h1>
            <div className='for-you-con'>
                <ul className='card-list'>
                    {data.map(each => (<Card cardData={each} key={each.id}/>))}
                </ul>
            </div>

            <h1 className='sub-head'>Featured</h1>
            <div className='for-you-con'>
                <ul className='card-list'>
                    {data.reverse().map(each => (<Card cardData={each} key={each.id}/>))}
                </ul>
            </div>
            <div className='btn-con'>
                <button className='btn act'>Helper</button>
                <button className='btn'>Anime Charecters</button>
                <button className='btn'>Games</button>
                <button className='btn'>Anime</button>
                <button className='btn'>Game Characters</button>
                <button className='btn'>Comedy</button>
                <button className='btn'>Image Generating</button>
                <button className='btn'>Language Learing</button>
                <button className='btn'>History</button>
                <button className='btn'>Religion</button>
                <button className='btn'>Animals</button>
                <button className='btn'>Philosophy</button>
            </div>
            <div className='for-you-con'>
                <ul className='card-list'>
                    {data.map(each => (<Card cardData={each} key={each.id}/>))}
                </ul>
            </div>
            <div className='footer'>
                <h1>Create a Charecter</h1>
                <p>Not vibing with any characters? Create one of your own! Customize things like their voice, conversation starts, their tone, and more!</p>
                <div><button ><PiSparkleFill /> Create a Character</button></div>
            </div>
            
        </div>
    )
}
export default Discover;