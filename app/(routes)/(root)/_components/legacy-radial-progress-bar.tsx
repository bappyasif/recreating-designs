import React, { useEffect, useState } from 'react'

export default function RadialProgressBar({ show, viewing }: { show: boolean, viewing: number }) {
    const [prog, setProg] = useState(0)
    const [timer, setTimer] = useState<any>(0)
    // const []

    useEffect(() => {
        if (prog < 100 && show) {
            // const timer = setTimeout(() => setProg(prev => prev + 1.8), 200)
            setTimer(setTimeout(() => setProg(prev => prev + .60), 130))

            // return () => clearTimeout(timer)
        }

    }, [prog, show])

    useEffect(() => {
        setProg(0)
        clearTimeout(timer)
    }, [viewing, show])

    console.log(timer, viewing, prog, "!!")

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
                timer
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
            {/* <circle
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
            /> */}
        </svg>
    )
}
