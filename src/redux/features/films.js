const initialState = {
  films: [],
  error: null,
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case "get/films/pending":
      return {
        ...state,
        loadingFilms: true,
        error: null,
      };
    case "get/films/fulfilled":
      return {
        ...state,
        loadingFilms: false,
        films: [...action.payload],
      };
    case "get/films/rejected":
      return {
        ...state,
        loadingFilms: false,
        error: action.error,
      };
    case "get/film/pending":
      return {
        ...state,
        loadingFilms: true,
        error: null,
      };
    case "get/film/fulfilled":
      return {
        ...state,
        loadingFilms: false,
        films: [...action.payload],
      };
    case "get/film/rejected":
      return {
        ...state,
        loadingFilms: false,
        error: action.error,
      };
    case "get/GategoryFilms/pending":
      return {
        ...state,
        loadingFilms: true,
        error: null,
      };
    case "get/GategoryFilms/fulfilled":
      return {
        ...state,
        films: [...action.payload],
        loadingFilms: false,
      };
    case "get/GategoryFilms/rejected":
      return {
        ...state,
        loadingFilms: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getAllFilms = () => {
  return async (dispatch) => {
    dispatch({ type: "get/films/pending" });
    try {
      const res = await fetch("http://localhost:4000/films");
      const films = await res.json();
      dispatch({ type: "get/films/fulfilled", payload: films });
    } catch (error) {
      dispatch({ type: "get/films/rejected", error });
    }
  };
};

export const getOneFilm = (id) => {
  return async (dispatch) => {
    dispatch({ type: "get/film/pending" });
    try {
      const res = await fetch(`http://localhost:4000/film/${id}`);
      const film = await res.json();
      dispatch({ type: "get/film/fulfilled", payload: film });
    } catch (error) {
      dispatch({ type: "get/film/rejected", error });
    }
  };
};


export default films;
