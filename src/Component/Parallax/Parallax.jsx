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

import useScroll from "../../Hook/useScroll";

function Parallax() {
    const [position, setPosition] = useState(0);
    const Scroll = useScroll();

    useEffect(() => {
        setPosition(Scroll);
    }, [Scroll]);

    console.log(position);

    return (
        <div className="Parallax">
            <img src={PH} alt="P." />
            <LazyLoadImage
                className="img"
                src={Riff1}
                alt="P."
                style={{ "--i--n": "8" }}
            />
            <LazyLoadImage
                className="img"
                src={Riff2}
                alt="P.."
                style={{ "--i--n": "5" }}
            />
            <LazyLoadImage
                className="img"
                src={Riff3}
                alt="P..."
                style={{ "--i--n": "3" }}
            />
            <LazyLoadImage
                className="img"
                src={AFish}
                alt="P...."
                style={{ "--i--n": "6" }}
            />
            <LazyLoadImage
                className="img"
                src={BFish}
                alt="P....."
                style={{ "--i--n": "7" }}
            />
            <LazyLoadImage
                className="img"
                src={Fish}
                alt="P......"
                style={{ "--i--n": "4" }}
            />
            <LazyLoadImage
                className="img"
                src={BackRiff}
                alt="P......."
                style={{ "--i--n": "1" }}
            />
            <LazyLoadImage
                className="img"
                src={Turtle}
                alt="P........."
                style={{ "--i--n": "2" }}
            />
        </div>
    );
}

export default Parallax;
