import React, {Component} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Film from "../views/Film";
import Cinema from "../views/Cinema";
import Center from "../views/Center";
import Detail from "../views/Detail";

class IndexRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/film" element={<Film/>}/>
                        <Route path="/cinema" element={<Cinema/>}/>
                        <Route path="/center" element={<Center/>}/>
                        <Route path="/detail/:filmId" element={<Detail/>}/>

                        {/* 重定向*/}
                        <Route path="/" element={<Navigate to="/film"/>}/>
                        {/* 404*/}
                        <Route path="*" element={<div>404</div>}/>

                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default IndexRouter;