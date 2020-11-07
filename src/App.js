import React from 'react';
import { Component } from "react";
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Feedback from './components/feedback';
import image from './image.jpeg';
import monstera from './monstera.jpeg';
import Feedbacklist from './components/feedbacklist';
import FeedbackEdit from './components/feedbackedit';


class App extends Component {
  render(){
  return (
    <Router>
      <div style={{backgroundImage: `url(${image})` }}>
            <div className="row">
                <div className="col-md-3">
                  </div>
                    <div className="col-md-6">
                    <Route path="/" exact component={Feedback}/>
                    </div>
                    <div className="col-md-3">
                </div>
   
            </div>
        </div>
        <div style={{backgroundImage: `url(${monstera})`}}>
          <div className="row">
              <div className="col-md-1">
                </div>
                  <div className="col-md-10">
                  <Route path="/view" exact component={Feedbacklist}/>
                  </div>
                  <div className="col-md-1">
               </div>
              </div>
          </div>
          <div style={{backgroundImage: `url(${image})`}}>
          <div className="row">
              <div className="col-md-3">
                </div>
                  <div className="col-md-6">
                  <Route path="/edit/:id" exact component={FeedbackEdit}/>
                  </div>
                  <div className="col-md-3">
               </div>
              </div>
          </div>

    </Router>
    
  );
 }
}

export default App;
