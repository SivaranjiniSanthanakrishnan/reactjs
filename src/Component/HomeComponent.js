import React from 'react';
import {Card, CardImg, CardText, CardBody, CardSubtitle, CardTitle} from 'reactstrap'
import { isTemplateElement } from '@babel/types';
import {Loading} from './LoadingComponent'
import * as Actiontypes from './Redux/Actiontypes';
import { FadeTransform } from 'react-animation-components';

function RenderData({data,isLoad,errMsg}){
   if(isLoad==true){
       return(
        <Loading></Loading>
       )
   }else if (errMsg!=null){
       return(
       {errMsg}
       )
   }else if (data!=null){
    return(    
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <Card>
            <CardImg src={Actiontypes.BASE_URL+ data.image}></CardImg>
            <CardBody>
                <CardTitle>{data.name}
                {data.designation ? <CardSubtitle>{data.designation}</CardSubtitle> : null }
                </CardTitle>
                <CardText>{data.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>           
    )
   }
}

function HomeComponent (props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <RenderData data={props.dishes} isLoad={props.isLoad} errMsg={props.errMsg}></RenderData>
                </div>
                <div className="col-md-4">
                    <RenderData data={props.promotions} isLoad={props.isLoad} errMsg={props.errMsg}></RenderData>
                </div>
                <div className="col-md-4">
                    <RenderData data={props.leaders} isLoad={props.isLoad} errMsg={props.errMsg}></RenderData>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;