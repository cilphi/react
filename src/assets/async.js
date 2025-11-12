export async function getSingleItem(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await response.json();
    return item;
}

export async function getProds() {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    return data;
}