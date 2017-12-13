import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gsjson from 'google-spreadsheet-to-json/index';

class App extends Component {

    getSpreadSheet(){

        gsjson({
            spreadsheetId: '1to_MAFCM20So9gSqZWR6-hV3gPjEFVPvmYiQhW1_1p8',
            worksheet: "Clientes"
        })
            .then(function(result) {
                console.log(result.length);
                console.log(result);
            })
            .catch(function(err) {
                console.log(err.message);
                console.log(err.stack);
            });

    }

    render() {
        this.getSpreadSheet();
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
  }
}

export default App;
