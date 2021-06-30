import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Pagination = ({ dataPerPage, totalData, changePage, current }) => {
    const pageNumbers = []
    const maxNumber = Math.ceil(totalData / dataPerPage)
    let numbers = 1
    
    while (numbers <= maxNumber) {
        pageNumbers.push(numbers)
        numbers++
    }

    const identifyActivePage = (number) => {
        changePage(number)
    }

    return (
        <ListGroup horizontal style={{display: 'flex', justifyContent: 'center'}}>
            {pageNumbers.map(number => {
                return (
                    <div className={current === number ? "active-number" : "nonactive-number"}
                        onClick={() => identifyActivePage(number)} key={number}>
                        {number}
                    </div>
                )
            })}
        </ListGroup>
    )

}
export default Pagination