const initialState = [];

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      return [...state, action.payload.data];
    default:
      return state;
  }
}
