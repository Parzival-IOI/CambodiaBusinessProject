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
            style={{ height: `calc(130vh - (${position * 0.3}px))` }}
        >
            <img src={PH} alt="P." className="img" style={{ "--i--n": "1" }} />
            <LazyLoadImage
                className="img"
                src={Riff1}
                alt="P."
                style={{ "--i--n": "3"}}
            />
            <LazyLoadImage
                className="img"
                src={Mobile}
                style={{
                    "--i--n": "2",
                    transform: `translateY(${position * 0.8}px)`,
                }}
                placeholderSrc={PH}
                effect="blur"
            />
            <div className="Fill" style={{ "--i--n": "4" }}></div>
        </div>
    );
}

export default Parallax;
