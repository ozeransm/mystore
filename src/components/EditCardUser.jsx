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
export default function EditCardUser({data, dispatch}) {
    async function handlerSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const description = formData.get("description");
        const role = formData.get("role");
        dispatch({ type: 'editUser', payload: { id: data.editCard.id, name, email, password, description, role } });
        await fetch("http://localhost:3000/edituser/" + data.editCard.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, description, role })
        })
    }
    return (
        <Form action="submit" onSubmit={handlerSubmit}>
            <Input type="text" name="name" placeholder="Enter user name" required/>
            <Input type="email" name="email" placeholder="Enter user email" required />
            <Input type="password" name="password" placeholder="Enter user password" required />
            <Input type="text" name="description" placeholder="Enter user description" required />
            <Input type="text" name="role" placeholder="Enter user role" required />
            <ButtonAdd type="submit">Edit Card</ButtonAdd>
        </Form>
    );
}   