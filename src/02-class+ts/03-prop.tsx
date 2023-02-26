import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Child name={"0xyue"}/>
            </div>
        );
    }
}

interface IProps {
    name: string
}

class Child extends Component<IProps, any> {
    render() {
        return (
            <div>
                Child-{this.props.name}
            </div>
        );
    }
}


export default App;