
import React,{Component} from 'react';
import { FormGroup, Label, Col,  Input, Button, FormFeedback, Row} from 'reactstrap';
import {Control, Form, Errors, actions} from 'react-redux-form';
import {Stagger, Fade, FadeTransform} from 'react-animation-components'
import {Animated} from "react-animated-css";
import {bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { StyleSheet, css } from 'aphrodite';


const required =(val)=>val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        

class Contact extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     firstname:'',
        //     lastname:'',
        //     phonenumber:'',
        //     email:'',
        //     contact:'',
        //     contactthrough:'Tel',
        //     feedback:'',
        //     touched:{
        //         firstname:false,
        //         lastname:false,
        //         email:false,
        //         tel:false
        //     }
        // }
        // this.onchangeassign=this.onchangeassign.bind(this)
         this.onsubmit=this.onsubmit.bind(this);
        // this.onblur_handletouched=this.onblur_handletouched.bind(this);
        // this.validate=this.validate.bind(this);
    }

    
    // onblur_handletouched(event){
    //     this.setState({
    //         touched :{...this.state.touched, [event.target.name] : true}
    //     })
    // }

   

 
    onsubmit(value){
        alert(JSON.stringify(value))
        this.props.resetFeedbackForm();
             
    }
    render(){
        const styles = {
            bounce: {
              animation: '1s',
              animationName: Radium.keyframes(bounce, 'bounce')
            }
          }

        //   const styles = StyleSheet.create({
        //     bounce: {
        //       animationName: bounce,
        //       animationDuration: '1s'
        //     }
        //   })

        return(          
              <StyleRoot>
                <div className="container">
                     
                        <div className="row row-content" style={styles.bounce}>
                            <div className="col-12">
                                
                            <h3>Location Information</h3>
                            </div>
                            <div className="col-12 col-sm-4 offset-sm-1">
                                    <h5>Our Address</h5>
                                    <address>
                                    121, Clear Water Bay Road<br />
                                    Clear Water Bay, Kowloon<br />
                                    HONG KONG<br />
                                    <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                    <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                    <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                                    </address>
                            </div>
                            <div className="col-12 col-sm-6 offset-sm-1">
                                <h5>Map of our Location</h5>
                            </div>
                            <div className="col-12 col-sm-11 offset-sm-1">
                                <div className="btn-group" role="group">
                                    <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                    <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                    <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                                </div>
                            </div>
                        </div>
                       
                    <br/>
                    <div className="row row-content" style={styles.bounce}>
                        <div className="col-12"> <h3> Send Us Feedback!!! </h3> </div>
                        <div className="col-12 col-md-9">
                            <Form model="feedback" onSubmit={(values)=>this.onsubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="FirstName" md={3}>FirstName</Label>
                                    <Col md={7}>
                                        <Control.text model=".firstname" placeholder="First Name" name="firstname" id="firstname" 
                                         className="form-control" validators={{required, maxLength:maxLength(10), minLength:minLength(3)}}/>                                       
                                        <Errors className="text-danger" model=".firstname" show="touched"  messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}/>
                                    </Col>                                
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="LastName" md={3}>LastName</Label>
                                    <Col md={7}>
                                        <Control.text model=".lastname" placeholder="Last Name" name="lastname" id="lastname" 
                                        className="form-control" validators={{required, maxLength:maxLength(10), minLength:minLength(3)}}/>
                                        <Errors className="text-danger" model=".lastname" show="touched"  messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}/>
                                    </Col>                                
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="Phone Number" md={3}>Phone Number</Label>
                                    <Col md={7}>
                                        <Control.text model=".tel" placeholder="Phone Number" name="phonenumber" id="phonenumber" 
                                        className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}/>
                                         <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                    </Col>                                
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="Email" md={3}>Email</Label>
                                    <Col md={7}>
                                        <Control.text model=".email" placeholder="Email" name="email" id="email" 
                                        className="form-control" validators={{
                                            required, validEmail
                                        }}/>
                                         <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                    </Col>                                
                                </Row>
                                <Row className="form-group">                                    
                                    <Col md={{size:3, offset:3}}>
                                    <Row className="form-group" >                                        
                                            <Control.checkbox model=".contact" name="contact" id="contact" 
                                            className="form-control" onChange={this.onchangeassign}/> {' '}
                                            <Label>
                                            <strong>May we contact you?</strong>
                                            </Label>
                                    </Row>                                
                                    </Col>      
                                    <Col md={{size:3, offset:1}}>
                                    <Row className="form-group">                                        
                                            <Control.select model=".contactthrough" name="contactthrough" id="contactthrough" 
                                            className="form-control"  onChange={this.onchangeassign}> {' '}
                                                <option >Tel</option>
                                                <option>Email</option>
                                            </Control.select>
                                    </Row>                                
                                    </Col>                                
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="Your Feedback" md={3}>Your Feedback</Label>
                                    <Col md={7}>
                                        <Control.textarea model=".feedback" name="feedback" id="feedback" rows="5" className="form-control"
                                         
                                        onChange={this.onchangeassign}></Control.textarea>
                                    </Col>                                
                                </Row>
                                <Row className="form-group">                                   
                                    <Col md={{size:7,offset:3}}>
                                        <Button type="submit" color="primary" text="Submit" > Submit </Button>
                                    </Col>                                
                                </Row>
                            </Form>
                            </div>
                    </div>
                </div>
                </StyleRoot>
        );
    }
}

export default Contact;