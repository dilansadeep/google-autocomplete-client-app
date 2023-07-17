export const FETCH_FULFILLED = "FETCH_FULFILLED";
export const SET_STATUS = "SET_STATUS";
export const FETCH_PLACES = "FETCH_PLACES";
export const FETCH_FAILED = "FETCH_FAILED";
export const RESET = "RESET";

export const fetchFulfilled = (places) => {
  return {
    type: FETCH_FULFILLED,
    payload: places,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};

export const fetchPlaces = (input) => {
  return {
    type: FETCH_PLACES,
    payload: input,
  };
};

export const fetchFailed = (message) => {
  return {
    type: FETCH_FAILED,
    payload: message,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
