import Link from 'next/link'
import React from 'react'
import NavbarItem from './NavbarItem'

export default function NavBar() {
  return (
    <div className='flex bg-amber-100 p-4 text-lg justify-center gap-7 my-3'>
        <NavbarItem route = '/category/now_playing' title='현재 상영작'></NavbarItem>
        <NavbarItem route = '/category/top_rated' title='평점 좋은 영화'></NavbarItem>
        <NavbarItem route = '/category/upcoming' title='개봉 예정작'></NavbarItem>
    </div>
  )
}
