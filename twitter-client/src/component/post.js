import React, {Component} from 'react';
import Button from "./button";


class Post extends Component {

    constructor(props){
        super(props);
        this.state = {
            comment:''
        }
    }

    submit=()=> {
        const url = 'http://localhost:5000/comment/'


        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: this.state.comment
            })
        })
    }

onChange=(e)=> this.setState({[e.target.name]:e.target.value});

    render() {
        const {comment}=this.state;
        return (
            <div>
                <textarea value={comment} onChange={(e)=>this.onChange(e)} rows="3"  name='comment' placeholder='please enter here' >
                </textarea><br/>
                <Button onclick={this.submit} text="submit"/>
            </div>
        );
    }
}


export default Post;