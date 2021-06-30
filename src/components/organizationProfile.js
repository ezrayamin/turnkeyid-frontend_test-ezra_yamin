import React from 'react'
import Axios from 'axios'
import { Modal, Image, Table, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { editData, deleteData, addData } from '../actions'

const ProfilesTable = ({ data, loading, lastId }) => {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = React.useState({
        shwon: false,
        name: '',
        telephone: '',
        email: '',
        id: 0,
        picture: ''
    })

    const [showAddMenu, setShowAddMenu] = React.useState({
        shwon: false,
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        id: 0,
        picture: ''
    })

    const openModal = (user) => {
        setShowModal({
            shwon: true,
            name: `${user.name.first} ${user.name.last}`,
            telephone: user.phone,
            email: user.email,
            id: user.id,
            picture: user.picture.medium
        })
    }

    const openAddMenu = () => {
        setShowAddMenu({
            ...openAddMenu,
            shwon: true
        })
    }

    const closeModal = () => {
        setShowModal({
            shwon: false,
            name: '',
            telephone: '',
            email: '',
            country: '',
            picture: ''
        })

        setShowAddMenu({
            shwon: false,
            name: '',
            telephone: '',
            email: '',
            id: 0,
            picture: ''
        })
    }

    const save = async () => {
        if (showModal.email === '' || showModal.telephone === '') {
            return alert('forms cannot be empty in order to continue')
        } else {
            const getFullProfil = await Axios.get(`http://localhost:2000/users/${showModal.id}`)
            const result = getFullProfil.data
            
            let tempUpdate = { ...result, email: showModal.email, phone: showModal.telephone }
            console.log(tempUpdate)
            // console.log(result)
            dispatch(editData(tempUpdate))
            setShowModal({
                name: '',
                telephone: '',
                email: '',
                id: 0,
                picture: ''
            })
        }
    }
    
    const addPersonnel = () => {

        const sendData = {
            "gender": "male/female",
            "name": {
                "title": "Mr/Ms",
                "first": showAddMenu.firstName,
                "last": showAddMenu.lastName
            },
            "location": {
                "street": {
                    "number": 5902,
                    "name": "Rua Vinte E Quatro de Outubro"
                },
                "city": "Pindamonhangaba",
                "state": "Maranhão",
                "country": "Brazil",
                "postcode": 84955,
                "coordinates": {
                    "latitude": "87.0133",
                    "longitude": "-12.0983"
                },
                "timezone": {
                    "offset": "0:00",
                    "description": "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            "email": showAddMenu.email,
            "login": {
                "uuid": "e095a2a1-aa0b-4596-9c9d-d8b2c6c77e2e",
                "username": "blacklion762",
                "password": "dakota",
                "salt": "auOSdcPQ",
                "md5": "601a9d2701655e76474ff3314cd5ed78",
                "sha1": "740c43579814056c2a1cf874e61aaec820301601",
                "sha256": "c983b93b484a60bf8e992b4a91eaff02c88485ea2395df39955c064584eec60e"
            },
            "dob": {
                "date": "1958-08-01T05:08:17.314Z",
                "age": 63
            },
            "registered": {
                "date": "2018-03-26T00:16:03.705Z",
                "age": 3
            },
            "phone": showAddMenu.telephone,
            "cell": "(96) 1555-4228",
            "id": parseInt(lastId) + 3,
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/54.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
            },
            "nat": "BR"
        }
        console.log(sendData)

        dispatch(addData(sendData))

        setShowAddMenu({
            shwon: false,
            firstName: '',
            lastName: '',
            telephone: '',
            email: '',
            id: 0,
            picture: ''
        })

    }

    const THead = () => {
        return (
            <thead>
                <tr >
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    const MapRows = () => {
        return (
            data.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.location.country}</td>
                        <td>active</td>
                        <td>
                            <div className="tableButtons-container">
                                <i className="fas fa-edit" id="edit-icon" onClick={() => openModal(user)} ></i>
                                <i className="fas fa-trash-alt" id="delete-icon"
                                    onClick={() => dispatch(deleteData(user.id))}></i>
                            </div>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <div>
            <div className="list-wrapper">
                <div className="addButton-container" >
                    <button className="add-button" onClick={openAddMenu}>
                        <i className="fas fa-plus" id="add-icon"></i>Add Personnel
                    </button>
                </div>
                <Table>
                    <THead />
                    <tbody>
                        <MapRows />
                        {/* <div style={{ display: 'flex' }}>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                        </div> */}
                    </tbody>
                </Table>
            </div>
            <Modal show={showModal.shwon} onHide={closeModal} centered size="sm">
                <Modal.Header style={{ borderBottom: '0px' }} closeButton>
                    <p className="font-displayname">{showModal.name}</p>
                </Modal.Header>
                <Modal.Body className="modal-content" style={{ border: '0px' }}>
                    <div>
                        <Image src={showModal.picture} style={{ marginTop: "-20px" }} className="user-avatar" roundedCircle />
                    </div>
                    <div className="text-body">
                        <p className="font-detail">email:</p>
                        <FormControl
                            placeholder="email"
                            value={showModal.email}
                            onChange={e => {
                                setShowModal({ ...showModal, email: e.target.value })
                            }}
                            type="text"
                            className="edit-forms"
                        />
                        {/* <p className="font-detail" style={{ marginTop: "-16px", color: '#575997' }}>{showModal.email}</p> */}
                        <p className="font-detail" style={{ marginTop: "-10px" }}>phone:</p>
                        <FormControl
                            placeholder="phone"
                            value={showModal.telephone}
                            onChange={e => {
                                setShowModal({ ...showModal, telephone: e.target.value })
                            }}
                            type="text"
                            className="edit-forms"
                        />
                        {/* <p className="font-detail" style={{ marginTop: "-16px", color: '#575997' }}>{showModal.telephone}</p> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="confedit-buttons" onClick={save}>save</button>
                    <button className="canceledit-buttons" onClick={closeModal}>cancel</button>
                </Modal.Footer>
            </Modal>
            <Modal show={showAddMenu.shwon} onHide={closeModal} centered>
                <Modal.Header closeButton style={{ width: '100%' }}>
                    <h3 className="font-displayname">Add Personel</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-body">
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: '1em' }}>
                                <p className="font-detail">first name</p>
                                <FormControl
                                    placeholder=""
                                    value={showAddMenu.firstName}
                                    onChange={e => {
                                        setShowAddMenu({ ...showAddMenu, firstName: e.target.value })
                                    }
                                    }
                                    type="text"
                                />
                            </div>
                            <div>
                                <p className="font-detail">last name</p>
                                <FormControl
                                    placeholder=""
                                    value={showAddMenu.lastName}
                                    onChange={e => {
                                        setShowAddMenu({ ...showAddMenu, lastName: e.target.value })
                                    }
                                    }
                                    type="text"
                                />
                            </div>
                        </div>
                        <p className="font-detail">email</p>
                        <FormControl
                            placeholder=""
                            value={showAddMenu.email}
                            onChange={e => {
                                setShowAddMenu({ ...showAddMenu, email: e.target.value })
                            }
                            }
                            type="text"
                        />
                        <p className="font-detail">phone number</p>
                        <FormControl
                            placeholder=""
                            value={showAddMenu.telephone}
                            onChange={e => {
                                setShowAddMenu({ ...showAddMenu, telephone: e.target.value })
                            }
                            }
                            type="text"
                        />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="confedit-buttons" onClick={addPersonnel}>save</button>
                    <button className="canceledit-buttons" onClick={closeModal}>cancel</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProfilesTable