import { styled } from "goober";
import AddCard from "../Modals/AdminAddCard";

const Card = styled("div")`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
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
    }
    return (
        <section>
            {data.openModal && <AddCard data={data} dispatch={dispatch}/>}
            <h1>Admin Panel</h1>
            <p>This is the admin panel. Only authorized users can access this page.</p>
            <ButtonAdd onClick={handlerClick}>Add Product</ButtonAdd>
            {data.products.map(product => (
                <Card key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <ButtonCard>Edit</ButtonCard>
                    <ButtonCard>Delete</ButtonCard>
                </Card>
            ))}
        </section>
    );
}