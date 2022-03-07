import { useEffect, useState } from "react";

const getWindowDimesions = () => {
    const { innerWidth: width, innerHeigth: heigtht } = window;
    return{
        width,
        heigtht
    };
}

export const useWindowDimensions = () =>{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimesions());

    useEffect(()=> {
        const handleResize = () =>{
            setWindowDimensions(getWindowDimesions());
        }

        window.addEventListener('resize', handleResize);

        return() => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}