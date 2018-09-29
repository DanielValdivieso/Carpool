import React, { Component } from 'react';

// import Map from "./components/Map";
import Joi from 'joi'
import L from 'leaflet';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';

import './App.css';

import Titles from "./components/Titles";
import Loc from "./components/Loc";


var myIcon = L.icon({
  iconUrl: "data:image/png;base64,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",
  iconSize: [38, 55],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});
const schema = Joi.object().keys({
  name: Joi.string().min(1).max(500).required(),
  message: Joi.string().min(1).max(500).required(),

});

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/v1/messages' : 'production-url-here';

class App extends Component {
  state = {
    location: {
      lat: 43.653908,
      lng: -79.384293,
    },
    haveUsersLocation: false,
    zoom: 8,
    userMessage: {
      name:'',
      message:''
    },
    sendingMessage:false,
    sentMessage:false

  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUsersLocation: true,
        zoom: 15
      });
    }, () => {
      console.log('ups...we dont have their location');
      fetch('https://ipapi.co/json')
       .then(res => res.json())
       .then(location => {
         this.setState({
           location: {
             lat: location.latitude,
             lng: location.longitude
           },
           haveUsersLocation: true,
           zoom: 15
       });
      });
    });
    }

    formIsValid = () => {
      const userMessage = {
        name: this.state.userMessage.name,
        message: this.state.userMessage.message
      };
      const result = Joi.validate(userMessage, schema);

      return result.error && !this.state.haveUsersLocation ? true : false;

    }
  
  
  formSubmitted = (event)=> {
    event.preventDefault();
  
    if(this.formIsValid()){
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({
          name: this.state.userMessage.name,
          message: this.state.userMessage.message,
          latitude: this.state.location.lat,
          longitude: this.state.location.lng,
        })
      }).then(res => res.json())
      .then(message => {
        console.log(message);
        setTimeout(() => {
        this.setState({
          sendingMessage: false,
          sentMessage: true
        });
      }, 4000);
      });
    }
  }

  valueChanged = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      userMessage: {
        ...prevState.userMessage,
        [name]: value
      }
    }))

  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Loc getMap={this.getMap}/>
                  <div id="themapthingy"/>;
                  <div>
                    <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                      {this.state.haveUsersLocation ? 
                      <Marker 
                      position={position}
                      icon={myIcon}>
                      <Popup>
                          Hi <br /> I'm available with 2 spots
                       </Popup>
                      </Marker> : ''
                      }
                  
                  </Map>
                    <Card body className="message-form">
                      <CardTitle>Welcome to CarpoolMap</CardTitle>
                      <CardText>Leave a message with your location.</CardText>
                      {
                        !this.state.sendingMessage && !this.state.sentMessage ?
                      
                      <Form onSubmit={this.formSubmitted}>
                        <FormGroup>
                          <Label for="name">Name</Label>
                          <Input
                          onChange={this.valueChanged} 
                          type="textarea" 
                          name="name" 
                          id="name" 
                          placeholder="Enter your Name " />
                        </FormGroup>
                        <FormGroup>
                          <Label for="message">Message</Label>
                          <Input
                          onChange={this.valueChanged} 
                          type="textarea" 
                          name="message" 
                          id="message" 
                          placeholder="Enter a message " />
                        </FormGroup>
                        <Button type="submit" color="danger" disabled={!this.formIsValid()}>Send</Button>
                      </Form> :
                        this.state.sendingMessage ?
                      <video autoplay loop src=""></video> :
                      <CardText>Thanks.</CardText>
                    }
                    </Card>

                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
