import React, { useState } from 'react';

const VerProducto = () => {
  const [productId, setProductId] = useState('');
  const [producto, setProducto] = useState(null);

  const handleVerProducto = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/verProducto?id=${productId}`);
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.success) {
        setProducto(responseData.producto);
      } else {
        setProducto(null);
        alert('Error al obtener el producto');
      }
    } catch (error) {
      console.error(error);
      setProducto(null);
      alert('Error en la comunicación con el servidor');
    }
  };

  return (
    <div>
      <form onSubmit={handleVerProducto}>
        <label htmlFor="productId">ID del Producto:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />
        <button type="submit">Ver Producto</button>
      </form>

      {producto && (
        <div>
          <h2>Datos del Producto</h2>
          <p>ID: {producto.id}</p>
          <p>Nombre: {producto.name}</p>
          <p>Precio: {producto.regular_price}</p>
          {/* Agrega aquí más detalles del producto que desees mostrar */}
        </div>
      )}
    </div>
  );
};

export default VerProducto;
