export default function reducer(state={
    carsWashed: [],
    all_fetching: false,
    all_fetched: false,
    all_fetch_error: null,
}, action){
    switch (action.type){
        case "FETCH_ALL": {
            return {
                ...state,
                carsWashed: [],
                all_fetching:true,
                all_fetched:false,
                all_fetch_error:null
            }
        }
        case "FETCH_ALL_FULFILLED": {
            return {
                ...state,
                carsWashed: action.payload,
                all_fetching:false,
                all_fetched:true,
                all_fetch_error:null
            }
        }
        case "FETCH_ALL_ERROR": {
            return {
                ...state,
               // carsWashed:[],
                all_fetching:false,
                all_fetched:false,
                all_fetch_error:action.error
            }
        }
    }
    return state
}