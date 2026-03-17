export const initialState = { 
    users: [], 
    products: [],
    orders: [],
    openModal: false,
    openEditModalProduct: false,
    openAddModalProduct: false,
    openEditModalUser: false,
    openAddModalUser: false,
    editCard: {}, 
    };

export function reducer(state, action) {
    switch (action.type) {
    case 'setAll': return { ...state, users: action.payload.users, products: action.payload.products, orders: action.payload.orders };   
    case 'setOrders': return { ...state, orders: action.payload }; 
    case 'setUsers':  return { ...state, users: [ action.payload, ...state.users ] };
    case 'delUser': return { ...state, users: state.users.filter(u => u.id !== action.payload) };
    case 'editUser': return { ...state, users: state.users.map(u => u.id === action.payload.id ? action.payload : u) };
    case 'setProducts': return { ...state, products: [ action.payload, ...state.products ] };
    case 'delProducts': return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    case 'editProducts': return { ...state, products: state.products.map(p => p.id === action.payload.id ? action.payload : p) };
    case 'setOpenModal': return { ...state, openModal: action.payload };
    case 'setOpenEditModalProduct': return { ...state, openEditModalProduct: action.payload };
    case 'setOpenAddModalProduct': return { ...state, openAddModalProduct: action.payload };
    case 'setOpenEditModalUser': return { ...state, openEditModalUser: action.payload };
    case 'setOpenAddModalUser': return { ...state, openAddModalUser: action.payload };
    case 'setEditCard': return { ...state, editCard: action.payload };

    default: throw new Error(`Unknown action: ${action.type}`); } 
}