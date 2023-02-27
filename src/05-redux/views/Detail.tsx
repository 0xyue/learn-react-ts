import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import store from "../redux/store";
import {tabbarHide, tabbarShow} from "../redux/slice/tabbarSlice";

function Detail() {
    const params = useParams();

    useEffect(() => {
        store.dispatch(tabbarHide())
        return () => {
            store.dispatch(tabbarShow())
        };
    }, []);


    return (
        <div>
            Detail-{params.filmId}
        </div>
    );
}

export default Detail;