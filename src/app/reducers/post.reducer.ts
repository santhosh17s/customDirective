import { Post } from "../models/post.model";
import * as PostAction from '../action/post.action';


export type Action = PostAction.All;

const DefaultState: Post = {
    title : 'Hello World',
    likes: 0
}

const newState = (state, newState ) => {
    return Object.assign({}, state, newState)
}

export function PostReducer(state: Post = DefaultState, action:Action){
    
    console.log("POST:", state);
    
    switch(action.type){

        case PostAction.EDIT_TEXT:
            return newState(state, {text: action.payload });
         
        case PostAction.UPVOTE:
            return newState(state, {likes: state.likes + 1});
            
        case PostAction.DOWNVOTE:
            return newState(state, {likes: state.likes - 1});

        case PostAction.RESET:
            return DefaultState;
        
        default:
            return state;


    }

}