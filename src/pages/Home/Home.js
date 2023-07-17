import React, { useCallback, memo, useState } from "react";
import { connect } from "react-redux";
import Reusable from "../../components";
import * as placesActions from "../../actions/places.actions";
import * as markerActions from "../../actions/markers.actions";

const Home = memo((props) => {
  const {
    places: { data, status },
    markers,
    fetchPlaces,
    fetchMarker,
    clearPlaces
  } = props;

  const [searchValue, setSearchValue] = useState([]);

  const _getOptions = useCallback(() => {
    if (Array.isArray(data) && data?.length > 0) {
      return data?.map(({ place_id, description }) => ({
        value: place_id,
        label: description,
      }));
    } else return [];
  }, [data]);

  const _handleSelect = useCallback((location) => {
    clearPlaces();
    setSearchValue(location);
    fetchMarker(location?.value);
  },[fetchMarker, clearPlaces]);

  const autoCompleteProps = {
    handleSearch: fetchPlaces,
    options: _getOptions(),
    loading: status === "pending",
    onSelect: _handleSelect,
    value: searchValue,
  };

  const mapProps = {
    markerPoints: markers?.data,
    center: markers?.center,
  };

  return (
    <>
      <Reusable.AutoComplete {...autoCompleteProps} />
      <Reusable.Map {...mapProps} />
    </>
  );
});

const mapStateToProps = (state) => ({
  places: state.places,
  markers: state.markers,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces: (input) => dispatch(placesActions.fetchPlaces(input)),
  fetchMarker: (input) => dispatch(markerActions.fetchMarker(input)),
  clearPlaces: () => dispatch(placesActions.reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
