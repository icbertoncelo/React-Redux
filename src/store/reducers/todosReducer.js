const initialState = [
  { id: 1, text: 'Fazer café' },
  { id: 2, text: 'Ler artigo' },
  { id: 3, text: 'Atualizar currículo' },
];

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
