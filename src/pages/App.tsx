import './App.css'

import Wallet from 'components/Wallet/Wallet'
import Collection from 'pages/collection/Collection'
import { Link, Route, Routes } from 'react-router-dom'

import Web3ReactManager from '../components/Web3ReactManager/Web3ReactManager'
import Home from './home/Home'
import MintDriver from './Mint/mintDriver/MintDriver'
import MintRider from 'pages/Mint/mintRider/MintRider'

export default function App() {
  return (
    <Web3ReactManager>
      <main>
        <nav>
          <div className="nav-logo-container">
            <Link to="/">FreeWay DAO</Link>
          </div>
          <div className="nav-links-container">
            <Link to="/mint-driver">Mint Driver</Link>
            <Link to="/mint-rider">Mint Rider</Link>
            <Link to="/collection">My Collection</Link>
          </div>
          <div className="nav-wallet-container">
            <Wallet />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint-driver" element={<MintDriver />} />
          <Route path="/mint-rider" element={<MintRider />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </main>
    </Web3ReactManager>
  )
}
