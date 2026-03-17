import CardUser from "../../components/CardUser";

export default function Users(data) {
  const users = data.data.users || [];
  
return (
    <section>
        <h1>Users</h1>
        <p>This is the users page.</p>
        {users.map(user => (
            <CardUser key={user.id} user={user} />
        ))}
    </section>
    );
}   