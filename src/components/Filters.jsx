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
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio desde</label>
        <input onChange={handleChangeMinPrice} type='range' name='' value={filters.minPrice} id={minPriceFilterId} min='0' max='1000' />
        <span>$ {filters.minPrice}</span>

      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select onChange={handleChangeCategory} name='' id={categoryFilterId}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Móviles</option>
        </select>
      </div>

    </section>
  )
}
