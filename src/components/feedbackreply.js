import React from 'react';
import { Component } from "react";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './feedback.css';
import axios from 'axios';
import StarRatings from 'react-star-ratings';


class FeedbackReply extends Component {
    constructor(props) {
        super(props);

        this.onChangeGuestId = this.onChangeGuestId.bind(this);
        this.onChangeGuestName = this.onChangeGuestName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeTelephoneNumber = this.onChangeTelephoneNumber.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onChangeFeedbackPriority = this.onChangeFeedbackPriority.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            feedback_guestid: '',
            feedback_guestname: '',
            feedback_emailaddress: '',
            feedback_telephonenumber: Number,
            feedback_date:Date,
            feedback_priority: '',
            feedback_comment: '',
            feedback_completed: false

        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/feedback/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    feedback_guestid: response.data.feedback_guestid,
                    feedback_guestname: response.data.feedback_guestname,
                    feedback_emailaddress: response.data.feedback_emailaddress,
                    feedback_telephonenumber: response.data.feedback_telephonenumber,
                    feedback_date:response.data.feedback_date,
                    feedback_priority: response.data.feedback_priority,
                    feedback_comment: response.data.feedback_comment,
                    feedback_completed: response.data.feedback_completed
                })


            })
            .catch(function (error) {
                console.log(error)
            })


    }

    onChangeGuestId(e) {
        this.setState({
            feedback_guestid: e.target.value

        });

    }

    onChangeGuestName(e) {
        this.setState({
            feedback_guestname: e.target.value

        });

    }

    onChangeEmailAddress(e) {
        this.setState({
            feedback_emailaddress: e.target.value

        });

    }

    onChangeTelephoneNumber(e) {
        this.setState({
            feedback_telephonenumber: e.target.value

        });

    }


    onChangeDate(e){
        this.setState ({
         feedback_date:e.target.value
    
         });
    
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }

  

    onChangeFeedbackPriority(e) {
        this.setState({
            feedback_priority: e.target.value

        });

    }


    onChangeComment(e) {
        this.setState({
            feedback_comment: e.target.value

        });

    }

  

    onChangeCompleted(e) {
        this.setState({
            feedback_completed: !this.state.feedback_completed


        });


    }

    onSubmit(e) {
        e.preventDefault();


        const obj = {
            feedback_guestid: this.state.feedback_guestid,
            feedback_guestname: this.state.feedback_guestname,
            feedback_emailaddress: this.state.feedback_emailaddress,
            feedback_telephonenumber: this.state.feedback_telephonenumber,
            feedback_date:this.state.feedback_date,
            feedback_priority: this.state.feedback_priority,
            feedback_comment: this.state.feedback_comment,
            feedback_completed: this.state.feedback_completed
        }

        axios.post('http://localhost:4000/feedback/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');

    }





    render() {
        return (
            <div>
                <h1>Reply Feedback Form</h1>
                <br />
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
                            <br />


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
                            <br />

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
                            <br />



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
                            <br />


                    <Form.Label >
                                Date : 
                                </Form.Label>
                                <Col sm={20}>
                                <Form.Control 
                                type="date" 
                                placeholder="dd/mm/yyyy" 
                                id="date" 
                                value={this.state.feedback_date}
                                onChange={this.onChangeDate} 
                                />
                                </Col>
                                <br/>



                             <fieldset>


                                <Form.Label>
                                        Rate: 
                                    </Form.Label>
                            
                                    
                                    
                                        <Form.Check
                                        type="radio"
                                        name="priorityOptions"
                                        id="priority_Review_of_Property"
                                        value="Review_of_Property"
                                        label="Review of Property"
                                        checked={this.state.feedback_priority==='Review_of_Property'}
                                        onChange={this.onChangeFeedbackPriority}
                                        />
                                        <br/>

                                        <StarRatings className="star"
                                        starRatedColor=""
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="40px"
                                        starSpacing="15px"
                                        rating={this.state.rating}
                                        changeRating={this.changeRating}

                                        />
                                        <br/>
                                        <br/>

                                    
                                    
                                       
                                        
                                        <Form.Check
                                        type="radio"
                                        name="priorityOptions"
                                        id="priority_Review_of_Owner"
                                        value="Review_of_Owner"
                                        label="Review of Owner"
                                        checked={this.state.feedback_priority==='Review_of_Owner'}
                                        onChange={this.onChangeFeedbackPriority}
                                        />
                                        <br/>

                                        <StarRatings className="star"
                                        starRatedColor=""
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="40px"
                                        starSpacing="15px"
                                        rating={this.state.rating}
                                        changeRating={this.changeRating}
                                        />

                            
                            </fieldset>
                            <br />
                            <br />


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
                    <br />

                    <Form.Label>
                        Reply :
                                </Form.Label>
                    <Col sm={20}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Reply.............."
                            id="reply"
                            

                        />
                    </Col>
                    <br />

                   

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

export default FeedbackReply;