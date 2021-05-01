import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import '../CSS/Login.css'

function Login(props) {
    // State for input value
    const [value, setValue] = useState('')
    // State for check(admin)
    const [checkA, setCheckA] = useState(false)
    // State for check(default)
    const [checkD, setCheckD] = useState(false)

    const setCookie = useCookies(['password'])[1]

    // If value == '' it makes error
    if (value !== '') {
        fetch('http://192.168.219.186:4000/api/check/default/' + value)
        .then(res => res.json())
        .then(res => setCheckD(res.check))

        fetch('http://192.168.219.186:4000/api/check/admin/' + value)
            .then(res => res.json())
            .then(res => setCheckA(res.check))
    }


    const onChange = e => {
        setValue(e.target.value)
        
    }
    useEffect(() => {
        if (checkA === true) {
            props.setCheck('admin')
        } else if (checkD === true) {
            props.setCheck('default')
        } else {
            props.setCheck('nothing')
        }
        setCookie('password', value)
    })

    return (
        <div className="Login">
            <div className="box1">
                <div className="h1">비밀번호<br></br>입력</div>
                <input className="password" placeholder="Password" value={ value } onChange={ onChange }></input>
            </div>
            
        </div>
    )
}

export default Login