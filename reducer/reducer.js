export const initialState = { 
    users: [], 
    products: [],
    orders: [] 
    };

export function reducer(state, action) { 
    switch (action.type) { 
    case 'setOrders': return { ...state, orders: action.payload }; 
    case 'setUsers':  return { ...state, users: action.payload }; 
    case 'setProducts': return { ...state, products: action.payload }; 
    default: throw new Error(`Unknown action: ${action.type}`); } 
}