import React, {Component} from 'react';
import {fetchTweetsByUsername} from "../actionCreators";
import { connect } from "react-redux";
import Button from "./button";
import Input from "./input";
class GetTweetsByUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            screen_name:''
        }
    }

    submit=()=>{
        const url ='http://localhost:5000/tweets/' + this.state.screen_name;
        this.props.dispatch(fetchTweetsByUsername(url))
    };

    onChange=(e)=> this.setState({[e.target.name]:e.target.value});


    render() {

        const {screen_name}=this.state;

        return (
            <div>


                <Input type='text' value={screen_name} onchange={(e)=>this.onChange(e)} placeholder='please enter screen_name' name='screen_name' />
                <Button onclick={this.submit} text="show twittes"/>
            </div>
        );
    }
}

GetTweetsByUser.propTypes = {};

export default connect()(GetTweetsByUser);

