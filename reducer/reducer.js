export const initialState = { 
    users: [], 
    products: [],
    orders: [],
    openModal: false, 
    };

export function reducer(state, action) {
    console.log('Reducer called with action:', state, action);
    switch (action.type) { 
    case 'setOrders': return { ...state, orders: action.payload }; 
    case 'setUsers':  return { ...state, users: action.payload }; 
    case 'setProducts': return { ...state, products: [ action.payload, ...state.products] };
    case 'setOpenModal': return { ...state, openModal: action.payload }; 
    default: throw new Error(`Unknown action: ${action.type}`); } 
}