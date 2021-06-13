import React from 'react'
import Axios from 'axios'
import { Navbar, DropdownButton, Dropdown, Image } from 'react-bootstrap'
import './css/App.css'
import { LOGO } from './asset'
import UsersList from './components/usersCard'
import Pagination from './components/pagination'

function App() {
  const [asc, setAsc] = React.useState(false)
  const [desc, setDesc] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [shownData, setShownData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  
  const postsPerPage = 8
  const url = 'https://randomuser.me/api/?results=20'
  
  React.useEffect(() => {
    const getUsersData = async () => {
      try {
        setLoading(true)
        let results = []
  
        if (localStorage.getItem('list') !== null) {
          const tempResults = localStorage.getItem('list')
          results = JSON.parse(tempResults)
        } else {
          const get = await Axios.get(url)
          results = get.data.results
  
          localStorage.setItem('list', JSON.stringify(results))
        }
  
        if (asc) {
          results = results.sort(function (a, b) {
            if (a.name.first < b.name.first) {
              return -1
            }
            if (a.name.first > b.name.first) {
              return 1
            }
  
            return 0
          })
        }
  
        if (desc) {
          results = results.sort(function (a, b) {
            if (a.name.first > b.name.first) {
              return -1
            }
            if (a.name.first < b.name.first) {
              return 1
            }
  
            return 0
          })
        }
  
        setShownData(results)
        setLoading(false)
      }
      catch (err) {
        setLoading(true)
        console.log(err)
      }
    }
    getUsersData()
  }, [asc, desc])


  const sortAsc = () => {
    setAsc(true)
    setDesc(false)
  }

  const sortDesc = () => {
    setDesc(true)
    setAsc(false)
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentShownData = shownData.slice(indexOfFirstPost, indexOfLastPost)

  const changePage = (selectedNumber) => setCurrentPage(selectedNumber)

  return (
    <div className="App">
      <Navbar className="navbar" style={{ backgroundColor: 'white' }}>
        <Navbar.Brand>
          <Image src={LOGO.default} alt='logo' className="logo" />
          {/* <strong style={{ color: 'white', fontSize: '30px' }}>Shoes Shop</strong> */}
        </Navbar.Brand>
      </Navbar>
      <div className="body">
        <div className="sort-container">
          <div className="dropdown-container">
            <div className="header-container">
            <h1 className="font-header">Suggested people</h1>
            </div>
            <DropdownButton className="dropdown" id="dropdown-button" title="Sort name ...">
              <Dropdown.Item className="dropdown" onClick={() => sortAsc()}>A - Z</Dropdown.Item>
              <Dropdown.Item className="dropdown" onClick={() => sortDesc()}>Z - A</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="list-container">
          <UsersList
            data={currentShownData}
            loading={loading}
          />
        </div>
      </div>
      <div className="footer">
        <div className="sort-container">
        </div>
        <div className="pagination-container">
        <Pagination
          dataPerPage={postsPerPage}
          totalData={shownData.length}
          changePage={changePage}
          current={currentPage}
          />
          </div>
      </div>
    </div>
  )
}

export default App
