
export default function Users(data) {
  const users = data.data.users || [];
  
return (
<section>
  <h1>Users</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>
    );
}   