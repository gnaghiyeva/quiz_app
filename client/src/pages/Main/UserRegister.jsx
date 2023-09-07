import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { signUp } from '../../api/requests'
import { Helmet } from 'react-helmet';
import favicon from '../../assets/icon/app_icon.png'
const UserRegister = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values, actions) => {
        await signUp(values)
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'User registered successfully',
            showConfirmButton: false,
            timer: 1500
        })
        actions.resetForm()
        navigate('/login')
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            image: '',
            password: ''
        },

        onSubmit: handleSubmit
    })
    return (
        <>
            <Helmet>
                <title>User Register</title>
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            <section className="bg-gray-50 white:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-dark">
                        User Register
                    </p>
                    <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">
                                Create and account
                            </h1>

                            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor='' className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Your Username</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='username' type='text' value={formik.values.username} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 white:focus:border-blue-500" placeholder="dennis" required="" />
                                </div>
                                <div>
                                    <label htmlFor='' className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Your Image</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='image' type='text' value={formik.values.image} id="image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 white:focus:border-blue-500" placeholder="image_link" required="" />
                                </div>
                                <div>
                                    <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Your Email</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' type='email' value={formik.values.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 white:focus:border-blue-500" placeholder="dennis@gmail.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark white:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>


                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                                >Create Account</button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={'/login'} href={() => false} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserRegister