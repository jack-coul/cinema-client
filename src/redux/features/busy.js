const initialState = {
  busy: [],
  error: null,
  user: "",
};

const busy = (state = initialState, action) => {
  switch (action.type) {
    case "get/busy/pending":
      return {
        ...state,
        loadingBusy: true,
        error: null,
      };
    case "get/busy/fulfilled":
      return {
        ...state,
        loadingBusy: false,
        busy: [...action.payload],
      };
    case "get/busy/rejected":
      return {
        ...state,
        loadingBusy: false,
        error: action.payload,
      };
    case "toBook/fetch/pending":
      return {
        ...state,
        loadingBusy: true,
        error: null,
      };
    case "toBook/fetch/fulfilled":
      return {
        ...state,
        loadingBusy: false,
        busy: [...state.busy, { ...action.payload }],
      };
    case "toBook/fetch/rejected":
      return {
        ...state,
        loadingBusy: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getBusy = () => {
  return async (dispatch) => {
    dispatch({ type: "get/busy/pending" });
    try {
      const res = await fetch("http://localhost:4000/");
      const busy = await res.json();
      dispatch({ type: "get/busy/fulfilled", payload: busy });
    } catch (error) {
      dispatch({ type: "get/busy/rejected", error });
    }
  };
};

export const toBookThePlace = (number) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.application.token;
    dispatch({ type: "toBook/fetch/pending" });
    try {
      const res = await fetch("http://localhost:4000/place", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ number }),
      });
      const place = await res.json();
      dispatch({ type: "toBook/fetch/fulfilled" });
    } catch (error) {
      dispatch({ type: "toBook/fetch/rejected", error });
    }
  };
};

export default busy;
