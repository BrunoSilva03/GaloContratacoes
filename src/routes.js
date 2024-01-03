import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Jogadores from './pages/Jogadores';
import GerenciarJogadores from './pages/GerenciarJogadores'
import Navbar from './layoults/Navbar';

function RoutesApp() {
    return(
        <>
        <Navbar />
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>

                <Route path="/jogadores" element={<Jogadores/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default RoutesApp