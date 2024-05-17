import Link from "next/link"

export const InputItem = ({ type, name }: { type: string, name: string }) => {
    return (
        <input type={type} name={name} placeholder={name} className="text-xl p-4 w-[38rem] border-2" />
    )
}

export const Header = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-center items-center relative">
            <p className="text-4xl font-bold py-4">{text}</p>
            <span className="h-0.5 w-11 bg-slate-950 absolute bottom-0"></span>
        </div>
    )
}

export const ActionButton = ({ text }: { text: string }) => {
    return (
        <button className="w-[38rem] p-4 bg-slate-900 text-slate-200">{text}</button>
    )
}

export const ActionLink = ({ text, link }: { text: string, link: string }) => {
    return (
        <Link href={link} className="underline text-xl">{text}</Link>
    )
}