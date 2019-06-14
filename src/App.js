import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal'

const App = () => {
  const [isModalShown, showModal] = useState(false)
  const [confirmedStatus, confirmStatus] = useState(false)

  const showHideModal = (status) => {
    showModal(!isModalShown)
    confirmStatus(status)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={() => showModal(true)}>Portal</button>
        { isModalShown &&
          <Modal showModal={showHideModal}></Modal>
        }
        <div class="ui one column grid">
          <div class="column">
            <div class="ui raised segment">
              {
                confirmedStatus ?
                <a  class="ui blue ribbon label">Confirmed</a> 
                :
                <a class="ui red ribbon label">Not Confirmed</a>
              }
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
 