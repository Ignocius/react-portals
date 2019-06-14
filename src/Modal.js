import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ title, mainText ,showModal }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">  
        <div className="header">{title}</div>
        <div className="content">
          {mainText}
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