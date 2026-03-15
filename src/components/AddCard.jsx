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
export default function AddCards({data, dispatch}) {
   function handlerSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const price = formData.get("price");
        const quantity = formData.get("quantity");
        const description = formData.get("description");
        dispatch({ type: 'setProducts', payload: { name, price, quantity, description } });
        fetch("http://localhost:3000/addcard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, price, quantity, description })
        })
    }
    return (
      <Form action="submit" onSubmit={handlerSubmit}>
        <Input type="text" name="name" placeholder="Enter product name" required/>
        <Input type="text" name="price" placeholder="Enter product price" required />
        <Input type="text" name="quantity" placeholder="Enter product quantity" required />
        <Input type="text" name="description" placeholder="Enter product description" required />
        <ButtonAdd type="submit">Add Product</ButtonAdd>
      </Form>
    );
}