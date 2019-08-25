import React,{Component} from 'react';
import MenuComponent from './MenuComponent'
import Dishdetail from './DishdetailComponent'
import HeaderComponent from './HeaderComponent'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import HomeComponent from './HomeComponent';
import Contact from './ContactusComponent'
import {connect} from 'react-redux'
import FeedbackComponent from './FeedbackComponent';
import { postComment, displaydishes, displaycomments, displayleaders, displaypromos} from './Redux/Actioncreators';
import {actions} from 'react-redux-form'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps= state =>{
    return{
      dishes:state.dishes,
      leaders:state.leaders,
      promotions: state.promotions,
      comments: state.comments
    }
}

const mapDispatchtoProps = (dispatch)=>({
  postComment :(dishId , rating , author, comment)=> dispatch(postComment(dishId , rating , author, comment)),
  displaydishes:()=>dispatch(displaydishes()),
  resetFeedbackForm:()=>dispatch(actions.reset('feedback')),
  displaycomments :()=>dispatch(displaycomments()),
  displayleaders : ()=>dispatch(displayleaders()),
  displaypromos :()=>dispatch(displaypromos())
})


class MainComponent extends Component{
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    
    this.props.displaydishes();
    this.props.displaycomments();
    this.props.displayleaders();
    this.props.displaypromos();
  }

  render(){    
    return (
      <div className="App">  
      <HeaderComponent/>
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
      <Switch>

          <Route path="/home" component={()=>
          <HomeComponent dishes={this.props.dishes.dishes.filter((dish)=>dish.featured==true)[0]}
           isLoad={this.props.dishes.isLoad}  errMsg={this.props.dishes.errMsg}
           leaders={this.props.leaders.leaders.filter((leader)=>leader.featured==true)[0]}
           isLoad={this.props.leaders.isLoad}  errMsg={this.props.leaders.errMsg}
           promotions={this.props.promotions.promos.filter((promotion)=>promotion.featured==true)[0]}
           isLoad={this.props.promotions.isLoad}  errMsg={this.props.promotions.errMsg}
           />}></Route>      

          <Route exact path="/menu" component={()=><MenuComponent  dishes={this.props.dishes.dishes} 
          isLoad={this.props.dishes.isLoad}  errMsg={this.props.dishes.errMsg}></MenuComponent>} />
          
          <Route exact path="/menu/:id" component={({match})=> <Dishdetail selecteddish={this.props.dishes.dishes.filter((dish) => dish.id ==match.params.id)[0]}  
          isLoad={this.props.dishes.isLoad}  errMsg={this.props.dishes.errMsg}
          comments={this.props.comments.comments.filter((comment)=>comment.dishId == match.params.id)}
          postComment={this.props.postComment}></Dishdetail> } />

          <Route exact path="/feedback" component={()=><FeedbackComponent ></FeedbackComponent>} />

          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}  />} />

          <Redirect to="/home"></Redirect>

      </Switch>
      </CSSTransition>
      </TransitionGroup>
      </div>
    );
  } 
}

export default withRouter(connect(mapStateToProps,mapDispatchtoProps)(MainComponent));
