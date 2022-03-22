const initialState = {
  seans: [],
  error: null,
};

const seans = (state = initialState, action) => {
  switch (action.type) {
    case "get/seanses/pending":
      return {
        ...state,
        loadingSeans: true,
        error: null,
      };
    case "get/seanses/fulfilled":
      return {
        ...state,
        loadingSeans: false,
        seans: [...action.payload],
      };
    case "get/seanses/rejected":
      return {
        ...state,
        loadingSeans: false,
        error: action.error,
      };
    case "get/seans/pending":
      return {
        ...state,
        loadingSeans: true,
        error: null,
      };
    case "get/seans/fulfilled":
      return {
        ...state,
        loadingSeans: false,
        seans: [...action.payload.seans],
      };
    default:
      return state;
  }
};

export const getSeanses = () => {
  return async (dispatch) => {
    dispatch({ type: "get/seanses/pending" });
    try {
      const res = await fetch("http://localhost:4000/seans");
      const seans = await res.json();
      dispatch({ type: "get/seanses/fulfilled", payload: seans });
    } catch (error) {
      dispatch({ type: "get/seanses/rejected", error });
    }
  };
};

export const getSeans = (id) => {
  return async (dispatch) => {
    dispatch({ type: "get/seans/pending" });
    try {
      const res = await fetch(`http://localhost:4000/seans/${id}`);
      const seans = await res.json();
      dispatch({
        type: "get/seans/fulfilled",
        payload: {
          seans,
          id,
        },
      });
    } catch (error) {
      dispatch({ type: "get/seans/fulfilled", error });
    }
  };
};

export default seans;
