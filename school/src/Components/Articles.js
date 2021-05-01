import React, { useState } from 'react'
import Article from './Article'
import { useCookies } from 'react-cookie';

function Articles() {
    const [data, setData] = useState(0)
    const [cookies] = useCookies(['password']);

    fetch('http://192.168.219.186:4000/api/read/0/' + cookies.password)
    .then(res => res.json())
    .then(res => setData(res))

    if (data === 0) {
        return (
            <div className="Articles">Loading...</div>
        )
    } else {
        let no_list = []
        for (var a = data.no; a >= 1; a--) {
            no_list.push(a)
        }

        no_list.reverse()

        const mapToComponent = no_list => {
            return no_list.map((no, i) => {
                return (<Article no={ no } password={ cookies.password } key={ i }></Article>)
            })
        }

        
        return (
            <div className="Articles">
                { mapToComponent(no_list)}
            </div>
        )


    }

}

export default Articles