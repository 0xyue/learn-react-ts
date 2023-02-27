import React from 'react';

function App() {
    return (
        <div>
            app
            <Child1 name={"0xyue"}/>
            <Child2 name={"0xyue"}/>
        </div>
    );
}

interface IProps {
    name: string
}

function Child1(props: IProps) {
    return (
        <div>
            child1-{props.name}
        </div>
    )
}

const Child2: React.FC<IProps> = (props) => {
    return (
        <div>
            child2-{props.name}
        </div>
    )
}

export default App;