import React, {useState} from 'react';

function App() {
    const [isShow, setIsShow] = useState(true);
    return (
        <div>
            <Navbar cb={() => {
                setIsShow(!isShow)
            }}/>
            {isShow && <Sidebar/>}
        </div>
    );
}

interface IProps {
    title?: string,
    cb: () => void
}

function Navbar(props: IProps) {
    return (
        <div>
            Navbar
            <button onClick={() => {
                props.cb()
            }}>抽屉</button>
        </div>
    )
}

function Sidebar() {
    return (
        <div>
            Sidebar
        </div>
    )
}

export default App;