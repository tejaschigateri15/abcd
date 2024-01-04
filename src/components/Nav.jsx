import { useState } from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faXmark ,faUser} from '@fortawesome/free-solid-svg-icons';
// import { Tooltip } from 'react-tooltip'
import './css/module.css'
import Tooltip from '@mui/material/Tooltip';
import image from './batman-svgrepo-com.svg'
import Sidebar from "./Sidebar"
import { useSelector, useDispatch } from 'react-redux';
import {set_user_info} from './state.jsx'

export default function Nav() {
    const [icon, setIcon] = useState(true);
    const [cv,setcv] = useState(null)
    const handleIcon = () => {
        setIcon(!icon);
        console.log('hello');
    };
    const dispatch = useDispatch()
    const username = useSelector(state => state.user_info.username)


    return (
        <div>
            <div className="nav-component">
                <div className="nav-items">
                    <div className="icon">{icon?<button onClick={handleIcon}><FontAwesomeIcon icon={faBars} style={{color:"#7856ff"}}/></button>:<button onClick={handleIcon}><FontAwesomeIcon icon={faXmark} style={{color:"#7856ff"}}/></button>  }{cv}</div>
                    <div className="title"><Link to="/"><p>Mr. Blogs</p></Link><img src={image} className="images"/></div>
                    <div className="log"><div  className="ddd">
                    <Tooltip title={username} arrow>
                    <Link to='/profile' >
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                    </Tooltip>
                    </div>
                     <Link to='/login' className="loginp"><p>Login?</p></Link>
                    </div>
                  
                </div>
                
            </div>
            {!icon?<Sidebar/>:''}
            
        </div>
        
    );
}
