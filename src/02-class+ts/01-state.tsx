import React, {Component} from 'react';

interface IState {
    name: string
}

// 泛型 <约定属性，约定状态>
class App extends Component<any, IState> {
    state = {
        name: "xiaoming"
    }

    render() {
        return (
            <div>
                app-{this.state.name.substring(0, 1).toUpperCase() + this.state.name.substring(1)}
                <button onClick={() => {
                    this.setState({
                        name: "daming"
                    })
                }
                }>click
                </button>
            </div>
        );
    }
}

export default App;