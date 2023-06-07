import { useState } from 'react';
import { useRouter } from 'next/router';

const ProductForm = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre,
      precio
    };

    try {
      const response = await fetch('/api/agregarProducto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (responseData.success) {
        alert(responseData.message);
        setNombre('');
        setPrecio('');

      } else {
        alert('Error al agregar el producto');
      }
    } catch (error) {
      console.error(error);
      alert('Error en la comunicación con el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <br />
      <label htmlFor="precio">Precio:</label>
      <input
        type="number"
        id="precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        step="0.01"
        required
      />
      <br />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;
