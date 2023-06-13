import "./navbar.scss"
import { Search } from '@material-ui/icons';
import { Notifications } from '@material-ui/icons';
import { ArrowDropDown } from '@material-ui/icons';
import { useState } from "react";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true) //if windowpage Yoffset = 0, then IsScroll = false, else IsScroll = True
        return () => (window.onscroll = null)
    };

    console.log(isScrolled)

  return (
    <div className = {isScrolled? "navbar scrolled" : "navbar"}>
        <div className = "container">
            <div className='left'>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                alt="" 
                />
                <span>Home</span>
                <span>Series</span>
                <span>Films</span>
                <span>New & Popular</span>
                <span>My List</span>
                <span>Browse by Languages</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>Children</span>
                <Notifications className="icon" />
                <img 
                src="https://d34gglw95p9zsk.cloudfront.net/item_cocreco_images/images/000/117/102/large/593847f4-8b79-4816-9594-a7ff726fd4af.jpg" 
                alt="" 
                />
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar