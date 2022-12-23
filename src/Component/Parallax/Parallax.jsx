import { React, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Riff1 from "../../Asset/1Riff.png";
import PH from "../../Asset/PH.png";
import Mobile from "../../Asset/MobileParallax.png";
import "./Parallax.css";

import useScroll from "../../Hook/useScroll";

function Parallax() {
    const [position, setPosition] = useState(0);
    const Scroll = useScroll();
    useEffect(() => {
        setPosition(Scroll);
    }, [Scroll]);
    return (
        <div
            className="Parallax"
            style={{ height: `calc(130vh - (${position * 0.4444}px))` }}
        >   
            <img src={PH} alt="P." className="img" style={{ "--i--n": "1" }} />
            <LazyLoadImage
                className="imgg"
                src={Mobile}
                style={{
                    "--i--n": "2",
                    // transform: `translate3d(0px, ${position *0.6}px, 0px)`,
                }}
            />
            <LazyLoadImage
                className="img"
                src={Riff1}
                alt="P."
                style={{ "--i--n": "3"}}
            />
            <div className="Fill" style={{ "--i--n": "4" }}></div>
        </div>
    );
}

export default Parallax;
