import React, { useState } from 'react'
import logo from "/logo.svg"
import { login } from '../../services/authService'

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = ( { target } ) =>{
        setEmail(target.value)
    }

    const onChangePassword = ( { target }) => {
        setPassword(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const requestData = {
            email: email.trim(),
            password: password.trim()
        }        
        
        login(requestData)        
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Inicia sesión</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={ onSubmit }>
                        <div>
                            <label className="block text-sm/6 font-medium text-gray-900">Correo electrónico</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" required 
                                value={ email }
                                onChange={ onChangeEmail }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>                            
                            <label className="block text-sm/6 font-medium text-gray-900">Contraseña</label>                                                            
                            <div className="mt-2">
                                <input type="password" name="password" id="password" required
                                value={ password }
                                onChange={ onChangePassword } 
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>                            
                        </div>

                        <div>
                            <button type="submit" 
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar Sesión</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        ¿No tienes cuenta?
                        <a href="#" 
                        className="font-semibold text-indigo-600 hover:text-indigo-500">Registrate aquí</a>
                    </p>
                </div>
            </div>

        </>

    )
}
