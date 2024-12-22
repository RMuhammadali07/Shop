import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Homes from './pages/home/Homes'

const App = () => {
  return (
    <div>
      <Banner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
