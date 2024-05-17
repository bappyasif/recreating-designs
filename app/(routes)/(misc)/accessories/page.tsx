"use client"

import React, { useEffect, useState } from 'react'
import { Filters, Heading, SelectItems } from './_components/Header'
import { ProductsGallery } from './_components/Gallery'

const AccessoriesPage = () => {
  const [allFilters, setAllFilters] = useState([""])

  const [trackedFilters, setTrackedFilters] = useState({ Availability: "All", Gender: "All", Size: "All" })

  // const [selectedOpt, setSlectedOpt] = useState("")

  const updateOrAddFilter = (val: string, selName: string) => {
    setTrackedFilters(prev => ({ ...prev, [selName]: val }))
    // val !== "All" && setImprovedFilters(prev => ({...prev, [selName]: val}))
  }

  // const removeFromFilters = (value: string) => {
  //   setAllFilters(prev => {
  //     const filtered = prev.filter(v => v !== value)
  //     return filtered
  //   })

  //   // setSlectedOpt(prev)
  // }

  const updateImprovedFiltersAfterRemove = (idx: number) => {
    if (idx === 0) {
      setTrackedFilters(prev => ({ ...prev, Availability: "All" }))
    } else if (idx === 1) {
      setTrackedFilters(prev => ({ ...prev, Gender: "All" }))
    } else {
      setTrackedFilters(prev => ({ ...prev, Size: "All" }))
    }
  }

  const removeFromFilters = (value: string) => {
    setAllFilters(prev => {
      const filtered = prev.map((v, idx) => {
        if (v === value) {
          updateImprovedFiltersAfterRemove(idx)
          return "All"
        } else {
          return v
        }
      })
      return filtered
    })
  }

  const clearFilters = () => {
    setAllFilters([])
    setTrackedFilters({ Availability: "All", Gender: "All", Size: "All" })
  }

  useEffect(() => {
    const temp = []

    for (let key in trackedFilters) {
      temp.push(trackedFilters[key as keyof typeof trackedFilters])
    }

    setAllFilters(temp.filter(v => v))

  }, [trackedFilters])

  return (
    <div className='min-h-screen space-y-10 w-4/5 mx-auto text-[#474747] py-20'>
      <Heading />
      <SelectItems updateOrAddFilter={updateOrAddFilter} trackedFilters={trackedFilters} />
      <Filters clearAll={clearFilters} filters={allFilters} removeFilter={removeFromFilters} />
      <ProductsGallery allFilters={allFilters} />
    </div>
  )
}

export default AccessoriesPage