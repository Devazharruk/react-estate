import "./card.scss";
import { listData } from "../../lib/dummyData";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      {listData.map((data) => (
        <div className="card" key={data.id}>
          <Link to={`/${data.id}`} className="imgContainer">
            <img src={data.img} alt="" />
          </Link>
          <div className="textContainer">
            <Link to={`/${data.id}`} className="title" >{data.title}</Link>
            <div className="location">
              <img src="/pin.png" alt="" />
              <span>{data.address}</span>
            </div>
            <h2 className="price">${data.price}</h2>

            <div className="bottomInfo">
              <div className="leftInfo">
                <button className="bedroom">
                  <img src="/bed.png" alt="" />
                  <span>{data.bedroom} bedroom</span>
                </button>
                <button className="bathroom">
                  <img src="/bath.png" alt="" />
                  <span>{data.bathroom} bathroom</span>
                </button>
              </div>
              <div className="rightInfo">
                <button>
                  <img src="/save.png" alt="" />
                </button>
                <button>
                  <img src="/chat.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
