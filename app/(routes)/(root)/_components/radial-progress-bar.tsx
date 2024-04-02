import React, { useEffect, useState } from 'react'

export default function RadialProgressBar({ show, viewing }: { show: boolean, viewing: number }) {
    const [prog, setProg] = useState(0)

    useEffect(() => {
        if (prog < 100 && show) {
            const timer = setTimeout(() => setProg(prev => prev + 1.8), 200)

            return () => clearTimeout(timer)
        }

    }, [prog, show])

    useEffect(() => {
        setProg(0)
    }, [viewing])

    return (
        <div
        >
            <svg
            >
                <circle
                    cx={9}
                    cy={9}
                    fill="red"
                    r={6}
                    stroke={"yellow"}
                    strokeWidth={4}
                />
                <circle
                    cx={9}
                    cy={9}
                    fill="red"
                    r={6}
                    stroke={"blue"}
                    strokeWidth={2}
                    strokeDasharray={2 * Math.PI * 6}
                    strokeDashoffset={(2 * Math.PI * 6) * ((100 - prog) / 100)}
                    strokeLinecap={"round"}
                />
            </svg>
        </div>
    )
}
