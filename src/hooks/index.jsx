import { useState } from "react"

export const useOnButtonSliders = (initialSlide) => {
    const [slideName, setSlideName] = useState(initialSlide);

    const handleSlide = (name) => setSlideName(name);

    return {slideName, handleSlide}
}