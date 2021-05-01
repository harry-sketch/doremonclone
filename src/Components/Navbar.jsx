import React,{useState} from "react";
import "../Components/Navbar.css";
import logo from "../img/logo.png";
import FeaturedVideoRoundedIcon from '@material-ui/icons/FeaturedVideoRounded';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PaletteIcon from '@material-ui/icons/Palette';
import PublicIcon from '@material-ui/icons/Public';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import HorizontalSplitRoundedIcon from '@material-ui/icons/HorizontalSplitRounded';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';


const Navbar = () => {
  const [inMobile, setInMobile] = useState(false);
  return (
    <>
      <nav id="navbar">
      <div id="logo">
        <img src={logo} alt="logo"/>
      </div>
        <ul className={inMobile ? "nav_links_mobile" : "nav_links"} 
        onClick={()=>{setInMobile(false)}}
        >
          <li className="nav_items" >
          <div className="icon">
          <FeaturedVideoRoundedIcon className="list_icon_1"/></div>
            <a href="">Videos</a>
          </li>
          <li className="nav_items">
            <div className="icon"> <VideogameAssetIcon className="list_icon_2"/></div>
            <a href="">Games</a>
          </li>
          <li className="nav_items">
          <div className="icon"> <EmojiEventsIcon className="list_icon_3"/></div>
            <a href="">Events</a>
          </li>
          <li className="nav_items">
         <div className="icon"> <PaletteIcon className="list_icon_4"/></div>
            <a href="">Paints</a>
          </li>
          <li className="nav_items">
         <div className="icon"> <PublicIcon className="list_icon_5"/></div>
            <a href="">Dore-world</a>
          </li>
          <li className="nav_items">
         <div className="icon"> <LocalMallIcon className="list_icon_6"/></div>
            <a href="">Store</a>
          </li>
        </ul>
        <div className={inMobile ? "social_icon_mobile" :"social_icon"}
        onClick={()=>{setInMobile(false)}}
        >
          <YouTubeIcon className="nav_icons"/>
          <FacebookIcon className="nav_icons"/>
          <TwitterIcon className="nav_icons"/>
          <InstagramIcon className="nav_icons"/>
        </div>
        <div className="hamburger" onClick={()=>{setInMobile(!inMobile)}} >
          {inMobile ? (<CloseSharpIcon/>):(<HorizontalSplitRoundedIcon/>)}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
