import React, {Component} from 'react';
import {fetchTweetsByKeyword} from "../actionCreators";
import { connect } from "react-redux";
import Button from "./button";
import Input from './input';
class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            search:''
        }
    }

    submit=()=>{
        const searchApiURL=`${process.env.REACT_APP_BASE_URL}tweets/search/${this.state.search}`;
        this.props.fetchTweetsByKeyword(searchApiURL)
    };

    onChange=(e)=> this.setState({[e.target.name]:e.target.value});

    render() {
        const {search}=this.state;
        return (
            <div>

                <Input type='text' value={search} onchange={(e)=>this.onChange(e)} placeholder='please enter keywords' name='search' />
                <Button onclick={this.submit} text="search"/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        fetchTweetsByKeyword:(url)=>dispatch( fetchTweetsByKeyword(url)),

    }
};



export default connect(null,mapDispatchToProps)(Search);