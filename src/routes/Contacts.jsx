import { Footer } from "../components/Footer"
import { GetInTouchWithUs, MessageForm } from "../components/ForContacts"
import { Header } from "../components/Header"
import { RenderSearch } from "../components/Hero"
import { heroItems } from "../data"

export const Contacts = () => {
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

            <div
                className="xxs:px-2 lg:px-40 lg:grid lg:grid-cols-4"
            >
                <GetInTouchWithUs />
                <MessageForm />
            </div>
            <ShowAddressInMap />
            <Footer />
        </div>
    )
}

const ShowAddressInMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1652.5095019988046!2d-118.29669096105123!3d34.069027093287694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c763b8c81f2f%3A0xb2e1fab1473a7185!2sLittle%20Bangladesh%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1687445829258!5m2!1sen!2sus"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    )
}