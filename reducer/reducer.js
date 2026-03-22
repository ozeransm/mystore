export const initialState = { 
    users: [], 
    products: [],
    orders: [],
    openModal: false,
    openEditModalProduct: false,
    openAddModalProduct: false,
    openEditModalUser: false,
    openAddModalUser: false,
    openAddModalOrder: false,
    openEditModalOrder: false,
    editCard: {}, 
    };

export function reducer(state, action) {
    switch (action.type) {
    case 'setAll': return { ...state, users: action.payload.users, products: action.payload.products, 
        orders: action.payload.orders };   
    case 'setProducts': return { ...state, products: [ action.payload, ...state.products ] };
    case 'setOrders': return { ...state, orders: [ action.payload, ...state.orders ] }; 
    case 'setUsers':  return { ...state, users: [ action.payload, ...state.users ] };
    case 'delProducts': return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    case 'delOrder': return { ...state, orders: state.orders.filter(o => o.id !== action.payload) };
    case 'delUser': return { ...state, users: state.users.filter(u => u.id !== action.payload) };
    case 'editProducts': return { ...state, products: state.products.map(p => p.id === action.payload.id ? action.payload : p) };
    case 'editOrder': return { ...state, orders: state.orders.map(o => o.id === action.payload.id ? action.payload : o) };
    case 'editUser': return { ...state, users: state.users.map(u => u.id === action.payload.id ? action.payload : u) };
    case 'setOpenModal': return { ...state, openModal: action.payload };
    case 'setOpenEditModalProduct': return { ...state, openEditModalProduct: action.payload };
    case 'setOpenAddModalProduct': return { ...state, openAddModalProduct: action.payload };
    case 'setOpenEditModalUser': return { ...state, openEditModalUser: action.payload };
    case 'setOpenAddModalUser': return { ...state, openAddModalUser: action.payload };
    case 'setOpenAddModalOrder': return { ...state, openAddModalOrder: action.payload };
    case 'setOpenEditModalOrder': return { ...state, openEditModalOrder: action.payload };
    case 'setEditCard': return { ...state, editCard: action.payload };
    case 'closeModal': return { ...state, openModal: false, openAddModalProduct: false, openEditModalProduct: false, 
        openAddModalUser: false, openEditModalUser: false, openAddModalOrder: false, openEditModalOrder: false };   

    default: throw new Error(`Unknown action: ${action.type}`); } 
}