import React, {Component} from 'react';
import IndexRouter from "./router/IndexRouter";
import store from "./redux/store";

class App extends Component {
    state = {
        isShow: store.getState().tabbar.isShow
    }

    componentDidMount() {
        store.subscribe(() => {
            console.log("App-store", store.getState())
            this.setState({
                isShow: store.getState().tabbar.isShow
            })
        })
    }

    render() {
        return (
            <div>
                <IndexRouter/>
                {this.state.isShow && <div>Tabbar</div>}
            </div>
        );
    }
}

export default App;