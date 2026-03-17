import { styled } from "goober";
import Modal from "../Modals";
import CardUser from "../../components/CardUser";
import CardProduct from "../../components/CardProduct";

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
    function handlerClickProduct() {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModalProduct', payload: true });
        dispatch({ type: 'setOpenEditModalProduct', payload: false });
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
    function handlerEditProduct(card) {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModalProduct', payload: false });

        dispatch({ type: 'setEditCard', payload: card });
        dispatch({ type: 'editProducts', payload: card });
        dispatch({ type: 'setOpenEditModalProduct', payload: true });
    }

    function handlerClickUser() {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModalUser', payload: true });
        dispatch({ type: 'setOpenEditModalUser', payload: false });
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
        dispatch({ type: 'setOpenAddModalUser', payload: false });

        dispatch({ type: 'setEditCard', payload: card });
        dispatch({ type: 'editProducts', payload: card });
        dispatch({ type: 'setOpenEditModalUser', payload: true });
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
            </CardDiv>
        </section>
    );
}