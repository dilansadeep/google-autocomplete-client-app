import * as actions from "../actions/places.actions";

const initialState = {
  data: [],
  status: "idle",
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case actions.FETCH_FULFILLED: {
      return {
        ...state,
        status: "success",
        data: action.payload,
        message: "",
      };
    }
    case actions.FETCH_FAILED: {
      return {
        ...state,
        status: "failure",
        message: action.payload,
      };
    }
    case actions.RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default placeReducer;
