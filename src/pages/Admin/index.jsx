import { styled } from "goober";
import Modal from "../Modals";
import CardUser from "../../components/CardUser";
import CardProduct from "../../components/CardProduct";
import CardOrder from "../../components/CardOrder";

const CardDiv = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 10px auto;    
`;
const ButtonCard = styled("button")`
    background-color: #673ab8;
    color: white;
    width: 80px;
    margin: 5px;
    font-size: 16px;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    
    &:hover {
        background-color: #4e1aaf;
    }
`;
const ButtonAdd = styled("button")`
    background-color: #673ab8;
    color: white;
    width: 150px;
    margin: 10px auto;
    font-size: 16px;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        background-color: #4e1aaf;
    }
`;  
export default function Admin({data, dispatch}) {
    //Products
    function handlerClickProduct() {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModalProduct', payload: true });
        
    }
    async function handlerDelProduct(id) {
        dispatch({ type: 'delProducts', payload: id });
        await fetch(`http://localhost:3000/delproduct/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    async function handlerEditProduct(card) {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenEditModalProduct', payload: true });
        
        dispatch({ type: 'setEditCard', payload: card });
        dispatch({ type: 'editProducts', payload: card });        
    }
    //Users
    function handlerClickUser() {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModalUser', payload: true });
    }
    async function handlerDelUser(id) {
        dispatch({ type: 'delUser', payload: id });
        await fetch(`http://localhost:3000/deluser/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    function handlerEditUser(card) {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenEditModalUser', payload: true });
        
        dispatch({ type: 'setEditCard', payload: card });
        dispatch({ type: 'editUser', payload: card });        
    }
    //Orders
    function handlerClickOrder() {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModalOrder', payload: true });
    }
    async function handlerDelOrder(id) {
        dispatch({ type: 'delOrder', payload: id });
        await fetch(`http://localhost:3000/delorder/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    function handlerEditOrder(card) {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenEditModalOrder', payload: true });
        
        dispatch({ type: 'setEditCard', payload: card });
        dispatch({ type: 'editOrder', payload: card });        
    }
    return (
        <section>
            {data.openModal && <Modal data={data} dispatch={dispatch}/>}
            <h1>Admin Panel</h1>
            <p>This is the admin panel. Only authorized users can access this page.</p>
            <CardDiv>
            <div>
            <ButtonAdd onClick={handlerClickProduct}>Add Product</ButtonAdd>
            
            {data?.products.map(product => (
                <CardProduct product={product} key={product.id}>
                    
                    <ButtonCard onClick={() => handlerEditProduct(product)}>Edit</ButtonCard>
                    <ButtonCard onClick={() => handlerDelProduct(product.id)}>Delete</ButtonCard>
                </CardProduct>
            ))}
            </div>
            <div>
            <ButtonAdd onClick={handlerClickUser}>Add User</ButtonAdd>
            
            {data?.users.map(user => (
                <CardUser user={user} key={user.id}>
                    
                    <ButtonCard onClick={() => handlerEditUser(user)}>Edit</ButtonCard>
                    <ButtonCard onClick={() => handlerDelUser(user.id)}>Delete</ButtonCard>
                </CardUser>
            ))}
            </div>
            <div>
            <ButtonAdd onClick={handlerClickOrder}>Add Order</ButtonAdd>
            
            {data?.orders.map(order => (
                <CardOrder order={order} key={order.id}>
                    
                    <ButtonCard onClick={() => handlerEditOrder(order)}>Edit</ButtonCard>
                    <ButtonCard onClick={() => handlerDelOrder(order.id)}>Delete</ButtonCard>
                </CardOrder>
            ))}
            </div>
            </CardDiv>
        </section>
    );
}