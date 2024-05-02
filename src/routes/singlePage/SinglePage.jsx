import "./singlePage.scss";
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummyData";

function SinglePage() {
  const data = listData;
  return (
    <div className="singlePage">
      <div className="left">
        <div className="wrapper">
          <div className="top">
            <Slider images={singlePostData.images} />
          </div>
          <div className="bottom">
            <div className="info">
              <div className="details">
                <h1 className="title">{singlePostData.title}</h1>
                <div className="location">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <span className="price">$ {singlePostData.price}</span>
              </div>
              <div className="userProfile">
                <img src={userData.img} alt="" />
                <h2>{userData.name}</h2>
              </div>
            </div>
            <p className="description">{singlePostData.description}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="title">General</h2>
          <div className="generals">
            <div className="item">
              <img src="utility.png" alt="" />

              <div className="details">
                <h3>Utilities</h3>
                <span>Renter is responsible</span>
              </div>
            </div>
            <div className="item">
              <img src="pet.png" alt="" />

              <div className="details">
                <h3>Pet Policy</h3>
                <span>Pets Allowed</span>
              </div>
            </div>
            <div className="item">
              <img src="fee.png" alt="" />

              <div className="details">
                <h3>Property Fees</h3>
                <span>Must have 3x the rent in total household income</span>
              </div>
            </div>
          </div>
          <h2 className="title">Sizes</h2>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>80 2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>80 1 bathroom</span>
            </div>
          </div>
          <h2 className="title">Nearby Places</h2>
          <div className="places">
            <div className="item">
              <img src="utility.png" alt="" />

              <div className="details">
                <h3>School</h3>
                <span>250m away</span>
              </div>
            </div>
            <div className="item">
              <img src="pet.png" alt="" />

              <div className="details">
                <h3>Bus Stop</h3>
                <span>100m away</span>
              </div>
            </div>
            <div className="item">
              <img src="fee.png" alt="" />

              <div className="details">
                <h3>Restaurant</h3>
                <span>200m away</span>
              </div>
            </div>
          </div>
          <h2 className="title">Location</h2>

          <div className="mapConatiner">
            <Map items={data} />
          </div>

          <div className="actionBtns">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
