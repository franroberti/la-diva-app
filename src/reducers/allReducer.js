export default function reducer(state={
    cars: [],
    done: [],
    toDo: [],
    all_fetching: false,
    all_fetched: false,
    all_fetch_error: null,
}, action){
    switch (action.type){
        case "FETCH_ALL": {
            return {
                ...state,
                cars: [],
                done: [],
                toDo: [],
                all_fetching:true,
                all_fetched:false,
                all_fetch_error:null
            }
        }
        case "FETCH_ALL_FULFILLED": {
            return {
                ...state,
                cars: action.payload[2],
                done: action.payload[1],
                toDo: action.payload[0],
                all_fetching:false,
                all_fetched:true,
                all_fetch_error:null
            }
        }
        case "FETCH_ALL_ERROR": {
            return {
                ...state,
                all_fetching:false,
                all_fetched:false,
                all_fetch_error:action.error
            }
        }
    }
    return state
}