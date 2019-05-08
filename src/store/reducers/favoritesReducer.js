const initialState = [];

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'Facebook/react',
          description: 'Description',
          url: 'url',
        },
      ];
    default:
      return state;
  }
}
