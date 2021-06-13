import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Pagination = ({ dataPerPage, totalData, changePage, current }) => {
    const pageNumbers = []

    let numbers = 1
    while (numbers <= Math.ceil(totalData / dataPerPage)) {
        pageNumbers.push(numbers)
        numbers++
    }

    const identifyActivePage = (number) => {
        changePage(number)
    }

    return (
        <ListGroup horizontal>
            {pageNumbers.map(number => {
                return (
                    <ListGroup.Item className={current === number ? "active-number" : "nonactive-number"}
                        onClick={() => identifyActivePage(number)} key={number}>
                        {number}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )

}
export default Pagination

// const searchNames = (char) => {
//     console.log(char)
//     let tempData = shownData

//     tempData.filter((users) => {
//       let firstName = users.name.first.toLowerCase()
//       let lastName = users.name.last.toLowerCase()
//       if (char === "") {
//         return users
//       } else if (firstName.includes(char.toLowerCase()) || lastName.includes(char.toLowerCase())) {
//         console.log('users', users)
//         tempData = users
//       }
//     })

//     console.log('after filter', tempData)

//     setShownData(tempData)
//   }