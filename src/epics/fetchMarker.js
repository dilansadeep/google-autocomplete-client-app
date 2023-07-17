import { ajax } from "rxjs/ajax";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { concat, of } from "rxjs";
import * as markersActions from "../actions/markers.actions";
import { getGeoCodes } from "../services/API.service";

export const fetchMarkersEpic = (action$) => {
  return action$.pipe(
    ofType(markersActions.FETCH_MARKER),
    filter(({ payload }) => payload != null),
    switchMap(({ payload }) => {
      return concat(
        of(markersActions.setStatus("pending")),
        ajax
          .getJSON(`${getGeoCodes}?input=${encodeURIComponent(payload)}`)
          .pipe(
            map((resp) => markersActions.fetchFulfilled(resp)),
            catchError((err) => {
              return of(markersActions.fetchFailed(err?.response?.message));
            })
          )
      );
    })
  );
};
