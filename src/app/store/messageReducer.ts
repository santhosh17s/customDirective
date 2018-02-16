
import { Action } from '@ngrx/store';

export const TAMIL = 'TAMIL';
export const HINDI = 'HINDI';
export const ENGLISH = 'ENGLISH';

export function messageReducer( state: string = "English - Hello World!", action:Action) {

    //console.log("State:", state);

    switch(action.type) {
        case TAMIL:
            return state = "Tamil - Vanakkam";
        case HINDI:
            return state = "Hindi - Nameshthey";
        case ENGLISH:
            return state = "English - Nice Day";
        default:  
            return state;       
    }

}