import { types } from "../types/types";

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});
export const removeError = () => ({
  type: types.uiRemoveError,
});
export const loading = () => ({
  type: types.uiLoading,
});
export const removeLoading = () => ({
  type: types.uiRemoveLoading,
});
