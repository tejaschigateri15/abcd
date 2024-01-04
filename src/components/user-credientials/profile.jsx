import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../css/profile.css'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import axios from "axios";
import { Tooltip } from "@mui/material";

export default function ProfileDashboard() {
  const user_info = useSelector(state => state.user_info);
  const { username, id } = user_info;
  const [fetchedName, setFetchedName] = useState('');

  useEffect(() => {
    const getUserName = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/', {
          params: { user_name: username }
        });
        
        console.log("hello12345 : ", response.data);

        if (response.data) {
          setFetchedName(response.data.username);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserName();
  }, [username]);

  return (
    <div>
      <div className="pagelinks"></div>
      <div className="rightoption">
        <div className="profilesettings">
          <div className="profilesettingname"><h2>Profile Settings</h2></div>
          <div className="profilelinks">
              <Link to="/edit-profile"><p>EDIT PROFILE <FontAwesomeIcon icon={faEdit}/></p></Link>
              <Link to='/'><p>LOGOUT <FontAwesomeIcon icon={faSignOut} /></p></Link>
          </div>
        </div>
      </div>
      <div className="profilecard shadow-md">
        <div className="profileitems">
          <div className="profilepic"><img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/1125_compress.png" alt="" width="150px" /></div>
          <div className="profileinfo">
            <div className="profilename">
              <div className="profile-name"><h2>{username || "KL Rahul"}</h2><span>{id}</span></div>
              <div className="edit-icon"><Tooltip title="Write Blogs" arrow><Link to="/writeblog"><FontAwesomeIcon icon={faEdit} /></Link></Tooltip></div>
            </div>
            <div className="profilebio"> <p>🏏 | Indian Cricketer | Stylish Batsman | Born on April 18, 1992 | Living the dream on and off the field | Captaincy vibes | Karnataka Boy 🌟 | #LifeInJerseys #KLRAHUL 💙✨</p> </div>
            <div className="blogscount"> <p>5 Blogs {fetchedName || "hello"} </p> </div>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="blog-options">
        <Link to="/blogs"><Button variant="text">Blogs</Button></Link>
        <Link to="/comments"><Button variant="text">Comments</Button></Link>
        <Link to="/saved"><Button variant="text">Saved</Button></Link>
      </div>
    </div>
  );
}
