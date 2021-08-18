const { createStore,applyMiddleware } = require("redux");
const axios=require('axios');
const thunkMiddleWare=require('redux-thunk').default;

const initialState={
    loading:false,
    users:[],
    error:'',
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR='FETCH_USERS_ERROR';

const fetchUsersRequest=()=>{
 return {
          type:FETCH_USERS_REQUEST,

 }

};
const  fetchUsersSuccess=(users)=>{

   return {
    type:FETCH_USERS_SUCCESS,
    payload:users,

   }
};
const fetchUsersError=(error)=>{
    return {
        type:FETCH_USERS_ERROR,
        payload:error,

    }

};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            ...state,
            loading:true,

        }
        case FETCH_USERS_SUCCESS:return{
            ...state,
            users:action.payload,
            loading:false,

        }
        case FETCH_USERS_ERROR:return {
            ...state,
            error:action.payload,

        }
        default: return state
    }
};
const fetchUsers=()=>{
    return function(dispatch){
 dispatch(fetchUsersRequest());
 axios.get('https://jsonplaceholder.typicode.com/users')
 .then(response=>{
   const users=response.data;
   dispatch(fetchUsersSuccess(users));
 })
 .catch(error=>{
     dispatch(FETCH_USERS_ERROR(error.message));

 })
}
};
const store=createStore(reducer,applyMiddleware(thunkMiddleWare));
store.subscribe(()=>{console.log("intial state:",store.getState());});
store.dispatch(fetchUsers());
 