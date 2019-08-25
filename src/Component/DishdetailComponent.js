import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button,Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom'
import {LocalForm, Errors, Control } from 'react-redux-form'
import {Loading} from './LoadingComponent'
import * as Actiontypes from './Redux/Actiontypes';
import {FadeTransform, Stagger, Fade}from 'react-animation-components'

class Dishdetail extends Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false
        }
        this.togglemodal=this.togglemodal.bind(this);
    }

    togglemodal(evt){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    onsubmit(value){      
        
        this.props.postComment(this.props.selecteddish.id, value.points , value.name, value.comments);
            
    }


    render(){
        const required= (val)=> val;
        const maxlength = (len) => (val) => !(val) || val.length<=len;
        const minlength = (len) => (val) => !(val) || val.length>=len;

        
        // var rendercomment = this.props.comments.map((cmnt) => {        
        //     if(cmnt.dishId==this.props.selecteddish.id){
        //         return (
        //             <Stagger in>
        //                 <Fade in>
        //                     <div>--  {cmnt.comment}</div>
        //                 </Fade>
        //             </Stagger>
        //         );
        //     }
        // });   
        
        var rendercomment = {
            
        }

    if(this.props.isLoad==true){
        return(
            <Loading></Loading>
        )
    }else if (this.props.errMsg!=null){
        return(
        <div>{this.props.errMsg}</div>
        )
    }else if(this.props.selecteddish!=null){  
              
            return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                            <BreadcrumbItem> <Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active> { this.props.selecteddish.name} </BreadcrumbItem>
                        </Breadcrumb>
                </div>

                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                
                <Card>
                    <CardImg  src={Actiontypes.BASE_URL+ this.props.selecteddish.image} alt={this.props.selecteddish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.selecteddish.name}</CardTitle>
                        <CardText>{this.props.selecteddish.description}</CardText>
                    </CardBody>
                </Card>                
                </FadeTransform>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h5>Comments</h5>                         
                     <Stagger in>
                        {this.props.comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
                </div>  
                </div>

                <Button onClick={this.togglemodal}>Submit Feedback</Button>

                <Modal isOpen={this.state.isOpen} toggle={this.togglemodal}>
                    <ModalHeader>
                        Submit Your Feedback!!!
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.onsubmit(values)}>
                            <Row className="form-group">                        
                                <Label md={3}>
                                    Points
                                </Label>                        
                                <Col md={7} >                                
                                    <Control.select model=".points" name="points" id="points" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>                                
                                </Col>                       
                            </Row>
                            <Row className="form-group" >
                                <Label md={3}>
                                    Name
                                </Label>
                                <Col md={5}>
                                    <Control.text model=".name" id="name" name="name" validators={{required, maxlength:maxlength(10), minlength:minlength(3)}}/>
                                    <Errors className="text-danger" show="touched" model=".name" 
                                    messages={{required:"Name is required", maxlength:"Should be max of 10", minlength:"Should be min of 3"}}></Errors>                                
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label md={3}>
                                    Comments
                                </Label>
                                <Col md={5}>
                                    <Control.textarea  model=".comments" id="comments" name="comments">

                                    </Control.textarea>
                                </Col>
                            </Row>

                            <Row className="form-group container">
                                <Button type="submit">Submit</Button>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            );
        }else{
            return(
                <div></div>
            )                
        }
    
}
}

export default Dishdetail;