const { combineReducers,createStore,applyMiddleware } = require("redux");
const {createLogger}=require('redux-logger');
const logger=createLogger();

const cakeInitialState ={
    cake:10,
};
const iceCreamInitialState={
    iceCream:20,
};


function buycake(){
    return {
        type:'BUY_CAKE'
    }
}
function buyicecream(){
    return {
        type:'BUY_ICECREAM'
    }

}
function cakeReducer(state=cakeInitialState,action){
    switch(action.type){
         case 'BUY_CAKE':return{
             ...state,
             cake:state.cake-1
         }
        default: return state

    }


}
function iceCreamReducer(state=iceCreamInitialState,action){
    switch(action.type){
          case 'BUY_ICECREAM':return{
              ...state,
              iceCream:state.iceCream-1
          }
          default: return state

    }

}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})
const store=createStore(rootReducer,applyMiddleware(logger));
console.log("INITIAL STATE:",store.getState());
//const unsubscribe=store.subscribe(()=>{console.log("UPDATED STATE:",store.getState())});
const unsubscribe=store.subscribe(()=>{});
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
unsubscribe();
