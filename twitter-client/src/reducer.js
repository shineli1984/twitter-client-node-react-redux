import {GET_TWEETS_BY_KETWORDS,GET_TWEETS_BY_USERNAME,GET_Fav_List} from'./actionTypes'


export const showTweets = (tweets=[],action)=> {
    switch (action.type) {
        case GET_TWEETS_BY_KETWORDS:
            return action.payload.statuses

        case GET_TWEETS_BY_USERNAME:
            return action.payload
        default:
            return tweets;


    }
}

export const favList = (fav=[],action)=> {
    switch (action.type) {
        case  GET_Fav_List:
            return action.payload
        default:
            return fav;


    }
}



