import { useState, useEffect } from 'react';

const MoreAbout = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="flex justify-center">
            {isVisible && (
                <iframe src="https://res.cloudinary.com/dvqnxq5g5/image/upload/v1752953598/PresskitButch_mcqiec.pdf" height={590} width={800} ></iframe>
            )}
        </div>
    )
}

export default MoreAbout