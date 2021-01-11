
export const initialState = [{
    name: 'Brainy',
    age: 200,
    height: '5cm',
    id: Date.now(),
    loading: false,
    error: ''
}]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_SMURF":
            console.log('loading smurf data');
            return {
                ...state,
                loading: true
            };
        case "LOADING_SMURF_SUCCESS":
            return {
                ...state,
                name: action.payload,
                loading: false
            };
        case "ADDING_SMURF":
            return {
                ...state,
                name: action.payload,
                age: action.payload,
                height: action.payload
            };
        case "ERROR_LOADING_SMURF":
            return {
                ...state,
                error: action.payload,
                loaing: false,
            };
        default:
            return state;
    }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary