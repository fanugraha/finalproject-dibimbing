import "./homepage.css";
import Seacrch from "../../assets/icon/search.svg";
import ButtonPrimarry from "../../component/button/Primarry";
import ButtonSecondary from "../../component/button/Secondary";
import SideBar from "../../component/side-bar/SideBar";
import TextLink from "../../component/button/TextLink";
import UserList from "../../component/user-list/UserList";
import PromoCard from "../../component/card/promo-card/PromoCard";

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
                  <ButtonPrimarry>Add</ButtonPrimarry>
                  <ButtonSecondary>See All</ButtonSecondary>
                </div>
              </div>
            </div>
            <div className="user-list">
              <div className="lable-user">
                <h1>User List</h1>
                <TextLink>See All</TextLink>
              </div>
              <div className="wrapper-userlist-card">
                <UserList />
                <UserList />
                <UserList />
              </div>
            </div>
          </div>
          <div className="layer-two">
            <div className="label">
              <h1>Active Offer</h1>
            </div>
            <div className="wrapper-card">
              <PromoCard />
              <PromoCard />
              <PromoCard />
              <PromoCard />
              <PromoCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
