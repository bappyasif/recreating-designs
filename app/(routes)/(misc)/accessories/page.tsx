"use client"

import React, { useEffect, useState } from 'react'
import { Filters, Heading, SelectItems } from './_components/Header'
import { ProductsGallery } from './_components/Gallery'

const AccessoriesPage = () => {
  const [allFilters, setAllFilters] = useState([""])

  const [improvedFilters, setImprovedFilters] = useState({Availability: "All", Gender: "All", Size: "All"})

  // const [selectedOpt, setSlectedOpt] = useState("")

  const updateOrAddFilter = (val: string, selName: string) => {
    setImprovedFilters(prev => ({...prev, [selName]: val}))
    // val !== "All" && setImprovedFilters(prev => ({...prev, [selName]: val}))
  }

  const removeFromFilters = (value: string) => {
    setAllFilters(prev => {
      const filtered = prev.filter(v => v !== value)
      return filtered
    })

    // setSlectedOpt(prev)
  }

  const clearFilters = () => {
    setAllFilters([])
    setImprovedFilters({Availability: "", Gender: "", Size: ""})
  }

  useEffect(() => {
    const temp = []
    
    for(let key in improvedFilters) {
      temp.push(improvedFilters[key as keyof typeof improvedFilters])
    }

    setAllFilters(temp.filter(v => v))

  }, [improvedFilters])

  return (
    <div className='min-h-screen space-y-10 w-4/5 mx-auto'>
      <Heading />
      <SelectItems updateOrAddFilter={updateOrAddFilter} trackedFilters={improvedFilters} />
      <Filters clearAll={clearFilters} filters={allFilters} removeFilter={removeFromFilters} />
      <ProductsGallery />
    </div>
  )
}

export default AccessoriesPage