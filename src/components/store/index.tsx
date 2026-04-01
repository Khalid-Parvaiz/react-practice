import { useState } from "react"
import useFetchData from "../../hooks/useFetchData"

interface ProductDetail {
    id: number
    title: string
    price: number
    rating: number
    thumbnail: string
    description: string
}
interface ApiResponse {
    products : ProductDetail[]
}


export default function ProductStore() {
    const [data] = useFetchData<ApiResponse>('https://dummyjson.com/products')

    return (
        <>
            <div className="w-full flex flex-wrap mx-auto px-4 py-6" style={{ height: "100vh" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {data?.products?.map((item: ProductDetail) => {
                        const { id, title, description, price, thumbnail, rating } = item
                        return (
                            <div
                                key={id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={thumbnail}
                                        alt={title}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                                        {title}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                        {description}
                                    </p>

                                    {/* Price + Rating */}
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xl font-bold text-blue-600">
                                            ${price}
                                        </span>
                                        <span className="text-sm text-yellow-500">
                                            ⭐ {rating}
                                        </span>
                                    </div>

                                    {/* Button */}
                                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>

    )
}