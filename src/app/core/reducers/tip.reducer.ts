import { TipActionTypes } from '../actions/tip.actions';

export interface State {
  showErrorTip: boolean;
  errorMsg: string;
  showSuccessTip: boolean;
  successMsg: string;
}

const initialState: State = {
  showErrorTip: false,
  errorMsg: '',
  showSuccessTip: false,
  successMsg: ''
}

export function reducer(state = initialState, action: any): State {
  switch(action.type) {
    case TipActionTypes.ShowErrorTip: {
      return {
        ...state,
        showErrorTip: true,
        errorMsg: action.payload
      };
    }
    case TipActionTypes.HideErrorTip: {
      return {
        ...state,
        showErrorTip: false,
        errorMsg: ''
      };
    }
    case TipActionTypes.ShowSuccessTip: {
      return {
        ...state,
        showSuccessTip: true,
        successMsg: action.payload
      };
    }
    case TipActionTypes.HideSuccessTip: {
      return {
        ...state,
        showSuccessTip: false,
        successMsg: ''
      };
    }
    default:
      return state;
  }
}

export const showErrorTip = (state: State) => state.showErrorTip;
export const errorMsg = (state: State) => state.errorMsg;
export const showSuccessTip = (state: State) => state.showSuccessTip;
export const successMsg = (state: State) => state.successMsg;
