import { useState } from 'react'
import { MdError } from "react-icons/md";


const Register = () => {
    const [ registerUser, setRegisterUser ] = useState("")
    const [ registerPassword, setRegisterPassword ] = useState("")
    const [ registerConfirmPassword, setRegisterConfirmPassword ] = useState("")
    const [ registerError, setRegisterError ] = useState(false)
    const [ isSubmitted, setIsSubmitted ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (registerPassword === registerConfirmPassword && registerUser.trim() !== '') {
            setIsSubmitted(true)
            setRegisterError(false)
            return
        }
        setRegisterError(true)
        setIsSubmitted(false)
    }

    return (
        <form className="max-w-sm mx-auto grid grid-cols-1 mt-10" onSubmit={handleSubmit}>
            <div className="mb-5">

                {registerError && <p className="p-4 text-white bg-red-600 font-bold text-sm md:text-base rounded-lg flex items-center justify-center my-3"><MdError className="mr-2" size="20"/> Introduce un email y contraseña validos</p>}

                {isSubmitted && <p className="p-4 text-white bg-green-600 font-bold text-sm md:text-base rounded-lg flex items-center justify-center my-3">¡Te has registrado con éxito!</p>}

                <label htmlFor="email" className="block mb-2 text-sm md:text-base font-bold text-black">Tu email</label>
                <input type="email" id="email" className="shadow-sm bg-slate-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="pizzeria@mammamia.com" required 
                
                onChange={(e) => setRegisterUser(e.target.value)}/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
                <input type="password" id="password" className="shadow-sm bg-slate-900 border border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Contraseña' required minLength={6}
                
                onChange={(e) => setRegisterPassword(e.target.value)}/>
            </div>
            <div className="mb-5">
                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repite tu</label>
                <input type="password" id="repeat-password" className="shadow-sm bg-slate-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Repetir contraseña' required minLength={6}
                
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}/>
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-black">Acepto los <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">términos y condiciones</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar nueva cuenta</button>
        </form>

    )
}

export default Register