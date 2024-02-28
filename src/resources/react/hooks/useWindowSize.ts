import { useEffect, useState } from 'react';



const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
    const [size, setSize] = useState<{ width: number; height: number }>({
        width: initialWidth,
        height: initialHeight,
    });
    const handler = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect((): (() => void) | void => {
        window.addEventListener("resize", handler)
        return () => {
            window.removeEventListener("resize", handler)
        }
    }, []);

    return size;
};

export default useWindowSize;