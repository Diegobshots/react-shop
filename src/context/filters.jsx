import { createContext, useState } from 'react'

// El contexto que consume la app
export const FiltersContext = createContext()

// Esta función es la que se encarga de proveer el acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
