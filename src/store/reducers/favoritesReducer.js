const initialState = {
  loading: false,
  data: [],
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true };
    case 'ADD_FAVORITE_SUCCESS':
      return { ...state, loading: false, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
}
