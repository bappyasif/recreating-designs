import { Footer } from "../components/Footer"
import { GetInTouchWithUs, MessageForm } from "../components/ForContacts"
import { Header } from "../components/Header"
import { RenderSearch } from "../components/Hero"
import { heroItems } from "../data"

export const Contacts = () => {
    return (
        <div
            className='font-serif text-slate-400 px-40 py-4 flex flex-col gap-28'
        >
            <Header />
            <RenderSearch items={heroItems.search} />
            <div className="flex justify-between">
                <GetInTouchWithUs />
                <MessageForm />
            </div>
            <Footer />
        </div>
    )
}
