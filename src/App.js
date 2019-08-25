import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import MainComponent from './Component/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './Component/Redux/stateconfig'

const store=configureStore()
class App extends Component{
  constructor(props){
    super(props);    
  }

  render(){
    return (
      <>
      <Provider store={store}>
        <BrowserRouter>
          <div> 
            <MainComponent/>
          </div>
        </BrowserRouter>
      </Provider>
      </>
    );
  }
  
}

export default App;
