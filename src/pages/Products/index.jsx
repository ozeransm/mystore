export default function Products(data) {
    const products = data.data.products || [];
    return (
        <section>
            <h1>Products</h1>
            <p>This is the products page.</p>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Description: {product.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}