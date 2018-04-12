import React, { Component } from 'react';
import Button from './components/Button';


class App extends Component {
    render() {
        return (

            <Button
                renderAs="button"
                className="button"
                color="info">btn kongx</Button>

        );
    }
}

export default App;