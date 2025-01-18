import {
  CONTACTUS_REQUEST,
  CONTACTUS_REQUEST_FAILURE,
  CONTACTUS_REQUEST_SUCCESS,
} from "./ActionType";

interface InitialState {
  response: string | null;
  error: string | null;
  loading: boolean;
}

interface Action {
  type: string;
  payload: string;
}

const initialState: InitialState = {
  response: null,
  error: null,
  loading: false,
};

const ContactUsReducer = (
  state = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case CONTACTUS_REQUEST:
      return { ...state, loading: true };

    case CONTACTUS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
        error: null,
      };

    case CONTACTUS_REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default ContactUsReducer;
