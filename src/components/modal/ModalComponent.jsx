import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ModalComponent({ showModal, labelBtn, onClick, title, subTitle, link }) {

    return (
        <div>
            <Modal show={showModal} onHide={() => !showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{subTitle}</Modal.Body>
                <Modal.Footer>
                    <Link to={`${link}`}>
                        <Button variant="primary" onClick={onClick}>
                            {labelBtn}
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComponent