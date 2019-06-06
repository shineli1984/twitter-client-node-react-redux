import React,{Component} from 'react';
import {fetchFavorateList} from "../actionCreators";
import {connect} from "react-redux";
class AddLike extends Component {

    constructor(props){
        super(props);
        this.state = {
            like:""
        }
    }



    toggle=async ()=>{

        let url1='';
        this.state.like?
            url1 = 'http://localhost:5000/tweets/favorites/destroy/':
            url1 = 'http://localhost:5000/tweets/favorites/create/';

          url1=url1+this.props.id;
            await fetch(url1, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.props.id
                })
            })
        this.setState({state:!this.state.like})

        };


render(){
    this.setState({like:this.props.fav});

    return (
        <div>
            <button className={this.state.like ? 'like' : 'unlike'} onClick={this.toggle}>{this.state.like ? 'like' : 'add to like'} </button>
        </div>
    )

}
    }


export default connect()(AddLike);