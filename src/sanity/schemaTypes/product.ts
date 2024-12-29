const ProductSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {name :'id' , title:"id" , type: 'string'},
      
      {name: 'name',title: 'Name',type: 'string',},
      {name: 'image',title: 'Image',type: 'image',},
      { name: 'price', title: 'Price', type: 'string',},
    ],
  };
  export default ProductSchema