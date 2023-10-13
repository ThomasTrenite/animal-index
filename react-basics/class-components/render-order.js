import React, { Component } from 'react';

class renderOrder extends Component {
    // Will render first: React will run this method before anything else
    constructor() {
        super();
        console.log('Constructor')
    }
    
    // componentDidMount() will run whenever the component mounts. Mounting is the first time React renders a component onto the page.
    // Only happens once. Only remounts when its unmounted. Therefore it makes sense to load in data in the componentDidMount() function.
    
    // Will render third
    componentDidMount() {
        console.log('componentDidMount')
    }

     // Will render second, and again after the component has mounted.
    render() {
        console.log('Render')
        return (
            <div>
                
            </div>
        );
    }
}

export default renderOrder;