import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export const Filters = () => {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = event => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters md:flex-row md:items-center flex-col items-start '>
      <div>
        <label htmlFor={minPriceFilterId}>Price from</label>
        <input onChange={handleChangeMinPrice} type='range' className='cursor-grab' value={filters.minPrice} id={minPriceFilterId} min='0' max='1000' />
        <span>$ {filters.minPrice}</span>

      </div>

      <div className='flex items-center'>
        <label htmlFor={categoryFilterId} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Category</label>
        <select onChange={handleChangeCategory} id={categoryFilterId} className='cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>

    </section>
  )
}
