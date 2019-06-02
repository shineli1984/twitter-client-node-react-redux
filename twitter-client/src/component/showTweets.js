import React from 'react';
import AddLike from "./addLike";
import { connect } from "react-redux";

const ShowTweets=(props)=>{

        return (

            <ul className="show-tweents">
                {props.tweets.map((tweet)=>

                    <li key={tweet.id}><p>{tweet.text}</p>
                        <AddLike id={tweet.id_str}/>
                    </li>)

                }

            </ul>
        );

};

const mapStateToProps = (state)=> ({
    tweets: state

});

export default connect(mapStateToProps)(ShowTweets);



