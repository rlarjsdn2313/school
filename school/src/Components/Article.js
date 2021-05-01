import React, { useState } from 'react'
import Parser from 'html-react-parser';
function Article(props) {
    const [data, setData] = useState(0)
    
    fetch('http://192.168.219.186:4000/api/read/' + props.no + '/' + props.password)
        .then(res => res.json())
        .then(res => setData(res))

    if (data === 0) {
        return (
            <div className="Article">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className="Article">
                <h1 className="date">{ data.date[0] }년 { data.date[1] }월 { data.date[2] }일</h1>
                <div className="content">
                    {Parser(data.article)}
                </div>
            </div>
        )
    }
}

export default Article