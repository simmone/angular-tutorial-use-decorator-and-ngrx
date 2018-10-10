import { ErrorTipActionTypes } from '../actions/error-tip.actions';

export interface State {
  showErrorTip: boolean;
  errorMsg: string;
}

const initialState: State = {
  showErrorTip: false,
  errorMsg: ''
}

export function reducer(state = initialState, action: any): State {
  switch(action.type) {
    case ErrorTipActionTypes.ShowErrorTip: {
      return {
        ...state,
        showErrorTip: true,
        errorMsg: action.payload
      };
    }
    case ErrorTipActionTypes.HideErrorTip: {
      return {
        ...state,
        showErrorTip: false,
        errorMsg: ''
      };
    }
    default:
      return state;
  }
}

export const showErrorTip = (state: State) => state.showErrorTip;
export const errorMsg = (state: State) => state.errorMsg;
