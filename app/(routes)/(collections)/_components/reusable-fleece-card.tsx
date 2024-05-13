import { ImageSlideOnCardWithProgress } from "@/app/components/image-slide-on-card-with-progress";
import { useEffect, useState } from "react";

type Cardrops = {
    name: string;
    images: string[];
}

export const FleeceCard = ({ name, images }: Cardrops) => {
    const [rnd, setRnd] = useState(0.0)

    useEffect(() => {
        setRnd(Math.random())
    }, [])

    return (
        <div className='w-[45%] flex flex-col gap-y-4'>

            <ProductCard images={images} rnd={rnd} />

            <div>
                <div className="space-y-2 text-xl">
                    <p>{name}</p>
                    <p>$25.00</p>
                </div>
                {
                    rnd > .5 ? <p>Sold Out</p> : null
                }
            </div>
        </div>
    )
}

const ProductCard = ({ images, rnd }: { images: string[], rnd: number }) => {
    const [currSrc, setCurrSrc] = useState(0)

    const imgSources = images

    const nextPicture = () => setCurrSrc((prev) => {
        if (prev >= imgSources.length - 1) {
            return 0
        } else {
            return prev + 1
        }
    })

    const initialPicture = () => setCurrSrc(0)

    return (
        <div className='bg-slate-400 max-h-[40rem] w-full rounded-sm relative flex items-center'>
            {/* <ProductImage imgSrc={imgSources[currSrc]} nextPicture={nextPicture} initialPicture={initialPicture} rnd={rnd} images={imgSources.length} repeat={currSrc === images.length - 1} /> */}

            <ImageSlideOnCardWithProgress images={images.length} imgSrc={imgSources[currSrc]} initialPicture={initialPicture} nextPicture={nextPicture} repeat={currSrc === images.length - 1} rnd={rnd > 0.5} />

            <span className={`${rnd > .5 ? "visible" : "invisible"} absolute bottom-0 w-full text-center text-xl font-bold`}>Sold out</span>
        </div>
    )
}