import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import {Loading} from './LoadingComponent'
import * as Actiontypes from './Redux/Actiontypes';
import {FadeTransform} from 'react-animation-components'

class MenuComponent extends Component{
    constructor(props){
        super(props);   

        this.state={
            selecteddish : null
        }       
    }    

    
    render(){   
        
            const menu = this.props.dishes.map((dish)=>{
                
                return(
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Link to={`/menu/${dish.id}`}>
                        <Card>                           
                            <CardImg object src={Actiontypes.BASE_URL+ dish.image} alt={dish.name}></CardImg>
                            <CardImgOverlay>
                                <CardTitle >{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>     
                        </Link>   
                        </FadeTransform>                
                    </div>                   
                );
            })
        
            if(this.props.isLoad==true){
                return(
                    <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
                )
            }else if (this.props.errMsg!=null){
                return(
                    <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{this.props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
                )
            }else if(this.props.dishes!=null){  
                return(
                    <div class="container">                        
                        <div class="row">
                        <Breadcrumb>
                                <BreadcrumbItem> <Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active> Menu </BreadcrumbItem>
                            </Breadcrumb>
                        </div>

                        <div class="row">                   
                            {menu}
                        </div>
                        
                    </div>
                );
            }
    }
}

export default MenuComponent;