import {React,  Component } from 'react';
import logo from './cover.gif';
import {FieldGroup, Button} from 'react-bootstrap';
import './App.css';


class App extends Component {
  logo='./cover.gif';
  render() {
    return (
      <div>

        <div className="App">
          <header className="App-header">
            <img src={this.logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Find a Ride!</h1>
          </header>
          <p className="App-intro"></p>
        <p>Fill out the following: </p>
        </div>git 
          <p>
 
      
       <FieldGroup
        id="formControlsText"
        type="text"
        label="First and Last Name"
        placeholder="Enter First and Last Name"
          />
      <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
       />
      <FieldGroup id="formControlsPassword" label="Password" type="password" />
      <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
       />
      <Button type="submit">Submit</Button>
      </p>
      </div>
    )

  }
}

export default App;
export FieldGroup;