//Ejercicio 1 — Sistema de Productos de una Tienda

const productos =[];
productos.push({
    nombre: "Mouse", 
    precio: 15000, 
    stock: 10, 
    categoria: "Tecnología"
});
productos.push({
    nombre: "Teclado", 
    precio: 30000, 
    stock: 5, 
    categoria: "Tecnología"
});
productos.push ({
    nombre: "Cuaderno", 
    precio: 5000, 
    stock: 0, 
    categoria: "Librería"
});     
{ 
    productostock = productos.filter(producto => 
        producto.stock > 0);
    console.log("Productos en stock: ", productostock);


    let total = 0;
    for (let producto of productos) {
        total += producto.precio * producto.stock;   
    }   
    console.log("Valor total del inventario: $" + total);

console.log("Productos de la categoría Tecnología: ");
for (let producto of productos) {
    if (producto.categoria == "Tecnología") {
        console.log(producto.nombre);
    }   
}
}   
