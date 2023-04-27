import { createReducer, on } from '@ngrx/store';
import { highlightRegion } from './country.actions';
import { AppState } from './AppState';

export const initialState: AppState = {
  highlightedRegion: '',
};

export const appReducer = createReducer(
  initialState,
  on(highlightRegion, (state, { region }) => {
    console.log(region);
    return {
      ...state,
      highlightedRegion: region,
    };
  })
);
