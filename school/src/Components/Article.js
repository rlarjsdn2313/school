import React, { useState } from 'react'
import cookie from 'react-cookies'

function Article(props) {
    const [data, setData] = useState(0)

    fetch('http://localhost:4000/api/read/' + props.no + '/' + cookie.load('password'))
        .then(res => res.json())
        .then(res => setData(res))

    if (data.no == undefined) {
        return (
            <div className="Article">
                <h1>Error</h1>
            </div>
        )
    }
    return (
        <div className="Article">
            <h1>{data.date[0]}년 {data.date[1]}월 {data.date[2]}일</h1>
            <div>
                {data.article}
            </div>
        </div>
    )
}

export default Article