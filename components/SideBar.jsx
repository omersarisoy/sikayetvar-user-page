'use client'
import { CourseIcon, HomeIcon, LogoutIcon, PaymentIcon, ReportIcon, SettingsIcon, StudentsIcon } from '@/assets/icon'
import { CustomLink, Sidebar } from '@/assets/styled'
import Image from 'next/image'
import React from 'react'
import ProfilPhoto from '../public/pp.jpeg'
import Link from 'next/link'


const SideBar = () => {
  
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Sidebar>
    <h4>MANAGE COURSES</h4>
    <div className='avatarWrap'>
      <Image
        src={ProfilPhoto}
        width={128}
        height={128}
        alt="Picture of the author"
        priority
      />
      <p>Ömer Sarısoy</p>
      <span>Admin</span>
    </div>
    <div className='menuItems'>
    <CustomLink href="/">
      <HomeIcon /> Home
    </CustomLink>
    <CustomLink href="/">
      <CourseIcon /> Course
    </CustomLink>
    <CustomLink href="/students">
      <StudentsIcon /> Students
    </CustomLink>
    <CustomLink href="/">
      <PaymentIcon /> Payment
    </CustomLink>
    <CustomLink href="/">
      <ReportIcon /> Report
    </CustomLink>
    <CustomLink href="/">
      <SettingsIcon /> Settings
    </CustomLink>
    </div>
    <Link className='logout' href="/login" onClick={handleLogout} >
      Logout <LogoutIcon />
    </Link>
  </Sidebar>
  )
}

export default SideBar