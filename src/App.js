import logo from './logo.svg';
import './App.css';
import Meni from "./Components/Meni";
import Prva from "./Components/Prva";
import Slideshow from "./Components/Slideshow";
import Izdelki from "./Components/Izdelki";

const {detect} = require('detect-browser');
const browser = detect();


function App() {


    return (
        <>
            <Meni/>
            <Slideshow/>
            <Izdelki/>

        </>

    );
}

export default App;
