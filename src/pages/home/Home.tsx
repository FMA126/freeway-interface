import './Home.css'
export default function Home() {
  return (
    <div className="home-container">
      <h1><span className="freeway-header">FreeWay </span><span className="dao-header">DAO</span></h1>
      <div className="pallete-emoji">🛣</div>
      <p>
        The Freeway DAO is a community owned ride sharing platform.  There are riders and drivers.  There will be two different NFT types available to mint: Driver NFT, and Rider NFT.  There will also be a governance token, FREEWAY, that will allow 
        holders to participate in the governance of the platform.  At launch there will be a limited amount of the Driver NFTs
        available to mint but the community can raise the driver ceiling by vote.  
      </p>
      <p>
        By initially limiting the number of drivers,
        the Driver NFT will have a high demand.  To drive for the Freeway DAO a driver needs to own a Driver NFT.

        The tokenomics of the FREEWAY token is not decided yet but a significant percentage will be issued to users of the 
        platform.
      </p>
    </div>
  )
}
