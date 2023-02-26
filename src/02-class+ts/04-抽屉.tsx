import React, {Component} from 'react';

class App extends Component {
    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                <Navbar title={"首页"} cb={() => {
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }
                }/>
                {this.state.isShow && <Sidebar/>}
            </div>
        );
    }
}

interface IProps {
    title: string,
    cb: () => void
}

class Navbar extends Component<IProps, any> {
    render() {
        return (
            <div>
                Navbar-{this.props.title}
                <button onClick={() => {
                    this.props.cb()
                }
                }>抽屉
                </button>
            </div>
        )
    }
}

class Sidebar extends Component<any, any> {
    render() {
        return (
            <div>
                Sidebar
            </div>
        )
    }
}

export default App;