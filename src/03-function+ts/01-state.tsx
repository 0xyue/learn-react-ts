import React, {useState} from 'react';

function App() {
    // 泛型约束
    const [name, setName] = useState<string>("xiaoming");
    return (
        <div>
            app-{name.substring(0, 1).toUpperCase() + name.substring(1)}
            <button onClick={() => {
                setName("aaa")
            }
            }>click
            </button>
        </div>
    );
}

export default App;