import { useState } from "react"

export const useForTruthToggle = () => {
    const [isTrue, setIsTrue] = useState(false)

    const handleTruthy = () => setIsTrue(true)

    const handleFalsy = () => setIsTrue(false)

    return {isTrue, handleFalsy, handleTruthy}
}