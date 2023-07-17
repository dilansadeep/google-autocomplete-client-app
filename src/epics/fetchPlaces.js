import { ajax } from "rxjs/ajax";
import { catchError, debounceTime, map, switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { concat, of } from "rxjs";
import * as placesActions from "../actions/places.actions";
import { validValue } from "../utils/helper";
import { getPlaces } from "../services/API.service";

export const fetchPlacesEpic = (action$) => {
  return action$.pipe(
    ofType(placesActions.FETCH_PLACES),
    debounceTime(500),
    switchMap(({ payload }) => {
      if (!validValue(payload)) return of(placesActions.reset());
      return concat(
        of(placesActions.setStatus("pending")),
        ajax.getJSON(`${getPlaces}?input=${encodeURIComponent(payload)}`).pipe(
          map((resp) => placesActions.fetchFulfilled(resp)),
          catchError((err) => {
            return of(placesActions.fetchFailed(err?.response?.message));
          })
        )
      );
    })
  );
};
