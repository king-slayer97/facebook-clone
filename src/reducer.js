export const initialState = {
    user: null,
    profilePic: null, 
};

export const actionTypes={
    SET_USER: "SET_USER",
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return {...state, user: action.user, profilePic: action.dp};

        default:
            return state;
    }
}

export default reducer;