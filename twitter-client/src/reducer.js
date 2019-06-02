import {GET_TWEETS_BY_KETWORDS,GET_TWEETS_BY_USERNAME} from'./actionTypes'


export const showTweets = (state=[],action)=> {
    switch (action.type) {
        case GET_TWEETS_BY_KETWORDS:
            return action.payload.statuses

        case GET_TWEETS_BY_USERNAME:
            return action.payload
        default:
            return state;


    }
}



