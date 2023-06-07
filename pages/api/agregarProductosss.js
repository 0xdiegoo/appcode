const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "http://192.168.0.235/wordpress/",
  consumerKey: "ck_3d968b7aa2337618f97b3da7ec40be9466f590b4",
  consumerSecret: "cs_0e82366f50f965163d2b7965a886152255a243b9",
  version: "wc/v3"
});

export default async function handler(req, res){
    const responseData = {
        success: false,
        products:[]
    }
    const updatePrice = {
        name: "campanas",
        type: "simple",
        regular_price: "600"
        

    }

    api.post("products", updatePrice);

    try{
        const {data} = await api.get(
        'products', {
            per_page: 50
        }
        );

        responseData.success = true;

        responseData.products = data;

        res.json(responseData);
     }
        
//     Extraemos el ID, nombre y precio de los productos
//         responseData.products = data.map(product => ({
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             stock: product.stock_quantity
//         }));

//         res.json(responseData);
//     }

    catch (error){
        responseData.error = error.message;
        res.status(500).json(responseData)
    }
    
}