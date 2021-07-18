import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faBold, faCode, faItalic} from '@fortawesome/free-solid-svg-icons'
import '../css/style.css'

const Style = () => {
    const [active,setActive] =useState('options');
    let icon;
    if(active==='options'){
        icon=faArrowDown
    }
    else{
        icon=faArrowRight
    }
    return (
        <div className='style'>
            <FontAwesomeIcon icon={icon} id='toogleStyle' onClick={()=>{if(active==='options')setActive('optionsActive'); else setActive('options')}}/>
            <FontAwesomeIcon icon={faBold} className={`${active}`}/>
            <FontAwesomeIcon icon={faItalic} className={`${active}`}/>
            <FontAwesomeIcon icon={faItalic} className={`${active}`}/>
            <FontAwesomeIcon icon={faCode} className={`${active}`}/>
        </div>
    )
}

export default Style
