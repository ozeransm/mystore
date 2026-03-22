import { styled } from "goober";
const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Input = styled("input")`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #673ab8;
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
export default function AddCardOrder({data, dispatch}) {
   async function handlerSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const quantity = formData.get("quantity");
        const description = formData.get("description");
        const contact = formData.get("contact");
        const res = await fetch("http://localhost:3000/addorder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, quantity, description, contact, id_product: 0 })
        });
        const order = await res.json();
        dispatch({ type: 'setOrders', payload: { id: order.id, name, email, quantity, description, contact } });
        dispatch({ type: 'closeModal' });

    }
    return (
      <Form action="submit" onSubmit={handlerSubmit}>
        <Input type="text" name="name" placeholder="Enter user name" required/>
        <Input type="email" name="email" placeholder="Enter user email" required />
        <Input type="text" name="quantity" placeholder="Enter order quantity" required />
        <Input type="text" name="description" placeholder="Enter order description" required />
        <Input type="text" name="contact" placeholder="Enter user contact" required />
        <ButtonAdd type="submit">Add Order</ButtonAdd>
      </Form>
    );
}