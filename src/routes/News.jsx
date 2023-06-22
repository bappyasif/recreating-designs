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
                className='px-40 py-4'
                style={{
                    backgroundImage: "url('https://source.unsplash.com/random/?Tourism,couple,sights,tourists,greens')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    objectFit: "contain"
                }}
            >
                <Header />
                <div className="grid grid-cols-5">
                    <RenderSearch items={heroItems.search} />
                </div>
            </div>
            {/* <Header />
            <div className="grid grid-cols-5">
                <RenderSearch items={heroItems.search} />
            </div> */}
            <div className="px-40 grid grid-cols-5">
                <RenderLatestBlogs />
                <div className="col-start-5 flex flex-col gap-20 h-full">
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
        <div className="h-full flex items-center">
            <img
                className="h-1/2 w-fit"
                src="https://source.unsplash.com/random/?tourism&banner&vertical"
                alt="some banner"
            />
        </div>
    )
}
