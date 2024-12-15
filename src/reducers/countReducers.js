const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPCOUNT": {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case "DOWNCOUNT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "ADD": {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    default:
      return state;
  }
};

export default countReducer;
