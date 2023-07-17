export const FETCH_MARKER_FULFILLED = "FETCH_MARKER_FULFILLED";
export const SET_MARKER_STATUS = "SET_MARKER_STATUS";
export const FETCH_MARKER = "FETCH_MARKER";
export const FETCH_MARKER_FAILED = "FETCH_MARKER_FAILED";

export const fetchFulfilled = (marker) => {
  return {
    type: FETCH_MARKER_FULFILLED,
    payload: marker,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_MARKER_STATUS,
    payload: status,
  };
};

export const fetchMarker = (input) => {
  return {
    type: FETCH_MARKER,
    payload: input,
  };
};

export const fetchFailed = (message) => {
  return {
    type: FETCH_MARKER_FAILED,
    payload: message,
  };
};