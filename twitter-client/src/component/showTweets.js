import React from 'react';
import AddLike from "./addLike";
import { connect } from "react-redux";

const ShowTweets=(props)=>{

    const isfav=(fav,tweet)=>{
        return fav.id_str===tweet.id_str;

    }

    props.tweets.map((tweet)=>{ tweet.fav=props.favList.some((fav)=>isfav(fav,tweet))})
    console.log(  props.tweets)

        return (

            <ul className="show-tweets">
                {props.tweets.map((tweet)=>

                    <li key={tweet.id}><p>{tweet.text}</p>
                        <AddLike id={tweet.id_str} fav={tweet.fav} screen_name={tweet.screen_name}/>
                    </li>)

                }

            </ul>
        );

};

const mapStateToProps = (state)=> ({
    tweets: state.showTweets,
    favList:state.favList

});

export default connect(mapStateToProps)(ShowTweets);



