"use client"

import React, { useEffect, useState } from 'react'
import { Filters, Heading, SelectItems } from './_components/Header'

const AccessoriesPage = () => {
  // const [filters, setFilters] = useState<string[]>([])

  const [allFilters, setAllFilters] = useState([""])

  const [improvedFilters, setImprovedFilters] = useState({Availability: "", Gender: "", Size: ""})

  // const updateFilter = (newVal: string, filterNumber: number) => {
  //   setFilters(prev => {
  //     const filtered = prev.filter((_, idx) => idx !== filterNumber)
  //     return filtered
  //   })
  // }

  // const updateFilter = (newVal: string, oldIdx: number) => {
  //   setFilters( prev => {
  //     const mapped = prev.map((_, idx) => idx === oldIdx ? newVal : _)
  //     return mapped
  //   })
  // }

  // const checkIfExist = (val: string) => filters.findIndex(v => v === val)

  // const addToFilters = (newVal: string) => setFilters(prev => [...prev, newVal])

  const updateOrAddFilter = (val: string, selName: string) => {
    // const filterNumber = selName === "Availability" ? 0 : selName === "Gender" ? 1 : 2;

    // setImprovedFilters((prev) => {
    //   if(selName === "Availability") {
    //     prev.Availability = val
    //   } else if(selName === "Gender") {
    //     prev.Gender = val
    //   } else {
    //     prev.Size = val
    //   }

    //   return prev
    // })

    setImprovedFilters(prev => ({...prev, [selName]: val}))

    // console.log(val, filters.length, ">>", selName)

    // updateFilter()

    // if(checkIfExist(val) !== -1) {
    //   console.log("update")
    //   // updateFilter(val, filterNumber)
    // } else {
    //   console.log("add")
    //   addToFilters(val)
    // }
  }

  // const removeFromFilters = (value: string) => {
  //   setFilters(prev => {
  //     const filtered = prev.filter(v => v !== value)
  //     return filtered
  //   })
  // }

  const removeFromFilters = (value: string) => {
    setAllFilters(prev => {
      const filtered = prev.filter(v => v !== value)
      return filtered
    })
  }

  // const clearFilters = () => setFilters([])

  const clearFilters = () => {
    setAllFilters([])
    setImprovedFilters({Availability: "", Gender: "", Size: ""})
  }

  // useEffect(() => {
  //   const temp: string[] = []
  //   for(let key in improvedFilters) {
  //     temp.push(improvedFilters[key as keyof typeof improvedFilters])
  //   }
  //   console.log(temp, "temp!!")

  // }, [improvedFilters])

  // const [allFilters, setAllFilters] = useState([""])

  useEffect(() => {
    const temp = []
    for(let key in improvedFilters) {
      // console.log(improvedFilters, "!!", key, improvedFilters[key as keyof typeof improvedFilters])
      temp.push(improvedFilters[key as keyof typeof improvedFilters])

    }

    setAllFilters(temp.filter(v => v))

    console.log(temp, "temp!!")
  }, [improvedFilters])

  return (
    <div className='min-h-screen'>
      <Heading />
      <SelectItems updateOrAddFilter={updateOrAddFilter} />
      <Filters clearAll={clearFilters} filters={allFilters} removeFilter={removeFromFilters} />
    </div>
  )
}

export default AccessoriesPage