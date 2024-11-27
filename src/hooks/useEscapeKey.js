import {useEffect} from 'react';

function useEscapeKey(isOpen, closeCallback){
    useEffect(()=>{
        const handleKeyDown = (event) => {
            if(event.key === "Escape" && isOpen){
                closeCallback();
            } 
        };

        if (isOpen){
            window.addEventListener("keydown", handleKeyDown);
        }

        return()=>{
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, closeCallback]);
}

export default useEscapeKey;