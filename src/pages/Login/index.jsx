import { styled } from "goober";
import { useLocation } from 'preact-iso';

const FormLogin = styled("form")`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
   
`;

export default function Login(data) {
    const { route } = useLocation();
    const handlerSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);   
        const username = formData.get("username");
        const password = formData.get("password");
        const user = data.data.users.find(user => user.name === username && user.password === password);
        console.log(user ? 'User found' : 'User not found');
        
        if (user) {
            route("/x7p9a2lm");
        }
    }
    
    return (
        <section>
            <h1>Login</h1>
            <p>This is the login page.</p>
            <FormLogin onSubmit={handlerSubmit}>
                <input type="text" id="username" name="username" placeholder="Username" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </FormLogin>
            
        </section>
    );
}