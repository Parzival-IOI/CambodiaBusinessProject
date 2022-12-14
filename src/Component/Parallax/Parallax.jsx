import { React, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Riff1 from "../../Asset/1Riff.png";
import Riff2 from "../../Asset/2Riff.png";
import Riff3 from "../../Asset/3Riff.png";
import AFish from "../../Asset/AFish.png";
import BFish from "../../Asset/BFish.png";
import Fish from "../../Asset/Fish.png";
import BackRiff from "../../Asset/BackRiff.png";
import Turtle from "../../Asset/Turtle.png";
import PH from "../../Asset/PH.png";
import "./Parallax.css"

import useScroll from "../../Hook/useScroll";

function Parallax() {
    const [position, setPosition] = useState(0);
    const Scroll = useScroll();

    useEffect(() => {
        setPosition(Scroll);
    }, [Scroll]);

    return (
        <div className="Parallax">
            <img src={PH} alt="P." />
            <LazyLoadImage
                className="img"
                src={Riff1}
                alt="P."
                style={{ "--i--n": "8", 'top' : `${(position)*0.15}px`}}
            />
            <LazyLoadImage
                className="img"
                src={Riff2}
                alt="P.."
                style={{ "--i--n": "5" , 'top' : `${position*0.4}px` , 'left' : `-${position*0.08}px`}}
            />
            <LazyLoadImage
                className="img"
                src={Riff3}
                alt="P..."
                style={{ "--i--n": "3" , 'top' : `${position*0.4 }px`}}
            />
            <LazyLoadImage
                className="img"
                src={AFish}
                alt="P...."
                style={{ "--i--n": "6" , 'top' : `${position*0.1 }px`, 'left' : `-${position*0.3}px`}}
            />
            <LazyLoadImage
                className="img"
                src={BFish}
                alt="P....."
                style={{ "--i--n": "7" , 'top' : `${position*0.3 }px`, 'left' : `${position*0.6}px`}}
            />
            <LazyLoadImage
                className="img"
                src={Fish}
                alt="P......"
                style={{ "--i--n": "4" , 'top' : `${position*0.01 }px`, 'left' : `${position*0.08}px`}}
            />
            <LazyLoadImage
                className="img"
                src={BackRiff}
                alt="P......."
                style={{ "--i--n": "1" , top : `${position*0.3}px`}}
            />
            <LazyLoadImage
                className="img"
                src={Turtle}
                alt="P........."
                style={{ "--i--n": "2" , left : `${position*1.5}px`, top : `${position*0.2}px`}}
            />
        </div>
    );
}

export default Parallax;
