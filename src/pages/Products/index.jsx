import Card from "../../components/CardProduct";

export default function Products({data}) {
    return (
        <section>
            <h1>Products</h1>
            <p>This is the products page.</p>
            {data?.products.map(product => (
                <Card key={product.id} product={product} />
                 
            ))}
        </section>
    );
}