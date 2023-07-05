'use client'
import { Card, Header, Hero } from '@/assets/styled'
import React from 'react'
import {
  BellIcon,
  SpeakerIcon, 
  UsdSquare, 
  Bookmark, 
  GraduationCap,
  Users
} from '@/assets/icon'

const cardInfo = [
  {
    id: 1,
    name: "Students",
    icon: <GraduationCap />,
    value: 243,
    background: "#F0F9FF"
  },
  {
    id: 2,
    name: "Course",
    icon: <Bookmark />,
    value: 13,
    background: "#FEF6FB"
  },
  {
    id: 3,
    name: "Payments",
    icon: <UsdSquare />,
    value: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(556.000),
    background: "#FEFBEC"
  },
  {
    id: 4,
    name: "Users",
    icon: <Users />,
    value: 3,
    background: "linear-gradient(to right, #FEAF00 , #F8D442)",
    color: "#FFFFFF"
  }
]
const Home = () => {
  return (
    <>
      <Header>
        <SpeakerIcon />
        <BellIcon />
      </Header>
      <Hero>
        {cardInfo.map((card) => ( 
          <Card $background={card.background} $color={card.color} key={card.id}>
            {card.icon}
            <p>{card.name}</p>
            <h1>{card.value}</h1>
          </Card>
        ))}
      </Hero>
    </>
  )
}

export default Home