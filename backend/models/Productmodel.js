import mongoose from 'mongoose';

const productDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    itemWeight: {
        type: Number,
        required: true
    },
    product_image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Products = mongoose.model('Products', productDetailsSchema);

export default Products;
