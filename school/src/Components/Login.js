import React, { useEffect, useState } from 'react'

function Login(props) {
    // State for input value
    const [value, setValue] = useState('')
    // State for check(admin)
    const [checkA, setCheckA] = useState(false)
    // State for check(default)
    const [checkD, setCheckD] = useState(false)

    // If value == '' it makes error
    if (value !== '') {
        fetch('http://localhost:4000/api/check/default/' + value)
        .then(res => res.json())
        .then(res => setCheckD(res.check))

        fetch('http://localhost:4000/api/check/admin/' + value)
            .then(res => res.json())
            .then(res => setCheckA(res.check))
    }


    const onChange = e => setValue(e.target.value)
    
    useEffect(() => {
        if (checkA === true) {
            props.setCheck('admin')
        } else if (checkD === true) {
            props.setCheck('default')
        } else {
            props.setCheck('nothing')
        }
    })

    console.log(checkA, checkD)
    return (
        <div className="Login">
            { value }
            <input placeholder="Password" value={ value } onChange={ onChange }></input>
        </div>
    )
}

export default Login