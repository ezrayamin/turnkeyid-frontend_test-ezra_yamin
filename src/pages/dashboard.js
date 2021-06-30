import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getData} from '../actions'


import '../css/App.css'
import ProfilesTable from '../components/organizationProfile'
import Pagination from '../components/pagination'
import Drawer from '../components/drawer'

function UsersDahboard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentDashBoard, setCurrentDashboard] = useState("organization")
  const [loading, setLoading] = useState(false)
  
  const postsPerPage = 7
  
  const dispatch = useDispatch()
  const {usersData} = useSelector((state) => {
    return {
      usersData: state.usersData
    }
  })
  useEffect(() => {
   dispatch(getData())
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentShownData = usersData.slice(indexOfFirstPost, indexOfLastPost)

  const changePage = (selectedNumber) => setCurrentPage(selectedNumber)

  const changeDashboard = (selectedPage) => setCurrentDashboard(selectedPage)
  return (
    <div className="App">
      {/* <TopNavigation/> */}
      <div className="body">
        <Drawer
        changeDashboard={changeDashboard}
        currentDashboard={currentDashBoard}
        />
        <div className="list-container">
          {
            currentDashBoard === 'organization'
            ?
            <ProfilesTable
              data={currentShownData}
              loading={loading}
              lastId={usersData.length}
            />
            :
            <></>
          }
          <Pagination
            dataPerPage={postsPerPage}
            totalData={usersData.length}
            changePage={changePage}
            current={currentPage}
          />
        </div>
      </div>
      {/* <div className="footer">
        <div className="sort-container">
        </div>
        <div className="pagination-container">
        </div>
      </div> */}
    </div>
  )
}

export default UsersDahboard