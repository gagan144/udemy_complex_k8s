// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import OtherPage from './OtherPage';
import Fib from './Fib';


function App() {
    return (
        <Router>

            <div className="App">
                <header className="App-header" style={{"minHeight": "unset"}}>
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    <h1>Udemy complex application</h1>
                    <h2>Version: 1.0.6</h2>

                    <div style={{"padding": "20px", "color": "white"}}>
                        <Link to="/">Home</Link>
                        &nbsp;&nbsp;
                        <Link to="/otherpage">Other Page</Link>
                    </div>
                </header>

                <div style={{"padding": "20px"}}>
                    <Route exact path="/" component={Fib} />
                    <Route path="/otherpage" component={OtherPage} />
                </div>

                <div align="center" style={{marginTop: '30px'}}>
                    By: Gagandeep Singh
                </div>
            </div>

        </Router>
    );
}

export default App;
