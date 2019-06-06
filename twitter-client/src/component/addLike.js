import React from 'react';
import {fetchFavorateList} from "../actionCreators";
import {connect} from "react-redux";
const AddLike =(props)=>{
  const{fav,id,screen_name}=props;

    const toggle=async ()=>{

        let url1='';
        fav?
            url1 = 'http://localhost:5000/tweets/favorites/destroy/':
            url1 = 'http://localhost:5000/tweets/favorites/create/';

          url1=url1+id;
           await fetch(url1, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                })
            })

                 const url2 ='http://localhost:5000/tweets/favorites/list/' + screen_name;
                 props.dispatch(fetchFavorateList(url2))
        };




        return (
            <div>
              <button  className={fav?'like':'unlike'} onClick={toggle}>{fav?'like':'add to like'} </button>
            </div>
        );
    };


export default connect()(AddLike);