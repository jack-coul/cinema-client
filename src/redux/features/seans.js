const initialState = {
  seans: [],
  error: null,
  places: [],
  reservedPlace: [],
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
      if (action.payload) {
        return {
          ...state,
          loadingSeans: false,
          seans: [...state.seans, ...action.payload],
        };
      }
    case "seans/patch/fullfilled":
      return {
        ...state,
        reservedPlace: [...state.reservedPlace, action.payload],
      };
    case "addPlace":
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    case "deletePlace":
      return {
        ...state,
        places: [...state.places.filter((place) => place !== action.payload)],
      };
    case "clearPlaces":
      return {
        ...state,
        places: []
      }
    case "seans/patch/delete/fullfilled":
      return{
        ...state,
        places: [
          ...state.places.filter((place)=>{
            return place !== action.payload
          })
        ],
        placeDeleteLoad: false

      }
    case "seans/patch/delete/rejected":
      return{
        ...state,
        error: action.error
      }
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
        payload: seans,
      });
    } catch (error) {
      dispatch({ type: "get/seans/fulfilled", error });
    }
  };
};

export const addPlace = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const place = state.seans.places;
    try {
      await fetch(`http://localhost:4000/seans/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ place }),
      });
      dispatch({ type: "seans/patch/fullfilled", payload: place });
    } catch (err) {
      dispatch({ type: "seans/patch/rejected", error: err.toString() });
    }
  };
};
export const deletePlace = (places,id)=>{
  return async (dispatch, getState)=>{
    const state = getState()
    try {
      await fetch(`http://localhost:4000/seans/place/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.user.token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ places }),
      });
      dispatch({ type: "seans/patch/delete/fullfilled", payload: places });
    } catch (err) {
      dispatch({ type: "seans/patch/delete/rejected", error: err.toString() });
    }
  }
}

export default seans;
