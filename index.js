const redux=require('redux');
const createStore=redux.createStore;
const initialState={
    cake:10,
    iceCream:20,
};

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';
function buycake(){

    return{
        type:BUY_CAKE,
        info:'cake Bought'
    }
}

function buyicecream(){
    return {
        type:BUY_ICECREAM,

    }
}
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
               case BUY_CAKE:return{
                   ...state,
                     cake:state.cake-1
                  }
               case BUY_ICECREAM:return{
                    ...state,
                    iceCream:state.iceCream-1
                  }
                default:return state  
           }

}
const store=createStore(rootReducer);
console.log("initial State:",store.getState());
store.subscribe(()=>{console.log("updated state:",store.getState())});
store.dispatch(buycake());
store.dispatch(buyicecream());




