import React from 'react'
import '../css/components/drawer.css'

const Drawer = ({changeDashboard, currentDashboard}) => {
    const identifyActiveDashboard = (dashboard) => {
        changeDashboard(dashboard)
    }
    return (
        <div className="drawer-container">
            <h5 onClick={() => identifyActiveDashboard("client") }style={currentDashboard === 'client' ? {color:'orange'} : {color:'white'}}> <i className="fas fa-border-all" id="manage-icon"></i>Client Dashboard</h5>
            <h5 onClick={() => identifyActiveDashboard("sales") }style={currentDashboard === 'sales' ? {color:'orange'} : {color:'white'}}> <i className="far fa-chart-bar" id="sales-icon"></i>Sales</h5>
            <h5 onClick={() => identifyActiveDashboard("organization") }style={currentDashboard === 'organization' ? {color:'orange'} : {color:'white'}}> <i className="fas fa-user" id="user-icon"></i>Organization Profile</h5>
        </div>
    )
}

export default Drawer