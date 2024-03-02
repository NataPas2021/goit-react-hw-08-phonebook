export const pending = (state) => (
  {...state,
    isLoading: true,
    error: null,
  });

export const rejected = (state, {payload}) => (
  {
    ...state,
    isLoading: false,
    error: payload,
  });