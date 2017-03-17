import { createStore } from 'redux';

export function addCity(city){
    return {
        type: "addCity",
        city
    }
}

export function removeCity(city){
    return {
        type: "removeCity",
        city
    }
}

const initialState = {
    cities: []
};


function cityState(state=initialState, action){
    switch(action.type){
        case "addCity":
            if (state.cities.includes(action.city)){
                return state;
            }
            return Object.assign({}, {
                cities:[
                    ...state.cities,action.city
                ]
            });
        case "removeCity":
            return Object.assign({}, {
                cities: state.cities.filter(function(i){
                        return i !== action.city
                    })                
                
            });
            
    }

    return state;
}

export let store = createStore(cityState);


