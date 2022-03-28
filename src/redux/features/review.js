const initialState = {
  reviews: [],
  loadReview: false,
  error: null,
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case "get/reviews/pending":
      return {
        ...state,
        loadReview: true,
        error: null,
      };
    case "get/reviews/fulfilled":
      return {
        ...state,
        loadReview: false,
        reviews: [...action.payload],
      };
    case "get/reviews/rejected":
      return {
        ...state,
        loadReview: false,
        error: action.error,
      };
    case "add/review/pending":
      return {
        ...state,
        loadReview: true,
        error: null,
      };
    case "add/review/fulfilled":
      return {
        ...state,
        loadReview: false,
        reviews: [...state.reviews, action.payload],
      };
    case "add/review/rejected":
      return {
        ...state,
        error: action.error,
        loadReview: false,
      };
    default:
      return state;
  }
};

export const getReview = (id) => {
  return async (dispatch) => {
    dispatch({ type: "get/reviews/pending" });
    try {
      const res = await fetch(`http://localhost:4000/film/review/${id}`);
      const reviews = await res.json();
      dispatch({ type: "get/reviews/fulfilled", payload: reviews });
    } catch (error) {
      dispatch({ type: "get/reviews/rejected", error });
    }
  };
};

export const addReview = (text, film) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch({ type: "add/review/pending" });
    try {
      const res = await fetch("http://localhost:4000/film/review", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text, film }),
      });
      const review = await res.json();
      console.log(review);
      dispatch({ type: "add/review/fulfilled", payload: review });
    } catch (error) {
      dispatch({ type: "add/review/rejected", error });
    }
  };
};

export default review;
