import React, { Component } from 'react';

class setState extends Component {
    // React will run this method before anything else
    constructor() {
        super();

        // passing state with an object, using setState.
        this.state = {
        name: {
            firstName: 'Tho', 
            lastName: 'Trenité'
        },
        company: 'Google'
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                <p>
                    Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
                </p>
        
                {/* One way to write setState code */}
                {/* <button onClick={() => { 
                    this.setState({name: {firstName: 'AJ', lastName: 'Robijn'}})
                }}>Change name</button> */}
                    
                {/* Optimal way to write setState code in class components */}
                <button onClick={() => { 
                    this.setState((state, props) => {
                    return { 
                        name: {firstName: 'De React', lastName: 'Master'}
                    }
                    }, 
                    // This function is going to run only after all state changes are applied.
                    () => {
                    console.log(this.state)
                    })            
                }}>
                    Change name</button>
                </header>
            </div>
        );
    }
}

export default setState;