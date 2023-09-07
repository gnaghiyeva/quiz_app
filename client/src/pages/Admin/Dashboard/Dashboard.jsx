import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <body class="bg-gray">
    
   
    <div id="sideNav" class="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none">
        
        <div class="p-4 space-y-4">
            
            <a href={() => false} aria-label="dashboard"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-home text-white"></i>
                <span><Link to={'/admin/home-models'}>Home-Models</Link></span>
            </a>

            <a href={() => false} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-wallet"></i>
                <span><Link to={'/admin/categories'}>Categories</Link></span>
            </a>
            <a href={() => false} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-exchange-alt"></i>
                <span>Transacciones</span>
            </a>
            <a href={() => false} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-user"></i>
                <span>Mi cuenta</span>
            </a>
            <a href={() => false} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i class="fas fa-sign-out-alt"></i>
                <span>Cerrar sesión</span>
            </a>
        </div>
    </div>

    <div class="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">

        
    

        
        <div class="lg:flex gap-4 items-stretch">
           
            <div class="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                <div class="flex justify-center items-center space-x-5 h-full">
                    <div>
                        <p>Saldo actual</p>
                        <h2 class="text-4xl font-bold text-gray-600">50.365</h2>
                        <p>25.365 $</p>
                    </div>
                    <img src="https://www.emprenderconactitud.com/img/Wallet.png" alt="wallet"
                        class="h-24 md:h-20 w-38"/>
                </div>
            </div>

        
            <div class="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
               
                <div class="flex flex-wrap justify-between h-full">
                    
                    <div
                        class="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i class="fas fa-hand-holding-usd text-white text-4xl"></i>
                        <p class="text-white">Depositar</p>
                    </div>

                   
                    <div
                        class="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i class="fas fa-exchange-alt text-white text-4xl"></i>
                        <p class="text-white">Transferir</p>
                    </div>

                   
                    <div
                        class="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i class="fas fa-qrcode text-white text-4xl"></i>
                        <p class="text-white">Canjear</p>
                    </div>
                </div>
            </div>
        </div>

      
        <div class="bg-white rounded-lg p-4 shadow-md my-4">
            <table class="table-auto w-full">
                <thead>
                    <tr>
                        <th class="px-4 py-2 text-left border-b-2 w-full">
                            <h2 class="text-ml font-bold text-gray-600">Transacciones</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b w-full">
                        <td class="px-4 py-2 text-left align-top w-1/2">
                            <div>
                                <h2>Comercio</h2>
                                <p>24/07/2023</p>
                            </div>
                        </td>
                        <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                            <p><span>150$</span></p>
                        </td>
                    </tr>
                    <tr class="border-b w-full">
                        <td class="px-4 py-2 text-left align-top w-1/2">
                            <div>
                                <h2>Comercio</h2>
                                <p>24/06/2023</p>
                            </div>
                        </td>
                        <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                            <p><span>15$</span></p>
                        </td>
                    </tr>
                    <tr class="border-b w-full">
                        <td class="px-4 py-2 text-left align-top w-1/2">
                            <div>
                                <h2>Comercio</h2>
                                <p>02/05/2023</p>
                            </div>
                        </td>
                        <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                            <p><span>50$</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


   
   
</body>

  )
}

export default Dashboard