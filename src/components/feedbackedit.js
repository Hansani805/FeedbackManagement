import React from 'react';
import { Component } from "react";
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import './feedback.css';
import axios from 'axios';

class FeedbackEdit extends Component{
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
        this.onChangeCompleted=this.onChangeCompleted.bind(this);
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

    componentDidMount(){
        axios.get('http://localhost:4000/feedback/'+this.props.match.params.id)
            .then(response=>{
                this.setState({
                    feedback_guestid:response.data.feedback_guestid,
                    feedback_guestname:response.data.feedback_guestname,
                    feedback_emailaddress:response.data.feedback_emailaddress,
                    feedback_telephonenumber:response.data.feedback_telephonenumber,
                    feedback_priority:response.data.feedback_priority,
                    feedback_typeid:response.data.feedback_typeid,
                    feedback_comment:response.data.feedback_comment,
                    feedback_completed:response.data.feedback_completed
                     })

            
            })
            .catch(function(error){
                console.log(error)
            })


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

onChangeCompleted(e){
    this.setState({
        feedback_completed:!this.state.feedback_completed


    });


}

onSubmit(e){
    e.preventDefault();

   
    const obj={
        feedback_guestid:this.state.feedback_guestid,
        feedback_guestname:this.state.feedback_guestname,
        feedback_emailaddress:this.state.feedback_emailaddress,
        feedback_telephonenumber:this.state.feedback_telephonenumber,
        feedback_priority:this.state.feedback_priority,
        feedback_typeid:this.state.feedback_typeid,
        feedback_comment:this.state.feedback_comment,
        feedback_completed:this.state.feedback_completed
    }

    axios.post('http://localhost:4000/feedback/update/'+this.props.match.params.id,obj)
        .then(res=>console.log(res.data));

     this.props.history.push('/');   

}





    render(){
        return(
            <div>
                        <h1>Update Feedback Form</h1>
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

                                <Form.Check
                                        type="checkbox"
                                        name="completedCheckbox"
                                        id="completedCheckbox"
                                        label="Completed"
                                        onChange={this.onChangeCompleted}
                                        checked={this.state.feedback_completed}
                                        value={this.state.feedback_completed}
                                       
                                        />


                                
                            
                                <Form.Group as={Row}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                <Button type="submit" className="btn"> Update Feedback </Button>
                                </Col>
                                </Form.Group>



                        
                            </Form>
                </div>
                
                
                );
            }
        }

export default FeedbackEdit;