import React, { useEffect, useState } from 'react'

export default function RadialProgressBar({show, viewing}: {show: boolean, viewing: number}) {
    const [prog, setProg] = useState(0)
    
    useEffect(() => {
        if(prog < 100 && show) {
            const timer = setTimeout(() => setProg(prev => prev + 1.8), 200)

            // console.log("inside", viewing, show)

            return () => clearTimeout(timer)
        }

        // console.log("outside", viewing, show)
    }, [prog, show])

    // useEffect(() => {
    //     show && setProg(0)
    // }, [show, viewing])

    // useEffect(() => {
    //    !show && setProg(0)
    // }, [show])

    useEffect(() => {
        setProg(0)
        // show && console.log(show, prog, viewing)
    }, [viewing])

    // console.log(prog)

    return (
        <div
            // className="svg-pi-wrapper"
            // style={{ width: 100, height: 100 }}
        >
            <svg
                // className="svg-pi"
                // style={{ width: 100, height: 100 }}
            >
                <circle
                    // className="svg-pi-track"
                    cx={9}
                    cy={9}
                    fill="red"
                    r={6}
                    stroke={"yellow"}
                    strokeWidth={4}
                />
                <circle
                    // className={`svg-pi-indicator ${
                    //   spinnerMode ? "svg-pi-indicator--spinner" : ""
                    // }`}
                    // className={`svg-pi-indicator svg-pi-indicator--spinner`}
                    // style={{ animationDuration: "1000" }}
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
