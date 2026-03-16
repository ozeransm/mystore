import { styled } from "goober";
import Modal from "../Modals";
import Card from "../../components/Card";

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
    margin: 10px 0;
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
    function handlerClick() {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModal', payload: true });
        dispatch({ type: 'setOpenEditModal', payload: false });
    }
    async function handlerDel(id) {
        dispatch({ type: 'delProducts', payload: id });
        await fetch(`http://localhost:3000/delproduct/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    function handlerEdit(card) {
        dispatch({ type: 'setOpenModal', payload: true });
        dispatch({ type: 'setOpenAddModal', payload: false });

        dispatch({ type: 'setEditCard', payload: card });
        dispatch({ type: 'editProducts', payload: card });
        dispatch({ type: 'setOpenEditModal', payload: true });
    }
    return (
        <section>
            {data.openModal && <Modal data={data} dispatch={dispatch}/>}
            <h1>Admin Panel</h1>
            <p>This is the admin panel. Only authorized users can access this page.</p>
            <ButtonAdd onClick={handlerClick}>Add Product</ButtonAdd>
            
            {data?.products.map(product => (
                <Card product={product} key={product.id}>
                    
                    <ButtonCard onClick={() => handlerEdit(product)}>Edit</ButtonCard>
                    <ButtonCard onClick={() => handlerDel(product.id)}>Delete</ButtonCard>
                </Card>
            ))}
        </section>
    );
}