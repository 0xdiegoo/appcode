const WooCommerceAPI = require("@woocommerce/woocommerce-rest-api").default;
// Configura la conexión con la API REST de WooCommerce
const WooCommerce = new WooCommerceAPI({
    url: "http://192.168.0.235/wordpress/",
    consumerKey: "ck_3d968b7aa2337618f97b3da7ec40be9466f590b4",
    consumerSecret: "cs_0e82366f50f965163d2b7965a886152255a243b9",
    version: 'wc/v3'
  });
const agregarProducto = async (req, res) => {
  if (req.method === 'POST') {
    const { nombre, precio } = req.body;
    // Crea el objeto del nuevo producto
    const nuevoProducto = {
      name: nombre,
      regular_price: precio,
      type: 'simple',
      status: 'publish'
    };

    try {
      // Realiza la solicitud POST para agregar el producto a WooCommerce
      const response = await WooCommerce.post('products', nuevoProducto);
      // Verifica si la solicitud fue exitosa
      if (response.status === 201) {
        const productoAgregado = response.data;

        return res.status(201).json({
          success: true,
          message: 'Producto agregado correctamente',
          product: productoAgregado
        });
      } else {
        throw new Error('Error al agregar el producto');
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }
};

export default agregarProducto;
