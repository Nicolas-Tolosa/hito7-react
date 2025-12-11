import { useState } from "react"
import { MdError } from "react-icons/md";

const Login = () => {

    const [ loginUser, setLoginUser ] = useState("")
    const [ loginPassword, setLoginPassword ] = useState("")
    const [ loginError, setLoginError ] = useState(false)
    const [ isLoged, setIsLoged ] = useState(false)


    const handleLogin = (e) => {
        e.preventDefault()
        if (loginUser.trim() === '' || loginPassword.trim() === '') {
            setLoginError(true)
            setIsLoged(false)
            return
        }
        setLoginError(false)
        setIsLoged(true)

    }

    return (
        <form className="max-w-sm mx-auto grid grid-cols-1 mt-10" onSubmit={handleLogin} >
            <div className="mb-5">
                {loginError && <p className="p-4 text-white bg-red-600 font-bold text-sm md:text-base rounded-lg flex items-center justify-center my-3"><MdError className="mr-2" size="20"/> Introduce un email y contraseña validos</p>}
                {isLoged && <p className="p-4 text-white bg-green-600 font-bold text-sm md:text-base rounded-lg flex items-center justify-center my-3">¡Has ingresado con éxito!</p>}
                <label htmlFor="email" className="block mb-2 text-sm md:text-base font-bold text-black">Tu email</label>
                <input type="email" id="email" className="bg-slate-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pizzeria@mammamia.com" required 
                
                onChange={(e) => setLoginUser(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm md:text-base font-bold text-black">Tu contraseña</label>
                <input type="password" id="password" className="bg-slate-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña" required minLength={6}
                
                onChange={(e) => setLoginPassword(e.target.value)}
                />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-black">Recuérdame</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envíar</button>
        </form>

    )
}

export default Login