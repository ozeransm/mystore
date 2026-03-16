import { styled } from "goober";
import AddCards from "../../components/AddCard";
import EditCards from "../../components/EditCards";

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
    function close() {
        dispatch({ type: 'setOpenModal', payload: false });
    }
    return (
        <div>
            <h2>Add New Product</h2>
                <Overlay onClick={close}>
                    <ModalWindow onClick={(e) => e.stopPropagation()}>
                    {data.openAddModal && <><h2>Add New Product</h2><AddCards data={data} dispatch={dispatch}/></>}
                    {data.openEditModal && <><h2>Edit Product</h2><EditCards data={data} dispatch={dispatch}/></>}
                    </ModalWindow>
                </Overlay>
        </div>
    );
}