import { useEffect, useState } from "react"

export const useForTruthToggle = () => {
    const [isTrue, setIsTrue] = useState(false)

    const handleTruthy = () => setIsTrue(true)

    const handleFalsy = () => setIsTrue(false)

    return { isTrue, handleFalsy, handleTruthy }
}

function useInViewPort<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
    const [inViewport, setInViewport] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInViewport(entry.isIntersecting);
        }, options);

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options, ref]);
    
    return inViewport;
}
export default useInViewPort;