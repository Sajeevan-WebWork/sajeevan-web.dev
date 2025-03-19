import { delay } from "motion";

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
    // transition: { delay: .1 },
    // transition: { type: "spring", stiffness: 300, damping: 30 }
    // transition: { type: "tween", duration: 0.5, ease: "easeInOut" }



};
