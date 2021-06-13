import React from 'react'
import { Modal, Image } from 'react-bootstrap'

const UsersList = ({ data, loading }) => {
    const [showModal, setShowModal] = React.useState({
        shwon: false,
        name: '',
        telephone: '',
        email: '',
        country: '',
        picture: ''
    })

    const openModal = (user) => {
        setShowModal({
            shwon: true,
            name: `${user.name.first} ${user.name.last}`,
            telephone: user.phone,
            email: user.email,
            country: user.location.country,
            picture: user.picture.medium
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
    }

    const MapCards = () => {
        return (
            data.map((user, index) => {
                return (
                    <div key={index} className="user-card" onClick={() => openModal(user)}>
                        <div className="card-body">
                            <Image src={user.picture.medium} className="user-avatar" roundedCircle />
                        </div>
                        <div className="text-body">
                            <h6 className="font-body">{user.name.first} {user.name.last}</h6>
                            <h6 className="font-country">{user.location.country}</h6>
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        <div>
            <div className="list-wrapper">
                {loading
                    ?
                    <div style={{ width: '100%' }}>
                        <i className="fas fa-spinner" id="spinner"></i>
                    </div>
                    :
                    <MapCards />
                }
            </div>
            <Modal show={showModal.shwon} onHide={closeModal} centered size="sm">
                <Modal.Header style={{ borderBottom: '0px' }}>
                    <p className="font-displayname">{showModal.name}</p>
                </Modal.Header>
                <Modal.Body className="modal-content" style={{ border: '0px' }}>
                    <div>
                    <Image src={showModal.picture} style={{ marginTop: "-20px" }} className="user-avatar" roundedCircle />
                    </div>
                    <div className="text-body">
                        <p className="font-detail">email:</p>
                        <p className="font-detail" style={{ marginTop: "-16px", color: '#575997' }}>{showModal.email}</p>
                        <p className="font-detail" style={{ marginTop: "-10px" }}>phone:</p>
                        <p className="font-detail" style={{ marginTop: "-16px", color: '#575997' }}>{showModal.telephone}</p>
                        <p className="font-detail" style={{ marginTop: "-10px" }}>country:</p>
                        <p className="font-detail" style={{ marginTop: "-16px", color: '#575997' }}>{showModal.country}</p>
                    </div>
                </Modal.Body>


            </Modal>
        </div>
    )
}

export default UsersList