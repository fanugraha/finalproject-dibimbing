import { Button } from "@mantine/core";
import "../../home/homepage.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="profile">
        <img src="src\assets\img\sample-img.png" alt="" />
        <div className="label-profile">
          <h1 className="name">Kevin Cranel</h1>
          <p className="email-profile">@email</p>
        </div>
      </div>
      <div className="navigation-sidebar">
        <div className="nav-group">
          <div className="label">General</div>
          <Button className="button-sidebar">Dashboard</Button>
        </div>
        <div className="nav-group">
          <div className="label">Marketplace</div>
          <Button className="button-sidebar">Market</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
