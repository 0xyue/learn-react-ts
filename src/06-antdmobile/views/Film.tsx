import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Button, Space, Swiper, SwiperRef, Toast, Image} from "antd-mobile";
import styles from "./Film.less"

interface IFilmItem {
    filmId: number,
    name: string,
    poster: string
}

function Film() {
    const [list, setList] = useState([]);
    const navigator = useNavigate()
    const ref = useRef<SwiperRef>(null)
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
    }, []);


    return (
        <div>
            <Space direction='vertical' block>
                <Swiper allowTouchMove={false} ref={ref} loop>
                    {
                        list.map((item: IFilmItem, index) =>
                            <Swiper.Item key={index}>
                                <div
                                    className={styles.content}

                                    onClick={() => {
                                        Toast.show(`你点击了卡片 ${index + 1}`)
                                    }}
                                >
                                    <Image src={item.poster} width="100%" height={500} fit='fill'/>
                                </div>
                            </Swiper.Item>
                        )
                    }
                </Swiper>
                <Space justify='around' block>
                    <Button
                        color='primary'
                        onClick={() => {
                            ref.current?.swipePrev()
                        }}
                    >
                        上一张
                    </Button>
                    <Button
                        color='primary'
                        onClick={() => {
                            ref.current?.swipeNext()
                        }}
                    >
                        下一张
                    </Button>
                </Space>
            </Space>
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