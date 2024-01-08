import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Jogadores from './pages/Jogadores';
import GerenciarJogadores from './pages/GerenciarJogadores'
import Navbar from './layoults/Navbar';
import Footer from './layoults/Footer';

function RoutesApp() {
    return(
        <>
        <Navbar />
        
            <Routes>
                <Route  path="/galocontratacoes" element={<Home/>}/>

                <Route path="/jogadores" element={<Jogadores/>}/>

                <Route path="/gerenciar-jogadores" element={<GerenciarJogadores/>}/>
            </Routes>
       <Footer />
        </>
    )
}

export default RoutesApp