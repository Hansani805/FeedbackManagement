import React from 'react';
import { Component } from "react";
//import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './feedbacklist.css';


const Feedback = props =>(
    <tr>
        <td className={props.feedback.feedback_completed ? 'completed' :''}>{props.feedback.feedback_guestid}</td>
        <td className={props.feedback.feedback_completed ? 'completed' :''}>{props.feedback.feedback_guestname}</td>
        <td className={props.feedback.feedback_completed ? 'completed' :''}>{props.feedback.feedback_emailaddress}</td>
        <td className={props.feedback.feedback_completed ? 'completed' :''}>{props.feedback.feedback_telephonenumber}</td>
        <td className={props.feedback.feedback_completed ? 'completed' :''}>{props.feedback.feedback_priority}</td>
        <td className={props.feedback.feedback_completed ? 'completed' :''}>{props.feedback.feedback_typeid}</td>
        <td className={props.feedback.feedback_completed ? 'completed' :''}>{props.feedback.feedback_comment}</td>
        <td>
            <Link className="edit" to={"/edit/"+props.feedback._id}>Edit</Link>
            
        </td>
        <td>
            
            <Link className="delete"  to={"/delete/"+props.feedback._id}>Delete</Link>
        </td>



    </tr>


)

class Feedbacklist extends Component {

        constructor(props){
            super(props);
            this.state={feedback:[]};
        }

        componentDidMount(){
            axios.get('http://localhost:4000/feedback/')
                .then(response=>{
                    this.setState({feedback:response.data});
                })
                .catch(function(error){
                    console.log(error);
                })


        }


        feedbackList(){
            return this.state.feedback.map(function(currentFeedback,i){
                return <Feedback feedback={currentFeedback}key={i}/>;

            });


        }



    render() {
        return (
            <div>
                 <h1>Feedback List</h1>
            
            <table border="1" className="table table-striped" style={{marginTop:20}}>
                <thead className="thead-dark">
                   
                    <tr>
                       
                        <th>Guest ID</th>
                        <th>Guest Name</th>
                        <th>Email Address</th>
                        <th>Telephone Number</th>
                        <th>Feedback Type</th>
                        <th>Feedback Type ID</th>
                        <th>Comments or Suggestion</th>
                        <th colSpan="2">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                     {this.feedbackList()}
                    
                    
                </tbody>
            </table>

            </div>

        );
    }
}

export default Feedbacklist;





