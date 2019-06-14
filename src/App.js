import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal'

const App = () => {
  const modal = {
    title: 'Confrim Modal',
    mainText: 'Are you totaly sure???',
    payload: (
      <div className="ui relaxed divided list">
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <a className="header">Semantic-Org/Semantic-UI</a>
            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <a className="header">Semantic-Org/Semantic-UI-Docs</a>
            <div className="description">Updated 22 mins ago</div>
          </div>
        </div>
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <a className="header">Semantic-Org/Semantic-UI-Meteor</a>
            <div className="description">Updated 34 mins ago</div>
          </div>
        </div>
      </div>
    ),
    actions: (status) => {
      showModal(!isModalShown)
      confirmStatus(status)
    }
  }
  const [isModalShown, showModal] = useState(false)
  const [confirmedStatus, confirmStatus] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={() => showModal(true)}>Portal</button>
        { isModalShown &&
          <Modal 
            title={modal.title}
            mainText={modal.mainText}
            payload={modal.payload}
            showModal={modal.actions}
            ></Modal>
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
 