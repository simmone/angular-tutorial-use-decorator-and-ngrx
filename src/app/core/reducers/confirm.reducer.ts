import { ConfirmActionTypes } from '../actions/confirm.actions';

export interface State {
  confirmQuestion: string | null;
  showConfirm: boolean;
  confirmAction: string | null;
}

export const initialState: State = {
  confirmQuestion: null,
  showConfirm: false,
  confirmAction: null
};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case ConfirmActionTypes.ShowConfirm: {
      return {
        ...state,
        confirmQuestion: action.question,
        showConfirm: true,
        confirmAction: action.action
      };
    }
    case ConfirmActionTypes.HideConfirm:
    case ConfirmActionTypes.SubmitConfirm:
    {
      return {
        ...state,
        confirmQuestion: null,
        showConfirm: false,
        confirmAction: null
      };
    }
    default: {
      return state;
    }
  }
}

export const getConfirmQuestion = (state: State) => state.confirmQuestion;
export const getShowConfirm = (state: State) => state.showConfirm;
export const getConfirmAction = (state: State) => state.confirmAction;
