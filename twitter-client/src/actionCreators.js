import {GET_TWEETS_BY_KETWORDS,GET_TWEETS_BY_USERNAME} from'./actionTypes'


export const getTweetsByKeyword=(data)=>({
    type:GET_TWEETS_BY_KETWORDS,
    payload:data

})

export const getTweetsByUsername=(data)=>({
    type:GET_TWEETS_BY_USERNAME,
    payload:data

})


export const fetchTweetsByKeyword= (url)=>{
    return (dispatch)=>{
        fetch( url )
            .then( res=>res.json() )
            .then( data=>{
                dispatch( getTweetsByKeyword(data) )
            } )
    }
}

export const fetchTweetsByUsername= (url)=>{
    return (dispatch)=>{
        fetch( url )
            .then( res=>res.json() )
            .then( data=>{
                dispatch( getTweetsByUsername(data) )
            } )
    }
}