
export default function Users(data) {
  const users = data.data.users || [];
  
return (
<section>
  <h1>Users</h1>
  <ul>
    {users.map(user => (
    <li key={user.id}>
    {user.name} - {user.email}
    <br />
    {user.description}
    </li>
    ))}
  </ul>
      
  
</section>
    );
}   