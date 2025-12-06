# ProyectoFinal+Castillo: Ludussus

Ludussus es un e-commerce de juegos de mesa usados.

> Recomendaciones de usabilidad
- Desde el **NavBar** puedes:
    - Presionando el logo de **Ludussus**: Explorar el **Catálogo** de juegos
    - Haciendo click en el **Menú Dropdown**: La sección de **Categorías**
    - Apretando **Cart Widget**: Puedes ver tu **Carros de compras** con productos o vacío.
    - Clickeando el **Botón 'Vaciar carro'**: Dejarás tu carro sin productos.
    - Una vez que presionas el **Botón 'Ir al Checkout'**: Debes llenar un formulario para terminar tu proceso de compra.
- Desde el **Catálogo** puedes:
    - Presionando el **Botón 'Ver más detalles'**: Verás el **Detalle** de un producto y podrás añadirlos a tu carro de compra.
    - Una vez que presionas **Agregar**: Verás como aparecen los nuevos productos en el **Cart Widget**.

## Instalación 

Las instrucciones para descargar y configurar el proyecto:

```bash
    git clone https://github.com/cilphi/react
    cd react
    npm install
```
## Contribución

Instrucciones para contribuir:

1. Haz el **fork** del proyecto
2. Crea una **branch**
3. Realiza tus cambios y has un **commit**
4. **Sube** tu rama
5. Abre un **pull request**

## Estructura


```bash
├── node_modules
├── public
├── src
│   ├── assets
│   │      ├── async.js
│   │      ├── carticon.png
│   │      ├── favicon.png
│   │      └── ludussados.png
│   ├── components
│   │      ├── Cart.jsx
│   │      ├── CartContainer.jsx
│   │      ├── CartWidget.jsx
│   │      ├── Checkout.jsx
│   │      ├── EmptyCart.jsx
│   │      ├── Item.jsx
│   │      ├── ItemCount.jsx
│   │      ├── ItemDetail.jsx
│   │      ├── ItemDetailContainer.jsx
│   │      ├── ItemList.jsx
│   │      ├── ItemListContainer.jsx
│   │      ├── NavBar.jsx
│   │      └── NavBarContainer.jsx
│   ├── context
│   │      ├── CartContext.jsx
│   │      └── CartProvider.jsx
│   ├── firebase
│   │      ├── config.js
│   │      └── db.js
│   ├── hooks
│   │     └── useCart.js
│   ├──app
│   ├── NavBarContainer
│   │   └── Navbar
│   │      ├── Catálogo
│   │      ├── Categorías
│   │      └── CartWidget
│   ├── Catálogo
│   ├── Detalle
│   │   └── Agregar al Carro
│   ├── Carro
│   │   │  ├── Eliminar item
│   │   │  └── Vaciar carro
│   └── Checkout
├── main
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## Licencia

La lista de productos fue editada tomando como guía el [Repositorio de mertaybat](https://github.com/mertaybat/boardgame-recommender/tree/main/app/src/main/resources).

### ¡Muchas gracias por visitar, que tengas un buen día!
