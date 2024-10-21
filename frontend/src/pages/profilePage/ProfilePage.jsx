import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import apiRequest from '../../lib/apiRequest';
import './ProfilePage.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () =>{
    const data = useLoaderData()
    const navigate = useNavigate()
    const {currentUser, updateUser} = useContext(AuthContext)
    const handleLogout=async()=>{
        try{
            await apiRequest.post("/auth/logout")
            updateUser(null)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="profilePage">
            <div className="details"> 
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to="/profile/update">
                        <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src={currentUser.avatar || "/avatar.png"} alt=''/></span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>Phone number: <b>{currentUser.phonenumber}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>

                    <div className="title">
                        <h1>My List</h1>
                        <Link to="/profile/newpost">
                        <button>Create new Post</button>
                        </Link>
                    </div>
                    <List post={data.posts.data.userPosts}/>

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List post={data.posts.data.savedPosts}/>
                </div>
            </div>

            <div className="chatContainer">
                <div className="wrapper">
                    <Chat chats={data.chats.data}/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;