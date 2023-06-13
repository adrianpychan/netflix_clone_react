import { useRef, useState } from "react";
import ListItems from "../listitems/ListItems";
import "./lists.scss";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';

export default function Lists() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()
    
    // each box is 225 pixel, with 5 pixel space
    // clicking the left button should move 230 pixels to the right, so +230px
    // clicking the right button should move 230 pixels to the left, so -230px
    // the distance between the black gap and the first white box = 50px.
    
    const handleClick = (direction) => {
        setIsMoved(true); //once its clicked, the button is set to moved.
        let distance_from_left_side = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance_from_left_side}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance_from_left_side}px)`
        }
    };

  return (
    <div className="lists">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
                className="sliderArrow left" 
                onClick = {()=>handleClick("left")}
                style = {{display: !isMoved && "none"}}  //if sliderArrow is NOT MOVED, then display: "none"

            />
            <div className="container" ref={(listRef)}>
                <ListItems index = {0}/>
                <ListItems index = {1}/>
                <ListItems index = {2}/>
                <ListItems index = {3}/>
                <ListItems index = {4}/> 
                <ListItems index = {5}/>
                <ListItems index = {6}/>
                <ListItems index = {7}/>
                <ListItems index = {8}/>
                <ListItems index = {9}/>
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick = {()=>handleClick("right")}/>
        </div>
    </div>
  )
}
