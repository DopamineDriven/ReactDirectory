import React from 'react';
import Wrapper from './components/Wrapper.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App () {
    return (
        <div className="App">
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
        </div>
    )
}

export default App;