// this is were all the data stores
export const initialState={
    basket: {},
}


function Reducer(state, action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item to basket 
            break;
        case 'REMOVE_ITEM_FROM_BASKET':
        // Logic to remove item from Basket 
            break;
        default:
            return state;
        

    }
}

export default Reducer
// 