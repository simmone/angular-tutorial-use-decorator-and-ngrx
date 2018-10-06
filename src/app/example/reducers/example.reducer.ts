import { ExampleActionTypes } from '../actions/example.actions';

export interface State {
  result: boolean
}

export const initialState: State = {
  result: false
};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case ExampleActionTypes.NormalTaskSuccess: {
      return {
        ...state,
        result: true
      };
    }
    case ExampleActionTypes.NormalTaskFailure: {
      return {
        ...state,
        result: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getResult = (state: State) => state.result;
