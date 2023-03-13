import { Filters } from './Filters.jsx'

export const Header = () => {
  return (
    <header>
      <h1 className='text-5xl mb-10 md:mt-1 mt-10'>React Shop 🛒</h1>
      <Filters />
    </header>
  )
}
