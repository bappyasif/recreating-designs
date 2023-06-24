import { Footer } from "../components/Footer"
import { RenderLatestBlogs, RenderLinks, RenderSideView } from "../components/ForNews"
import { Header } from "../components/Header"
import { RenderSearch } from "../components/Hero"
import { heroItems } from "../data"

export const News = () => {
    return (
        <div
            className='font-serif text-slate-400 flex flex-col gap-28'
        >
            <div
                className='pb-9'
                style={{
                    backgroundImage: "url('https://source.unsplash.com/random/?Tourism,couple,sights,tourists,greens')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    objectFit: "contain"
                }}
            >
                <div className='bg-slate-800 fixed w-full z-40 py-2 opacity-80'>
                    <Header />
                </div>
                <div className="grid xxs:grid-cols-1 lg:grid-cols-5 mt-40">
                    <RenderSearch items={heroItems.search} />
                </div>
            </div>
            {/* <Header />
            <div className="grid grid-cols-5">
                <RenderSearch items={heroItems.search} />
            </div> */}
            <div className="xxs:px-2 lg:px-40 grid xxs:grid-cols-1 lg:grid-cols-5">
                <RenderLatestBlogs />
                <div className="xxs:col-start-1 lg:col-start-5 flex flex-col gap-20 h-full">
                    <RenderLinks />
                    <RenderSideView />
                    <RenderBanner />
                </div>
            </div>
            {/* <div className="w-3/4 mx-auto flex gap-20 justify-between">
                <RenderLatestBlogs />
                <div className="flex flex-col gap-4 items-end">
                    <RenderLinks />
                    <RenderSideView />
                </div>
            </div> */}
            <Footer />
        </div>
    )
}

const RenderBanner = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <img
                className="xxs:h-full lg:h-1/2 xxs:w-96 lg:w-fit"
                src="https://source.unsplash.com/random/?tourism&banner&vertical"
                alt="some banner"
            />
        </div>
    )
}
