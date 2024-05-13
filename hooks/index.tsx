import { useEffect, useState } from "react"

export const useForTruthToggle = () => {
    const [isTrue, setIsTrue] = useState(false)

    const handleTruthy = () => setIsTrue(true)

    const handleFalsy = () => setIsTrue(false)

    return { isTrue, handleFalsy, handleTruthy }
}

export const useForRepeatSliderProgressView = (images: number, duration: number, repeat: boolean) => {
    const [repNow, setRepNow] = useState(true)

    useEffect(() => {
        if (repeat) {
            const addedTime = images === 4 ? duration + 150 : images === 5 ? duration + 200 : duration

            const timer2 = setTimeout(() => {
                setRepNow(false)
            }, addedTime)

            const timer = setTimeout(() => {
                setRepNow(true)
            }, addedTime + 200)

            return () => {
                clearTimeout(timer)
                clearTimeout(timer2)
            }
        }
    }, [repeat, images])

    return {repNow}
}

export function useClickOutside(ref: any, onClickOutside: () => void) {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      // Bind
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // dispose
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
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