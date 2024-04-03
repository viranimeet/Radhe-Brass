// import React, { useState } from 'react';
// import Header from '../components/Header';

// const Add_products = () => {
//     const initialData = {
//         name: '',
//         price: '',
//         category: '',
//         itemWeight: '',
//         description: '',
//         product_image: null
//     };
//     const [formData, setFormData] = useState(initialData);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//     const [image, setImage] = useState('');
//     const handleImageChange = async (e) => {
//         const { name } = e.target;
//         var reader = new FileReader();
//         reader.readAsDataURL(e.target.files[0]);
//         reader.onload = () => {
//             setImage(reader.result);
//             setFormData((prevData) => ({
//                 ...prevData,
//                 [name]: reader.result,
//             }));
//         };
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:8080/api/add-product/', {
//                 method: 'POST',
//                 body: JSON.stringify(formData),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }

//             console.log('Product added successfully');
//             // Clear form data after successful submission if needed
//             setFormData({
//                 name: '',
//                 price: '',
//                 category: '',
//                 itemWeight: '',
//                 description: '',
//                 product_image: null
//             });
//             console.log("formdata", formData);
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };


//     return (
//         <div>
//             <Header />
//             <section className="bg-white dark:bg-gray-900">
//                 <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
//                     <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                             <div className="sm:col-span-2">
//                                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
//                                 <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
//                             </div>
//                             <div className="w-full">
//                                 <label htmlFor="product_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product image</label>
//                                 <input
//                                     id="product_image"
//                                     name="product_image"
//                                     type="file"
//                                     onChange={handleImageChange}
//                                     className="block w-full mt-1  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     required
//                                 />
//                             </div>

//                             <div className="w-full">
//                                 <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
//                                 <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
//                             </div>
//                             <div className="w-full">
//                                 <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
//                                 <select id="category" name="category" value={formData.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
//                                     <option value="">Select type</option>
//                                     <option value="Bathroom Accessories">Bathroom Accessories</option>
//                                     <option value="Kitchenware">Kitchenware</option>
//                                     <option value="Home Decor">Home Decor</option>
//                                     <option value="Others">Others</option>
//                                 </select>
//                             </div>
//                             <div className="w-full">
//                                 <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
//                                 <input type="number" name="itemWeight" id="item-weight" value={formData.itemWeight} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required />
//                             </div>
//                             <div className="sm:col-span-2">
//                                 <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
//                                 <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" required></textarea>
//                             </div>
//                         </div>
//                         <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-100">
//                             Add product
//                         </button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Add_products;





import React, { useState } from 'react';
import Header from '../components/Header';

const Add_products = () => {
    const initialData = {
        name: '',
        price: '',
        category: '',
        itemWeight: '',
        description: '',
        product_image: null
    };
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [image, setImage] = useState('');
    const handleImageChange = async (e) => {
        const { name } = e.target;
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
            setFormData((prevData) => ({
                ...prevData,
                [name]: reader.result,
            }));
        };
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/add-product/', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            console.log('Product added successfully');
            // Clear form data after successful submission if needed
            setFormData({
                name: '',
                price: '',
                category: '',
                itemWeight: '',
                description: '',
                product_image: null
            });
            console.log("formdata", formData);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };


    return (
        <div>
            <Header />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="product_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product image</label>
                                <input
                                    id="product_image"
                                    name="product_image"
                                    type="file"
                                    onChange={handleImageChange}
                                    className="block w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                                {image && <img src={image} alt="Product" className="mt-2 w-32 h-32 object-cover rounded-lg" />} {/* Display the selected image */}
                            </div>

                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category" name="category" value={formData.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="">Select type</option>
                                    <option value="Bathroom Accessories">Bathroom Accessories</option>
                                    <option value="Kitchenware">Kitchenware</option>
                                    <option value="Home Decor">Home Decor</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
                                <input type="number" name="itemWeight" id="item-weight" value={formData.itemWeight} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-100">
                            Add product
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Add_products;
