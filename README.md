<section>
  <article>
    <h1>NavegaLasRutas+Castillo</h1> 
    <h6>Proyecto Ludussados</h6>
  </article>
</section>

<section>
  <article>
    <h2>Datos </h2>
    <ul>
      <li><b>Alumna:</b> Francisca Castillo</li>
      <li><b>Módulo:</b> React</li>
      <li><b>Comisión:</b> 94525</li>
      <li><b>Entrega:</b> Preentrega N°2</li>
    </ul>
  </article>
</section>

<section>
  <article>
    <h2>Consigna</h2>
    <p>Implementa una herramienta de routing, la cual permitirá navegar a través de las diferentes vistas para tu tienda: catálogo principal de productos, catálogo de productos filtrados por categorías, y vista en detalle de un producto.</p>
    <p>Crea la funcionalidad necesaria para que los usuarios puedan:</p>
      <ul>
        <li>Seleccionar desde el menú las distintas categorías disponibles.</li>
        <li>Visualizar el listado, filtrando según esa elección.</li>
      </ul>
    <h3>Objetivos:</h3>
    <ul>
        <li>Implementar la funcionalidad de navegación entre las diferentes vistas utilizando enlaces y rutas.</li>
        <li>Desarrollar la navegabilidad básica de la aplicación, permitiendo navegar desde el catálogo al detalle de cada item.</li>
      </ul>
  </article>
</section>

<section>
  <article>
    <h3>Aspectos a Evaluar:</h3>
    <ol>
      <p><i>Convenciones, Navegabilidad, Componete Navbar, Componente ItemListContainer, Componente ItemDetailContainer</i></p>
      <li> Respeta las consignas asignadas.</li>
      <li> Separa según patrones de componentes contenedores/presentación.</li>
      <li> Logra la navegabilidad completa implementando React Router.</li>
      <li> Genera rutas dinámicas para el detalle y las categorías de productos, utilizando URL params.</li>
      <li> Utiliza correctamente el componente Link para los enlaces y evitar reloads de la página.</li>
      <li> Usa el hook useParams para leer los parámetros de la URL y el hook useEffect para generar renderizados al detectar cambios de categoría y/o itemId.</li>
      <li> Presenta enlaces que permiten navegar hacia las diferentes categorías (ej: /category/remeras).</li>
      <li> Logra que el componente NavBar esté siempre visible en todas las rutas de la aplicación.</li>
      <li> Los enlaces no deben generar recargas de la página en el navegador.</li>
      <li> Usa una promise para devolver todos los productos, o los de una categoría específica (según la categoría a la que se navega), utilizando el parámetro de la URL.</li>
      <li> Implementa el componente ItemList como hijo de ItemListContainer.</li>
      <li> Utiliza el método map para generar un listado de componentes Item e identifica los elementos generados con la prop "key".</li>
      <li> Usa una promise para devolver un único producto específico (según al producto al que se navega), utilizando el parámetro del a URL.</li>
      <li> Accede al parámetro "id" de la URL utilizando el hooks useParams.</li>
      <li> Muestra como presentación el comopnente ItemDetail, y dentro de éste el componente ItemCount.</li>      
    </ol>
  </article>
</section>

<section>
  <article>
    <h2>Consigna Pasada</h2>
    <p>Crea los primeros componentes de React, que funcionarán como piezas base en la construcción de tu e-commerce. Desarrolla una barra de navegación, debe contener los enlaces de navegación, logo de tu tienda y el widget del carrito de compras.</p>
    <p>También, crea el componente Contenedor que a futuro mostrará el catálogo de productos, utilizando "props" para personalizarlo y enviar un mensaje de bienvenida</p>
    <h3>Objetivos:</h3>
      <ul>
        <li>Comprender los conceptos básicos de React y su estructura de componentes.</li>
        <li>Crear las bases para la homepage del ecommerce</li>
      </ul>
  </article>
</section>

<section>
  <article>
    <h3>Aspectos Evaluados:</h3>
    <ol>
      <p><i>Convenciones, Componete Navbar, Componente CartWidget, Componente ItemListContainer</i></p>
      <li> Respeta las consignas asignadas</li>
      <li> Muestra el brandname de la tienda en <b>NavBar</b></li>
      <li> Muestra las <b>categorías</b> de los productos</li>
      <li> Muestra el <b>CartWidget</b></li>
      <li> Muestra el <b>ícono de carrito</b> y una <b>burbuja de notificación</b> con un valor estático</li>
      <li> Se renderiza <b>debajo de NavBar</b> y como <b>hijo de App</b></li>
      <li> Renderiza un <b>texto</b> que se le es <b>asignado como props</b></li>
    </ol>
  </article>
</section>
