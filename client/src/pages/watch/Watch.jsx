import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video 
            className="video" 
            autoPlay 
            progress 
            controls 
            src="https://joy1.videvo.net/videvo_files/video/free/2012-10/large_watermarked/hd1967_preview.mp4"
        />
    </div>
  )
}
