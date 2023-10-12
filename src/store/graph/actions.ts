import {
  GRAPH_REQUEST,
  GRAPH_SUCCESS,
  GRAPH_ERROR,
} from "./actionTypes";

export const graphRequest = () => ({
  type: GRAPH_REQUEST,
  payload: {},
});

export const graphSuccess = (data: any) => ({
  type: GRAPH_SUCCESS,
  payload: data,
});

export const graphError = (data: string) => ({
  type: GRAPH_ERROR,
  payload: data,
});
