import { createAction, props } from '@ngrx/store';

export const highlightRegion = createAction(
  '[Country Card] Highlight Region',
  props<{ region: string }>()
);
