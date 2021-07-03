import _ from lodash;

import { GET_TODOS } from "../actions/types";

export default ( state = {}, action ) => {


    const {type,payload} = action;

    switch ( type ) {

        case GET_TODOS: 
            return{

                ...state,
                ..._.mapKeys(payload,'id')
            };
        default:
            return state;

    }

}

// const _ = require("lodash");
  
// // Using the _.mapKeys() method 
// console.log(
//   _.mapKeys({ 'cpp': 15, 'java': 40, 'python': 63 },
//       function(value, key) {
//           return  key + value ;
//   }
// ));

// Output:

// {'cpp15': 15, 'java40': 40, 'python63': 63}