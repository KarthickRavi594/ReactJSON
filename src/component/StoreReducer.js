
export const CounterReducer = (count=0,action) => {
    console.log('Action -> ',action);
        switch (action.type) {
            case 'INCREMENT':
                // let incrementValue = parseInt(action.count_Value);
                return parseInt(action.count_Value) + 1;
            case 'DECREMENT':
                return parseInt(action.count_Value) - 1;
            default:
                return action.count_Value;
        }
    }