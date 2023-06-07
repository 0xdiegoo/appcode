const WooCommerceAPI = require("@woocommerce/woocommerce-rest-api").default;

const verProducto = async (req, res) => {
  if (req.method === 'GET') {
    const productId = req.query.id;

    // Configura la conexión con la API REST de WooCommerce
    const WooCommerce = new WooCommerceAPI({
      url: "http://192.168.0.235/wordpress/",
      consumerKey: "ck_3d968b7aa2337618f97b3da7ec40be9466f590b4",
      consumerSecret: "cs_0e82366f50f965163d2b7965a886152255a243b9",
      version: 'wc/v3'
    });

    try {
      // Realiza la solicitud GET para obtener los datos del producto por su ID
      const response = await WooCommerce.get(`products/${productId}`);

      // Verifica si la solicitud fue exitosa
      if (response.status === 200) {
        const producto = response.data;

        return res.status(200).json({
          success: true,
          producto
        });
      } else {
        throw new Error('Error al obtener el producto');
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }
};

export default verProducto;
