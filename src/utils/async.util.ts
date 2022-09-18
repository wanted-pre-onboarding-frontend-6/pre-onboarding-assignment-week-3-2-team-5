export const reducerUtils = {
  loading(state: any) {
    state.loading = true;
    state.done = false;
    state.error = null;
  },

  success(state: any) {
    state.loading = false;
    state.done = true;
    state.error = null;
  },

  error(state: any, action: any) {
    state.loading = false;
    state.done = false;
    state.error = action.payload.err;
  },
};
