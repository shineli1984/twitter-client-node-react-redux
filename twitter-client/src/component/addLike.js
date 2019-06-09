import React from 'react';
import {fetchFavorateList} from "../actionCreators";
import {connect} from "react-redux";
const AddLike =(props)=>{
  const{fav,id,screen_name}=props;

    const toggle=async ()=>{

        let actionURL='';
        fav?
            actionURL= 'http://localhost:5000/tweets/favorites/destroy/':
            actionURL = 'http://localhost:5000/tweets/favorites/create/';

        actionURL=actionURL+id;
           await fetch(actionURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                })
            })

                 const favListURL ='http://localhost:5000/tweets/favorites/list/' + screen_name;
                 props.fetchFavorateList(favListURL)
        };




        return (
            <div>
              <button  className={fav?'like':'unlike'} onClick={toggle}>{fav?'like':'add to like'} </button>
            </div>
        );
    };



const mapDispatchToProps = (dispatch) => {
    return {
        fetchFavorateList:(url)=> dispatch(fetchFavorateList(url))
    }
};



export default connect(null,mapDispatchToProps )(AddLike);