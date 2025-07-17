import { useState, useEffect } from 'react';
import ButchPressKit from '../assets/resources/PresskitButch.pdf';

const MoreAbout = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="flex justify-center">
            {isVisible && (
                <iframe src={ButchPressKit} height={590} width={800} ></iframe>
            )}
        </div>
    )
}

export default MoreAbout