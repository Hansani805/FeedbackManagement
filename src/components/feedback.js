import React from 'react';
import { Component } from "react";
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import './feedback.css';
import axios from 'axios';

class Feedback extends Component{
    constructor(props){
        super(props);

        this.onChangeGuestId = this.onChangeGuestId.bind(this);
        this.onChangeGuestName =this.onChangeGuestName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeTelephoneNumber=this.onChangeTelephoneNumber.bind(this);
        //this.onChangeFeedbackType = this.onChangeFeedbackType.bind(this);
        this.onChangeFeedbackPriority=this.onChangeFeedbackPriority.bind(this);
        this.onChangeFeedbackTypeId=this.onChangeFeedbackTypeId.bind(this);
        this.onChangeComment=this.onChangeComment.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
                feedback_guestid:'',
                feedback_guestname:'',
                feedback_emailaddress:'',
                feedback_telephonenumber:Number,
                //feedback_type:'',
                feedback_priority:'',
                feedback_typeid:'',
                feedback_comment:'',
                feedback_completed:false

        }



    }

  onChangeGuestId(e){
        this.setState ({
            feedback_guestid:e.target.value

         });

  }

  onChangeGuestName(e){
    this.setState ({
        feedback_guestname:e.target.value

     });

}

onChangeEmailAddress(e){
    this.setState ({
        feedback_emailaddress:e.target.value

     });

}

onChangeTelephoneNumber(e){
    this.setState ({
       feedback_telephonenumber:e.target.value

     });

}

/*onChangeFeedbackType(e){
    this.setState ({
       feedback_type:e.target.value

     });

}*/

onChangeFeedbackPriority(e){
    this.setState ({
       feedback_priority:e.target.value

     });

}

onChangeFeedbackTypeId(e){
    this.setState ({
       feedback_typeid:e.target.value

     });

}

onChangeComment(e){
    this.setState ({
      feedback_comment:e.target.value

     });

}

onSubmit(e){
    e.preventDefault();

    console.log(`Form Submitted:`);
    console.log(`Guest Id: ${this.state.feedback_guestid}`);
    console.log(`Guest Name: ${this.state.feedback_guestname}`);
    console.log(`Email Address: ${this.state.feedback_emailaddress}`);
    console.log(`Telephone Number: ${this.state.feedback_telephonenumber}`);
   // console.log('Feedback Type: ${this.state.feedback_type}');
    console.log(`Feedback Priority: ${this.state.feedback_priority}`);
    console.log(`Feedback TypeId: ${this.state.feedback_typeid}`);
    console.log(`Comment: ${this.state.feedback_comment}`);
    console.log(`Feedback Completed: ${this.state.feedback_completed}`);


    const newFeedback={
        feedback_guestid:this.state.feedback_guestid,
        feedback_guestname:this.state.feedback_guestname,
        feedback_emailaddress:this.state.feedback_emailaddress,
        feedback_telephonenumber:this.state.feedback_telephonenumber,
        feedback_priority:this.state.feedback_priority,
        feedback_typeid:this.state.feedback_typeid,
        feedback_comment:this.state.feedback_comment,
        feedback_completed:this.state.feedback_completed
    }

    axios.post('http://localhost:4000/feedback/add',newFeedback)
        .then(res=>console.log(res.data));




    this.setState ({
                feedback_guestid:'',
                feedback_guestname:'',
                feedback_emailaddress:'',
                feedback_telephonenumber:'',
                //feedback_type:'',
                feedback_priority:'',
                feedback_typeid:'',
                feedback_comment:'',
                feedback_completed:false
      
     });

}





    render(){
        return(
            <div>
                        <h1>Feedback Submit Form</h1>
                        <br/>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Label>
                                Guest ID :
                                </Form.Label>
                                <Col sm={20}>
                                <Form.Control 
                                type="guestid" 
                                placeholder="Guest ID" 
                                id="gid" 
                                value={this.state.feedback_guestid}
                                onChange={this.onChangeGuestId}
                                />
                                </Col>
                                <br/>

                               
                                <Form.Label>
                                Guest Name :
                                </Form.Label>
                                <Col sm={20}>
                                <Form.Control 
                                type="guestname"
                                 placeholder="Guest Name"  
                                 id="gname"
                                 value={this.state.feedback_guestname}
                                 onChange={this.onChangeGuestName}
                                 
                                 />
                                </Col>
                                <br/>
                        
                                <Form.Label>
                                Email Address :
                                </Form.Label>
                                <Col sm={20}>
                                <Form.Control type="email" 
                                placeholder="Email"  
                                id="eaddress"
                                value={this.state.feedback_emailaddress}
                                onChange={this.onChangeEmailAddress}
                                />
                                </Col>
                                <br/>

                                <Form.Label >
                                Telephone Number : 
                                </Form.Label>
                                <Col sm={20}>
                                <Form.Control 
                                type="telnumber" 
                                placeholder="Telephone Number" 
                                id="telno" 
                                value={this.state.feedback_telephonenumber}
                                onChange={this.onChangeTelephoneNumber}
                                
                                />
                                </Col>
                                <br/>

                            
                                <fieldset>
                            
                                    <Form.Label>
                                        Feedback Type : 
                                    </Form.Label>
                                    
                                        <Form.Check
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityAbout_Accommodation"
                                        value="About_Accommodation"
                                        label="About_Accommodation"
                                        checked={this.state.feedback_priority==='About_Accommodation'}
                                        onChange={this.onChangeFeedbackPriority}
                                        />
                                        <br/>
                                       
                                        
                                        <Form.Check
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityAbout_owner"
                                        value="About_owner"
                                        label="About_owner"
                                        checked={this.state.feedback_priority==='About_owner'}
                                        onChange={this.onChangeFeedbackPriority}
                                        />
                                        <br/>
                                        

                                        <Form.Check
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityOthers"
                                        value="Others"
                                        label="Others"
                                        checked={this.state.feedback_priority==='Others'}
                                        onChange={this.onChangeFeedbackPriority}
                                        />
                                        
                            
                                </fieldset>
                                <br/>

                        
                                <Form.Label >
                                Feedback Type ID : 
                                </Form.Label>
                                <Col sm={20}>
                                <Form.Control 
                                type="fedid" 
                                placeholder="Feedback Type ID" 
                                id="ftid" 
                                value={this.state.feedback_typeid}
                                onChange={this.onChangeFeedbackTypeId}
                                
                                />
                                </Col>
                                <br/>
                        
                                <Form.Label>
                                Feel free to add any other comments or suggestion :
                                </Form.Label>
                                <Col sm={20}>
                                <Form.Control 
                                as="textarea" 
                                rows={3}  
                                placeholder="comments.............." 
                                id="comment"
                                value={this.state.feedback_comment}
                                onChange={this.onChangeComment}
                                
                                />
                                </Col>
                                <br/>
                                
                            
                                <Form.Group as={Row}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                <Button type="submit" className="btn"> Submit </Button>
                                </Col>
                                </Form.Group>

                        
                            </Form>
                </div>
                
                
                );
            }
        }

export default Feedback;