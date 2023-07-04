import { BellIcon, SpeakerIcon } from '@/assets/icon'
import { Header, StudentTitle } from '@/assets/styled'
import React from 'react'

const Students = () => {
  return (
    <div>
        <Header>
            <SpeakerIcon />
            <BellIcon />
        </Header>
        <StudentTitle>
            <h2>Students List</h2>
            <div>
                
            </div>
        </StudentTitle>

    </div>
  )
}

export default Students