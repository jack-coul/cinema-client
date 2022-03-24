const initialState = {
  news: [],
  error: null,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case "get/news/pending":
      return {
        ...state,
        loadingFilms: true,
        error: null,
      };
    case "get/news/fulfilled":
      return {
        ...state,
        loadingFilms: false,
        news: [...action.payload],
      };
    case "get/news/rejected":
      return {
        ...state,
        loadingFilms: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default news;

export const getAllNews = () => {
  console.log(2);
  return async (dispatch) => {
    dispatch({ type: "get/news/pending" });
    try {
      const res = await fetch("http://localhost:4000/news");
      const news = await res.json();

      console.log(news);

      dispatch({ type: "get/news/fulfilled", payload: news });
    } catch (error) {
      dispatch({ type: "get/news/rejected", error });
    }
  };
};
