import React,{Component} from 'react';
import {Modal, ModalHeader, ModalBody, Label, Row, Col, Input} from 'reactstrap'
import {LocalForm, Errors, Control } from 'react-redux-form'

class FeedbackComponent extends Component{
    constructor(props){

        super(props);

        this.state={
            isOpen:false
        }

        this.togglemodal=this.togglemodal.bind(this)
    }
    

    togglemodal(evt){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    componentDidMount(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        return(
            <Modal isOpen={this.state.isOpen} togglemodal={this.togglemodal}>
                <ModalHeader>
                    Submit Your Feedback!!!
                </ModalHeader>
                <ModalBody>
                    <LocalForm>
                        <Row className="form-group">
                            <Label md={3}>
                                Points
                            </Label>
                            <Col md={5}>
                                <Control.select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label md={3}>
                                Name
                            </Label>
                            <Col md={5}>
                                <Control.text >
                                   
                                </Control.text>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label md={3}>
                                Comments
                            </Label>
                            <Col md={5}>
                                <Control.textarea >
                                   
                                </Control.textarea>
                            </Col>
                        </Row>

                    </LocalForm>
                </ModalBody>
            </Modal>
        )
    }
}

export default FeedbackComponent;