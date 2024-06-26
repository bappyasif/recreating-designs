import React, { useEffect, useState } from 'react'

export default function RadialProgressBar({ show, viewing }: { show: boolean, viewing: number }) {
    const [prog, setProg] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setProg(prev => prev + 1)
        }, 118)

        return () => clearTimeout(timer)
    }, [prog])

    useEffect(() => {
        setProg(0)
    }, [viewing, show])

    return (
        <svg
        >
            <circle
                cx={9}
                cy={9}
                // fill="red"
                fill="transparent"
                r={6}
                // stroke={"yellow"}
                stroke={"floralwhite"}
                strokeWidth={4}
            />
            {
                show
                    ? <circle
                        cx={9}
                        cy={9}
                        // fill="red"
                        fill="transparent"
                        r={6}
                        // stroke={"blue"}
                        stroke={"grey"}
                        strokeWidth={4}
                        strokeDasharray={2 * Math.PI * 6}
                        strokeDashoffset={(2 * Math.PI * 6) * ((100 - prog) / 100)}
                        strokeLinecap={"round"}
                    />
                    : null
            }
        </svg>
    )
}
