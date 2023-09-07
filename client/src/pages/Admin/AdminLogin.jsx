import React from "react";
import { useAdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/requests";
import Swal from 'sweetalert2';
import { useFormik } from 'formik';

const AdminLogin = () => {
  const [admin, setAdmin] = useAdminContext();
  console.log('admin', admin)
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const response = await signIn({
      username: values.username,
      password: values.password,
    });

    if (response.auth) {
      localStorage.setItem('adminToken', response.token);
      localStorage.setItem('admin', JSON.stringify(response.user));
      setAdmin(response.user);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Admin signed in successfully!',
        showConfirmButton: false,
        timer: 1200,
      });

      actions.resetForm();
      navigate('/admin');
    }

    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or Password is incorrect!',

      })

    }

  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="username"
                value={formik.values.username}
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>


            </div>
            <div className="mt-2">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                value={formik.values.password}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AdminLogin