import {
  GRAPH_REQUEST,
  GRAPH_SUCCESS,
  GRAPH_ERROR,
} from "./actionTypes";

const INITIIAL_STATE = {
  status: false,
  data: null,
  error: null,
  players: [],
};

const Graph = (
  state = INITIIAL_STATE,
  action: {
    type:
      | typeof GRAPH_REQUEST
      | typeof GRAPH_SUCCESS
      | typeof GRAPH_ERROR
    payload: any;
  }
) => {
  switch (action.type) {
    case GRAPH_REQUEST:
      return {
        ...state,
        status: true,
        data: null,
        error: null,
      };
    case GRAPH_SUCCESS:
      return {
        ...state,
        status: false,
        data: action.payload,
      };

    case GRAPH_ERROR:
      return {
        ...state,
        status: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Graph;
