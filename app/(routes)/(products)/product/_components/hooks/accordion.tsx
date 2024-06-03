import { useForTruthToggle } from "@/hooks"
import { useEffect, useRef, useState } from "react"

export const useForAccordionEffect = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    const ref = useRef<HTMLUListElement | null>(null)

    const [h, setH] = useState<number | null>()

    const [msCalc, setMsCalc] = useState(0)

    const handleOpen = () => {
        handleTruthy()
        ref.current?.clientHeight! > 0 && setH(ref.current?.clientHeight || 0)
        setMsCalc((ref.current?.clientHeight || 0) * 40)
    }

    useEffect(() => {
        if (h && !isTrue) {
            const timer = setTimeout(() => {
                setH(p => p! - 1)
            }, 10)

            return () => clearTimeout(timer)
        }
    }, [isTrue, h])

    const [tt, setTt] = useState(false)

    useEffect(() => {
        if (h) {
            console.log("tt", h)
            setTt(true)
        } else {
            console.log("rev tt", h)
            setTt(false)
        }
    }, [h])

    return {
        tt, h, isTrue, msCalc, handleOpen, ref, handleFalsy
    }
}

export const useForAccordionItem = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    const [onlyOnce, setOnlyOnce] = useState(false)

    const [remove, setRemove] = useState(false)

    useEffect(() => {
        setOnlyOnce(true)
    }, [])

    useEffect(() => {
        if(isTrue) {
            setRemove(false)
        } else {
            const ti = setTimeout(() => {
                setRemove(true)
            }, 800)

            return () => clearTimeout(ti)
        }
    }, [isTrue, remove])

    return {remove, handleFalsy, handleTruthy, onlyOnce, isTrue}
}