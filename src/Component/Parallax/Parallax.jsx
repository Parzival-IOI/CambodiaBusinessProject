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
import Mobile from '../../Asset/MobileParallax.png';
import "./Parallax.css"

import useScroll from "../../Hook/useScroll";

function Parallax() {
    const [position, setPosition] = useState(0);
    const Scroll = useScroll();

    useEffect(() => {
        setPosition(Scroll);
    }, [Scroll]);

    return (
        <div className="Parallax" style={{height : `calc(120vh - (${position*0.35}px))`}}>
            <img src={PH} alt="P." className="Hide"/>
            <LazyLoadImage
                className="img"
                src={Riff1}
                alt="P."
                style={{ "--i--n": "8", "bottom" : "0"}}
            />
            <LazyLoadImage
                className="img  Hide"
                src={Riff2}
                alt="P.."
                style={{ "--i--n": "5" , 'top' : `${position*0.6}px`}}
            />
            <LazyLoadImage
                className="img Hide"
                src={Riff3}
                alt="P..."
                style={{ "--i--n": "3" , 'top' : `${position*0.9}px`}}
            />
            <LazyLoadImage
                className="img  Hide"
                src={AFish}
                alt="P...."
                style={{ "--i--n": "6" , 'top' : `${position*0.4 }px`, 'left' : `-${position*0.3}px`}}
            />
            <LazyLoadImage
                className="img  Hide"
                src={BFish}
                alt="P....."
                style={{ "--i--n": "7" , 'top' : `${position*0.5 }px`, 'left' : `${position*0.6}px`}}
            />
            <LazyLoadImage
                className="img  Hide"
                src={Fish}
                alt="P......"
                style={{ "--i--n": "4" , 'top' : `${position*0.8 }px`, 'left' : `${position*0.06}px`}}
            />
            <LazyLoadImage
                className="img  Hide"
                src={BackRiff}
                alt="P......."
                style={{ "--i--n": "1" , 'top' : `${position*0.8}px`}}
            />
            <LazyLoadImage
                className="img  Hide"
                src={Turtle}
                alt="P........."
                style={{ "--i--n": "2" , left : `${position*1.5}px`, top : `${position*0.6}px`}}
            />

            <LazyLoadImage 
                className="img Hide2" 
                src={Mobile}
                style={{ "--i--n": "1" , 'top' : `${position*0.8}px`}}
                placeholderSrc={PH}
                effect='blur'
            />
            {/* <div className="Fill" style={{height : `${position*0.35}px`}}></div> */}
        </div>
    );
}

export default Parallax;
