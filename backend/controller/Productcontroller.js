import Products from "../models/Productmodel.js";

const saveproductdata = async (req, res) => {
    const { name, price, category, itemWeight, description, product_image } = req.body;
    console.log("request body===========", req.body);
    try {
        console.log("eneter to addcouses try block");
        const newProduct = new Products({
            name,
            price,
            category,
            itemWeight,
            description,
            product_image,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({ message: 'Product added successfully', product: savedProduct });
    } catch (error) {
        console.log("eneter to addcouses catch block");
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
};

const getallproducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const Productcontroller = {
    saveproductdata,
    getallproducts,
};

export default Productcontroller;
