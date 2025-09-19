import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
    return (
        <div className='bg-while rounded shadow p-4'>
            <img src="{product.image}" alt="{product.title}"
                className='w-full h-48 object-cover rounded' />
            <h3 className='mt-2 font-bold text-lg'>{product.title}</h3>
            <p className='text-gray-700'>{product.price}</p>
            <Link
                to={`/products/${product.id}`}
                className='mt-4 inline-block bg-blue-500 text-while
        px-4 py-2 rounded hover:bg-blur-600'>
                Подробнее
            </Link>
        </div>
    )
}