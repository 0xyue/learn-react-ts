import React from 'react';
import {useParams} from "react-router-dom";

function Detail() {
    const params = useParams();
    return (
        <div>
            Detail-{params.filmId}
        </div>
    );
}

export default Detail;