import React, { useEffect, useState } from 'react'
import { getAllModels } from '../../../api/requests'
import { Link } from 'react-router-dom'

const AdminHomeTitle = () => {
    const [models, setModels] = useState([])

    console.log('home-models', models)

    useEffect(() => {
        getAllModels().then((res) => {
            setModels(res.data)
        })
    })

    return (
        <>
            {models && models.map((model) => {
                return (
                    <div class="max-w-lg rounded overflow-hidden shadow-lg mx-auto my-5">
                        <img className="w-full" src={model.image} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{model.title}</div>
                            <p class="text-gray-700 text-base">
                                {model.description}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={`/admin/home-models/edit/${model._id}`}>edit</Link></span>
                            {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                        </div>
                    </div>

                )
            })}
        </>
    )
}

export default AdminHomeTitle