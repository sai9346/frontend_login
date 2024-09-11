import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { register } from '../services/api';

const RegisterSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Required'),
});

function Register() {
  const history = useHistory();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await register(values);
      toast.success('Registration successful! Please log in.');
      history.push('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred');
    }
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Register a new account</h3>
        <Formik
          initialValues={{ userName: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-4">
                <div>
                  <label className="block" htmlFor="userName">Username</label>
                  <Field type="text" name="userName" placeholder="Username"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  <ErrorMessage name="userName" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mt-4">
                  <label className="block" htmlFor="email">Email</label>
                  <Field type="email" name="email" placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mt-4">
                  <label className="block">Password</label>
                  <Field type="password" name="password" placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex items-baseline justify-between">
                  <button type="submit" disabled={isSubmitting}
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;