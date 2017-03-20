import { createStore } from 'redux';

const initialState = {
    cities: [],
    celsius: true
};


export function addCity(city){
    return {
        type: "addCity",
        city
    }
};

export function removeCity(city){
    return {
        type: "removeCity",
        city
    }
};

export function celsiusUnit(){
    return{
        type:"celsius"
    }
}

export function fahrenheitUnit(){
    return{
        type:"fahrenheit"
    }
}

function cityState(state=initialState, action){
    switch(action.type){
        case "addCity":
            if (state.cities.includes(action.city)){
                return state;
            }
            return Object.assign({}, {
                cities:[
                    ...state.cities,action.city
                ],
                celsius: state.celsius
            });
        case "removeCity":
            return Object.assign({}, {
                cities: state.cities.filter(function(i){
                        return i !== action.city
                    }),
                    celsius: state.celsius                
                
            });
        case "fahrenheit":
            return Object.assign({},{
                cities:[
                    ...state.cities
                ],
                celsius: false
            });
        case "celsius":
            return Object.assign({},{
                cities:[
                    ...state.cities
                ],
                celsius: true
            });
            
    }

    return state;
}

export let store = createStore(cityState);


