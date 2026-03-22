import { styled } from "goober";
import AddCardsProduct from "../../components/AddCardProduct";
import EditCardProduct from "../../components/EditCardProduct";
import AddCardUser from "../../components/AddCardUser";
import EditCardUser from "../../components/EditCardUser";
import AddCardOrder from "../../components/AddCardOrder";
import EditCardOrder from "../../components/EditCardOrder";

const Overlay = styled("div")`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWindow = styled("div")`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;
export default function Modal({data, dispatch}) {
    
    return (
        <div>
            <h2>Add New Product</h2>
                <Overlay onClick={() => dispatch({ type: 'closeModal' })}>
                    <ModalWindow onClick={(e) => e.stopPropagation()}>
                    {data.openAddModalProduct && <><h2>Add New Product</h2><AddCardsProduct data={data} dispatch={dispatch}/></>}
                    {data.openEditModalProduct && <><h2>Edit Product</h2><EditCardProduct data={data} dispatch={dispatch}/></>}
                    {data.openAddModalUser && <><h2>Add New User</h2><AddCardUser data={data} dispatch={dispatch}/></>}
                    {data.openEditModalUser && <><h2>Edit User</h2><EditCardUser data={data} dispatch={dispatch}/></>}
                    {data.openAddModalOrder && <><h2>Add New Order</h2><AddCardOrder data={data} dispatch={dispatch}/></>}
                    {data.openEditModalOrder && <><h2>Edit Order</h2><EditCardOrder data={data} dispatch={dispatch}/></>}
                    </ModalWindow>
              
                </Overlay>
        </div>
    );
}