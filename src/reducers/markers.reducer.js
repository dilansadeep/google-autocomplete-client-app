import * as actions from "../actions/markers.actions";

const initialState = {
  data: [],
  center: { lat: 44, lng: -80 },
  status: "idle",
};

const markersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MARKER_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case actions.FETCH_MARKER_FULFILLED: {
      const { center, data } = state;
      let formttedData = data;
      let centerLoc = center;
      if (
        Array.isArray(action?.payload?.results) &&
        action.payload.results.length > 0
      ) {
        const {
          results: [resultsData],
        } = action?.payload;

        const geolocation = resultsData?.geometry?.location;

        if (geolocation) {
          formttedData = [
            ...state.data,
            {
              description: resultsData?.formatted_address,
              placeId: resultsData?.place_id,
              geoCodes: geolocation,
            },
          ];
          centerLoc = geolocation;
        }
      }

      return {
        ...state,
        status: "success",
        data: formttedData || [],
        center: centerLoc,
        message: "",
      };
    }
    case actions.FETCH_MARKER_FAILED: {
      return {
        ...state,
        status: "failure",
        message: action.payload,
      };
    }
    default:
      return state;
  }
};

export default markersReducer;
