import "./homepage.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import { Form } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <Form />
      <div className="text">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis libero officia iusto corporis modi, incidunt sapiente
            adipisci exercitationem! Blanditiis exercitationem vero nihil
            nostrum incidunt voluptatum quae consequuntur totam quo labore?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <span>Years of Experience</span>
            </div>
            <div className="box">
              <h1>200</h1>
              <span>Award Gained</span>
            </div>
            <div className="box">
              <h1>1500+</h1>
              <span>Property Ready</span>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
