import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import { MainDashboard } from './main-dashboard'

const Dashboard = () => {
  return (
    <>
    <Header />
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainDashboard>
        
      </MainDashboard>
    </div>
  </>
  )
}

export default Dashboard