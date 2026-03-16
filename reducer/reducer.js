export const initialState = { 
    users: [], 
    products: [],
    orders: [],
    openModal: false,
    openEditModal: false,
    openAddModal: false,
    editCard: {}, 
    };

export function reducer(state, action) {
    switch (action.type) {
    case 'setAll': return { ...state, users: action.payload.users, products: action.payload.products, orders: action.payload.orders };   
    case 'setOrders': return { ...state, orders: action.payload }; 
    case 'setUsers':  return { ...state, users: action.payload }; 
    case 'setProducts': return { ...state, products: [ action.payload, ...state.products] };
    case 'delProducts': return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    case 'editProducts': return { ...state, products: state.products.map(p => p.id === action.payload.id ? action.payload : p) };
    case 'setOpenModal': return { ...state, openModal: action.payload };
    case 'setOpenEditModal': return { ...state, openEditModal: action.payload };
    case 'setOpenAddModal': return { ...state, openAddModal: action.payload };
    case 'setEditCard': return { ...state, editCard: action.payload };
    default: throw new Error(`Unknown action: ${action.type}`); } 
}