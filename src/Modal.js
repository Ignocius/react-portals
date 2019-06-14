import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ showModal }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">  
        <div className="header">Modal</div>
        <div className="content">
          Are you sure you want to ...?
        </div>
        <div className="actions">
          <button onClick={() => showModal(true)} className="ui primary button">Yes</button>
          <button onClick={() => showModal(false)} className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal