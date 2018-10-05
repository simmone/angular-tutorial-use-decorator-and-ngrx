import { SpinnerActionTypes } from '../actions/spinner.actions';

export interface State {
  active: number;
  actionsInProgress: any[];
}

const initialState: State = {
  active: 0,
  actionsInProgress: []
}

export function reducer(state = initialState, action: any): State {
  switch(action.type) {
  case SpinnerActionTypes.ShowSpinner: {

    const isActionAlreadyInProgress = state.actionsInProgress
          .filter((currentAction: any) => currentAction === action.payload.type)
          .length;

    if(isActionAlreadyInProgress) {
      return state;
    }

    const newActionsInProgress = [...state.actionsInProgress, action.payload.type];

    return {
        ...state,
      active: newActionsInProgress.length,
      actionsInProgress: newActionsInProgress
    };
  }

  case SpinnerActionTypes.HideSpinner: {
    const newActionsInProgress =
          action.payload.triggerAction?
          state.actionsInProgress.filter((currentAction: any) => currentAction !== action.payload.triggerAction) :
          state.actionsInProgress;

    return {
        ...state,
      actionsInProgress: newActionsInProgress,
      active: newActionsInProgress.length
    };
  }

  default:
    return state;
  }
}

export const isLoadingSpinnerActive = (state: State) => state.active;
