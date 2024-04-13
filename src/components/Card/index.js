import './index.css'
import { TbMessageCircle2 } from "react-icons/tb";

const Card = props =>{
    const {cardData} = props
    const{id, name, url, msg, msgNo} = cardData

    return(
        <li >
            <div className='card-con'>
                <div>
                    <img src={url} className='card-profile' alt='profile'/>
                </div>
                <div className='card-detail'>
                    <h1 className='card-name'>{name}</h1>
                    <p className='card-id'>By@{id}</p>
                    <p className='card-msg'>{msg}</p>
                    <p className='card-msg-no'><TbMessageCircle2 />{msgNo}</p>
                </div>
            </div>
        </li>
    )

}

export default Card;