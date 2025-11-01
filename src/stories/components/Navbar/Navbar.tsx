import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

interface OptionData {
  name: string;
  route: string;
}

type props = {
  /**Here we are having two variants */
  variant?: "Light" | "Dark";
  options?: OptionData[];
  image?: string;
  headerTitle?: string;
};

const defaultOptions: OptionData[] = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Login",
    route: "/login",
  },
  {
    name: "SignUp",
    route: "/signup",
  },
];

const Navbar = ({
  variant = "Dark",
  options = defaultOptions,
  image = "https://cdn.pixabay.com/photo/2022/09/04/19/19/trolley-7432508_960_720.png",
  headerTitle = "My Website",
}: props) => {
  const navigate = useNavigate();
  return (
    <div className={`main-nav-container ${variant}`}>
      <div className="logo">
        <div>
          <img src={image} alt="logo" className="image" />
        </div>
        <div>{headerTitle}</div>
      </div>
      <div className="content">
        {options.map((value: OptionData, index: number) => {
          return (
            <div
              onClick={() => {
                console.log("button clicked");
                navigate(value?.route);
              }}
              key={index}
            >
              {value?.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
