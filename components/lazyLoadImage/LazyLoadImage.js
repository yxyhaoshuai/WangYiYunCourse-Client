import React, { useState, useEffect, useRef } from 'react';

const LazyLoadImage = ({ src }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const imageRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '200px' // 距离视窗边界200px时开始加载
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imageRef}
            src={isIntersecting ? src : ''}
            alt=""
        />
    );
};

export default LazyLoadImage;
