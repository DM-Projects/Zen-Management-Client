import {actionCreators} from '../../Actions/Button';

let initialState = {
    isClicked: false
}

const buttonReducer = (state = initialState, action) => {
    switch(action.type){
        case "ALERT_USER":
            alert(action.message);
            return {
                ...state,
                isClicked: !state.isClicked
            }

        default:
            return state;
    }
}

export default buttonReducer;