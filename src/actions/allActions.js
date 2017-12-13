import gsjson from 'google-spreadsheet-to-json/index';
import {strings} from "../localization/strings";

/*

export function fetchCars(){

    return function (dispatch) {

        dispatch({type:"FETCH_CARS"});

        gsjson({
            spreadsheetId: '1to_MAFCM20So9gSqZWR6-hV3gPjEFVPvmYiQhW1_1p8',
            worksheet: 'Autos'
        })
        .then((result) => {
            dispatch({type:"FETCH_CARS_FULFILLED",payload: result});
        })
        .catch(function(err) {
            dispatch({type:"FETCH_CARS_ERROR"});
        });
    };
}
*/

export function fetchAll(){
    return function(dispatch){
        dispatch({type: "FETCH_ALL"});
        gsjson({
            spreadsheetId: '10heFucrlOa_MbnDqNKotInRin4zcnYQl-tuwzG6nz8s',
            worksheet: "Lavados"
        })
            .then((result) => {
                dispatch({type:"FETCH_ALL_FULFILLED",payload: result});
            })
            .catch(function(err) {
                dispatch({type:"FETCH_ALL_ERROR"});
            });
    }
}