import {useState, useEffect}from 'react';
function useScroll() {
    const [position, setPosition] = useState(0);

    //Component Did Mount
    useEffect(() => {
        //Function To Get The Y Position
        const UpdatePosition = () => {
            setPosition(window.pageYOffset);
        }
        //Add Event Listener For User Scroll
        window.addEventListener('scroll', UpdatePosition);
        //Component Unmount
        return () => window.removeEventListener('scroll', UpdatePosition);
    }, []);

  return position;
}
export default useScroll;