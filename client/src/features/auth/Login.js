import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PublicHeader from '../../components/Public/PublicHeader'
import PublicFooter from '../../components/Public/PublicFooter'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <p>Loading...</p>

    const content = (        
        <section className="public">
            <main  className='public__main'>
                <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
                <h1 className='public__mainTitle'>Login</h1>
                <form className="login" onSubmit={handleSubmit}>                    
                    <div className="form__item">
                        <label htmlFor="username"><strong>Username:</strong></label>
                        <br/>
                        <input
                            className="form__input"
                            type="text"
                            id="username"
                            ref={userRef}
                            value={username}
                            onChange={handleUserInput}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="form__item">
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <br/>
                        <input
                            className="form__input"
                            type="password"
                            id="password"
                            onChange={handlePwdInput}
                            value={password}
                            required
                        />
                    </div>

                    <div className="form__item">
                        <button className="form__submit-button">Sign In</button>
                    </div>
                </form>
            </main>
        </section>
    )

    return content
}
export default Login