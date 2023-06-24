import { footerItems } from "../../data"

export const Footer = () => {
  const { links, newsletter } = footerItems
  return (
    <div 
      className="flex flex-col gap-16 w-full items-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/?Tourism,couple,sights,tourists,greens,lowlighting')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        objectFit: "contain"
      }}
    >
      <h2 className="text-6xl">Subscribe to our newsletter to get the latest trends & news</h2>
      <h3 className="text-5xl">Join our database NOW!</h3>
      <div className='w-3/4 grid grid-cols-3 content-center items-center gap-y-6'>
        <ShowNewsletter items={newsletter} />
        <ShowLinks items={links} />
        <RenderCopyrights />
      </div>
    </div>
  )
}

const ShowNewsletter = ({ items }) => {
  const renderItems = () => items.map(item => <RenderInput key={item.name} item={item} />)

  return (
    <div className='col-span-3'>
      <div className='grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xxs:gap-y-4 gap-x-4 content-center'>
        {renderItems()}
        <button className="xxs:col-span-1 md:col-span-2 lg:col-span-2 xxs:col-start-1 lg:col-start-2">SUBSCRIBE</button>
      </div>
    </div>
  )
}

const RenderInput = ({ item }) => {
  const { name, placeholder, type } = item;

  return (
    <label className="xxs: col-span-1 lg:col-span-2" htmlFor={name}>
      <input className="h-16 w-full rounded-lg px-4 text-2xl" type={type} id={name} placeholder={placeholder} />
    </label>
  )
}

const ShowLinks = ({ items }) => {
  const renderItems = () => items.map(item => <RenderItem key={item.title} data={item} />)

  return (
    <div className='col-span-3 flex xxs:flex-col lg:flex-row xxs:justify-center lg:justify-between gap-4 flex-wrap'>{renderItems()}</div>
  )
}

const RenderItem = ({ data }) => {
  const { icon, title, line1, line2 } = data;

  return (
    <div className="flex flex-col gap-4 items-center bg-slate-900 opacity-70 xxs:w-full lg:w-1/4 py-8 rounded-md">
      <h2 className="text-white text-4xl">{icon}</h2>
      <h2 className="text-4xl">{title}</h2>
      <div className="text-xl flex flex-col gap-4">
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </div>
  )
}

const RenderCopyrights = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <p className="col-span-3 mx-auto xxs:text-xs lg:text-xl">Copyright &copy;{getYear()} All rights reserved | This template is curated by a.b. and inspired from Colorlib templates</p>
  )
}