import "./homepage.css";
import Seacrch from "../assets/icon/search.svg";
import SideBar from "../component/side-bar/SideBar";
import ButtonPrimarry from "../component/button/Primarry";
import ButtonSecondary from "../component/button/Secondary";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="right-content">
        <SideBar />
      </div>
      <div className="left-content">
        <div className="search-field">
          <form className="search-input" action="submit">
            <img src={Seacrch} alt="" />
            <p>Search items, collections, and users</p>
          </form>
        </div>
        <div className="main-content">
          <div className="layer-one">
            <div className="banner">
              <img src="" alt="" />
              <div className="banner-text">
                <h1>Create banner to reach more customers</h1>
                <p>Create a banner for reaching a broader audience</p>
                <div className="wrapper-banner-button">
                  <ButtonPrimarry text="Add" />
                  <ButtonSecondary text="See All" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
