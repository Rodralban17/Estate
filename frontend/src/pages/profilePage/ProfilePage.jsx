import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './ProfilePage.scss';

const ProfilePage = () =>{
    return(
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src='' alt=''/></span>
                        <span>Username: <b>John Doe</b></span>
                        <span>AA</span>
                        <span>pop</span>
                    </div>

                    <div className="title">
                        <h1>My List</h1>
                        <button>Create new Post</button>
                    </div>
                    <List/>

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List/>
                </div>
            </div>

            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;