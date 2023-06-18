import { Footer } from "../components/Footer"
import { RenderLatestBlogs, RenderLinks, RenderSideView } from "../components/ForNews"
import { Header } from "../components/Header"
import { RenderSearch } from "../components/Hero"
import { heroItems } from "../data"

export const News = () => {
    return (
        <div
            className='font-serif text-slate-400 px-40 py-4 flex flex-col gap-28'
        >
            <Header />
            <RenderSearch items={heroItems.search} />
            <div className="flex gap-4 justify-between">
                <RenderLatestBlogs />
                <div className="flex flex-col gap-4 justify-between">
                    <RenderLinks />
                    <RenderSideView />
                </div>
            </div>
            <Footer />
        </div>
    )
}
