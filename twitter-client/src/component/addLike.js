import React, {Component} from 'react';
class AddLike extends Component {

    constructor(props) {
        super(props);
        this.state = {
            like: false
        };
    }

    toggle=()=>{
        this.setState({like:!this.state.like},
            ()=>{

        let url='';
        this.state.like?
         url = 'http://localhost:5000/tweets/favorites/create/':
         url = 'http://localhost:5000/tweets/favorites/destroy/';

          url=url+this.props.id;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.props.id
                })
            })

        })

    }



    render() {
        const {like}=this.state;
        return (
            <div>
              <button  className={like?'like':'unlike'} onClick={this.toggle}>{like?'like':'add to like'} </button>
            </div>
        );
    }
}

export default AddLike;