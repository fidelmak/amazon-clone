// this is were all the data stores
export const initialState={
    basket:[{
        id:"3",
        title:"new age",
        price:598.99,
        rating: 4,
        images:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"


    }],
    user:null
}


function Reducer(state, action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item to basket 
            return {
                ...state,
                basket: [...state.basket, action.item],
            
            };
          
        case 'REMOVE_ITEM_FROM_BASKET':
        // Logic to remove item from Basket 
            return {...state}
          
        default:
            return state;
        

    }
}

export default Reducer
// 