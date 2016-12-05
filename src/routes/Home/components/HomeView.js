import React from 'react'
import './HomeView.scss'
import DuckImage from '../assets/Duck.jpg'

export const HomeView = () => (
  <div className='pageWrapper'>
    <h1>Home Page</h1>
    <img src={DuckImage} alt='This is a duck, because Redux!' />
  </div>
)

export default HomeView
