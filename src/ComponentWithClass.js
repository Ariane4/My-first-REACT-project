//imrc
import React, { Component } from 'react';
import Component1 from './ComponentWithFunction';

//cc
class Component2 extends Component {
    state = {}
    render() {
        return (
            <div>
                imrc + cc
            </div>
        );
    }
}

export default Component2