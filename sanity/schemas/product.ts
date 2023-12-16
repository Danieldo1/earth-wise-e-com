export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
    {
        name: 'name',
        title: 'Name of product',
        type: 'string'
    },
    {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
            {
                type: 'image'
            }
        ]
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
        }
        
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number'
    },
    {
        name: 'price_id',
        title: 'Stripe Price ID',
        type: 'string'
    },
    {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [
            {
                type: 'category'
            }
        ]
    }
    
    ]
}