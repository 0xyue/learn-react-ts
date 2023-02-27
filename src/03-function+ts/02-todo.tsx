import React, {useRef, useState} from 'react';

function App() {
    const [list, setList] = useState<string[]>([]);
    const text = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input ref={text}/>
            <button onClick={() => {
                const myText = (text.current as HTMLInputElement).value
                console.log(myText)
                setList([...list, myText])
            }}>click
            </button>

            {
                list.map((item, index) =>
                    <li key={index}>{item}</li>
                )
            }
        </div>
    );
}

export default App;