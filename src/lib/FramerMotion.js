import { delay } from "motion";
import { useMediaQuery } from "react-responsive";


export const fadeInUp = {
    initial: {
        y: -30,
        scale: 0.7,
        opacity: 0,
    },
    animate: {
        y: 0,
        scale: 1,
        opacity: 1, // (opacity maxes at 1)
    },
    // Detect if the screen size is mobile
    transition: ({ isMobile }) => ({
        type: "spring",
        stiffness: 300,
        damping: 18,
        delay: isMobile ? 0.3 : .2, // Apply delay based on mobile detection
    }),
};
