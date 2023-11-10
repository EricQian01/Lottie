import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import homeAnimation from "@/assets/Home.json";
'@/components/home';
const Home = () => {
    useEffect(() => {
        // Check if we're on the client side before using Lottie
        if (typeof window !== 'undefined') {
            const lottieAnimation = Lottie.loadAnimation({
                container: document.getElementById('lottie-container'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });

            // Optionally, you can handle cleanup when the component is unmounted
            return () => lottieAnimation.destroy();
        }
    }, []); // Run this effect only once on mount

    return (
        <div id="lottie-container" style={{ width: '100%', height: 'auto' }}>
            {/* Placeholder for Lottie animation */}
        </div>
    );
};

export default Home;
