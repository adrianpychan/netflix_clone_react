import { useState } from 'react';
import './listitems.scss'
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from '@material-ui/icons';


export default function ListItems({index}) {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div 
      className='listitem' 
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://d34gglw95p9zsk.cloudfront.net/item_cocreco_images/images/000/117/102/large/593847f4-8b79-4816-9594-a7ff726fd4af.jpg" alt="" />
      <div className='itemInfo'>

      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon'/>
              <Add className='icon'/>
              <ThumbUpAltOutlined className='icon'/>
              <ThumbDownAltOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 15 minutes</span>
              <span className='limit'>13+</span>
              <span className='year'>1997+</span>
            </div>
            <div className="desc">
              A new Ultraman named Dyna arrives and bonds with defense organization GUTS' newest recruit, Shin Asuka, to protect a colony on Mars.
            </div>
            <div className="genre">
              Action and Adventure
            </div>
          </div>
        </>
      )}
      </div>
    </div>
    )
}