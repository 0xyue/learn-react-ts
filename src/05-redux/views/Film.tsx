import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface IFilmItem {
    filmId: number,
    name: string
}

function Film() {
    const [list, setList] = useState([]);
    const navigator = useNavigate()
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16748088144356071795720193","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
            .then(res => {
                console.log("Film-data", res.data.data.films)
                setList(res.data.data.films)
            })
        return () => {

        };
    }, []);


    return (
        <div>
            Film
            {
                list.map((item: IFilmItem) =>
                    <li
                        key={item.filmId}
                        onClick={() => {
                            navigator(`/detail/${item.filmId}`)
                        }}
                    >{item.name}</li>
                )
            }
        </div>
    );
}

export default Film;