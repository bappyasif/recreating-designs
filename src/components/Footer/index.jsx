import { footerItems } from "../../data"

export const Footer = () => {
  const { links, newsletter } = footerItems
  return (
    <div className='flex flex-col place-items-center gap-4 w-full'>
      <h2>Subscribe to our newsletter to get the latest trends & news</h2>
      <h3>Join our database NOW!</h3>
      <ShowNewsletter items={newsletter} />
      <ShowLinks items={links} />
      <RenderCopyrights />
    </div>
  )
}

const ShowNewsletter = ({ items }) => {
  const renderItems = () => items.map(item => <RenderInput key={item.name} item={item} />)

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>{renderItems()}</div>
      <button>SUBSCRIBE</button>
    </div>
  )
}

const RenderInput = ({ item }) => {
  const { name, placeholder, type } = item;

  return (
    <label htmlFor={name}>
      <input type={type} id={name} placeholder={placeholder} />
    </label>
  )
}

const ShowLinks = ({ items }) => {
  const renderItems = () => items.map(item => <RenderItem key={item.title} data={item} />)

  return (
    <div className='flex justify-between gap-4 flex-wrap'>{renderItems()}</div>
  )
}

const RenderItem = ({ data }) => {
  const { icon, title, line1, line2 } = data;

  return (
    <div>
      <h2>{icon}</h2>
      <h2>{title}</h2>
      <div>
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </div>
  )
}

const RenderCopyrights = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <div>
      <p>Copyright &copy;{getYear()} All rights reserved | This template is recreated by a.b. and inspired by Colorlib templates</p>
    </div>
  )
}