import "./profilePage.scss";
import Card from "../../components/card/Card";
import Chat from "../../components/chat/Chat";

function ProfilePage() {
  

  return (
    <div className="profile">
      <div className="left">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="userInfo">
            <div className="info">
              <span>Avatar</span>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="info">
              <span>Username:</span>
              <h2>John Doe</h2>
            </div>
            <div className="info">
              <span>E-mail:</span>
              <h2>john@email.com</h2>
            </div>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create new Post</button>
          </div>
          <Card />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Card />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
