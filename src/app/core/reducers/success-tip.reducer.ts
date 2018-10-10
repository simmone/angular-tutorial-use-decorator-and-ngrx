import { SuccessTipActionTypes } from '../actions/success-tip.actions';

export interface State {
  showSuccessTip: boolean;
  successMsg: string;
}

const initialState: State = {
  showSuccessTip: false,
  successMsg: ''
}

export function reducer(state = initialState, action: any): State {
  switch(action.type) {
    case SuccessTipActionTypes.ShowSuccessTip: {
      return {
        ...state,
        showSuccessTip: true,
        successMsg: action.payload
      };
    }
    case SuccessTipActionTypes.HideSuccessTip: {
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

export const showSuccessTip = (state: State) => state.showSuccessTip;
export const successMsg = (state: State) => state.successMsg;
