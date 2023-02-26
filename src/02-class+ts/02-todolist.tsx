import React, {Component} from 'react';

interface IState {
    text1: string,
    text2: string,
    list: string[]
}

class App extends Component<any, IState> {
    state = {
        text1: "",
        text2: "",
        list: []
    }

    // 需要加泛型
    myRef = React.createRef<HTMLInputElement>()

    render() {
        return (
            <div>
                <input type="text" value={this.state.text1} onChange={(evt) => {
                    this.setState({
                        text1: evt.target.value
                    })
                }
                }/>
                <button onClick={() => {
                    console.log("input1:", this.state.text1)
                }
                }>click
                </button>
                <br/>
                <input ref={this.myRef}/>
                <button onClick={() => {
                    const inputText = (this.myRef.current as HTMLInputElement).value  // 类型断言
                    console.log("input2:", inputText)
                    this.setState({
                        list: [...this.state.list, inputText]
                    });

                    (this.myRef.current as HTMLInputElement).value = ""
                }
                }>add
                </button>
                {
                    this.state.list.map((item, index) =>
                        <li key={index}>
                            {item}
                            <button onClick={() => {
                                let newList = [...this.state.list]
                                newList.splice(index, 1)
                                this.setState({
                                    list: newList
                                })
                            }
                            }>del
                            </button>
                        </li>
                    )
                }
            </div>
        );
    }
}

export default App;