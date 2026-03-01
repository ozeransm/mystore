export default function Orders(data) {
    const orders = data.data.orders || [];
    return (
        <section>
            <h1>Orders</h1>
            <p>This is the orders page.</p>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <h2>Name: {order.name}</h2>
                        <p>Product ID: {order.id_product}</p>
                        <p>Quantity: {order.quantity}</p>
                        <p>Description: {order.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}