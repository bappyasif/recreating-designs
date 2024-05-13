import { accessories } from "@/app/(routes)/(misc)/accessories/data"
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

    return { repNow }
}

export function useClickOutside(ref: any, onClickOutside: () => void) {
    useEffect(() => {
        /**
         * Invoke Function onClick outside of element
         */
        function handleClickOutside(event: any) {
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

export const useForAccessoriesFiltering = (allFilters: string[], setData: (d: any[]) => void) => {
    const onlyAlls = allFilters.filter(v => v === "All").length

    useEffect(() => {
        if (onlyAlls === 2) {
            const filteredProducts = accessories.map(item => item.sizes.includes(allFilters[2]) || item.type.includes(allFilters[1]) || item.stock.includes(allFilters[0]) ? item : null).filter(v => v)

            setData(filteredProducts as typeof accessories)
        } else if (onlyAlls === 1) {
            const filterProds = accessories.filter(item => {
                let chks = null
                if (allFilters[2] !== "All") {
                    if (allFilters[1] !== "All") {
                        chks = item.sizes.includes(allFilters[2]) && item.type.includes(allFilters[1])
                    } else {
                        chks = item.sizes.includes(allFilters[2]) && item.stock.includes(allFilters[0])
                    }
                } else if (allFilters[1] !== "All") {
                    if (allFilters[2] !== "All") {
                        chks = item.sizes.includes(allFilters[2]) && item.type.includes(allFilters[1])
                    } else {
                        chks = item.type.includes(allFilters[1]) && item.stock.includes(allFilters[0])
                    }
                } else if (allFilters[0] !== "All") {
                    if (allFilters[2] !== "All") {
                        chks = item.sizes.includes(allFilters[2]) && item.stock.includes(allFilters[0])
                    } else {
                        chks = item.type.includes(allFilters[1]) && item.stock.includes(allFilters[0])
                    }
                }

                return chks
            })

            setData(filterProds)

        } else if (onlyAlls === 0) {
            const prods = accessories.map(item => item.sizes.includes(allFilters[2]) && item.type.includes(allFilters[1]) && item.stock.includes(allFilters[0]) ? item : null).filter(v => v)
            setData(prods as typeof accessories)
        } else {
            setData(accessories)
        }
    }, [onlyAlls, allFilters])
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