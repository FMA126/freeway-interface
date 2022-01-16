import './MintRider.css'

import { useWeb3React } from '@web3-react/core'
import { FreeWayRider__factory } from 'abis/types'
import { RIDER_MUMBAI_ADDRESS } from 'constants/chains'

export default function MintRider() {
  // { active, account, activate, connector, deactivate, error, library }
  const { active, account, library } = useWeb3React()

  const handleRiderMint = async () => {
    const signer = library.getSigner(account)
    const riderContract = FreeWayRider__factory.connect(RIDER_MUMBAI_ADDRESS, signer)
    await riderContract.mintItem(account || '')
  }
  if (!active) {
    return (
      <>
        <div>Please download MetaMask</div>
      </>
    )
  }
  return (
    <div className="mint-container-rider">
      <h1>Mint Rider</h1>
      <button onClick={handleRiderMint}>
        Mint <span>🎢</span>
      </button>
    </div>
  )
}
