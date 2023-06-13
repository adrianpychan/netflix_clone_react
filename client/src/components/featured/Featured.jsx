import "./featured.scss";
import { PlayArrow } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';

export default function Featured({type}) {
    //if they see a type (series, movies, they will see the following....)
    // If type parameter = movie, then Movies will be displayed, otherwise it will show Series.
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img 
            src="https://d34gglw95p9zsk.cloudfront.net/item_cocreco_images/images/000/117/102/large/593847f4-8b79-4816-9594-a7ff726fd4af.jpg" 
            alt="" 
        />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ultraman_dyna_logo.svg/2560px-Ultraman_dyna_logo.svg.png" alt="" />
            <span className="desc">
                As humanity begins migrating beyond Earth, a new Ultraman named Dyna arrives and bonds with defense organization GUTS' newest recruit, Shin Asuka, to protect a colony on Mars.
            </span>
            <span className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>More</span>
                </button>
            </span>
        </div>
    </div>
  )
}
