import './Wallet.css'

import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { injected } from 'connectors'
import { useEffect, useState } from 'react'
import { shortenAddress, shortenBalance } from 'utils'

export default function Wallet() {
  const { active, account, activate, library } = useWeb3React()
  const [ethBalance, setEthBalance] = useState<string | undefined>()

  useEffect(() => {
    async function getBalance() {
      try {
        const bal = await library.getBalance(account)
        bal && setEthBalance(formatEther(bal))
      } catch (err) {
        // Replace with toasts
        console.error(err, 'Error getting eth balance')
      }
    }
    if (active) {
      getBalance()
    }
  }, [active, account, library])
  const handleConnect = () => {
    activate(injected)
  }
  if (!active) {
    return (
      <div className="nav-wallet">
        <div>Switch Network to Mumbai</div>
        <button onClick={handleConnect}>Connect MetaMask</button>
      </div>
    )
  }
  return (
    <div className="nav-wallet">
      <div>Account: {shortenAddress(account)}</div>
      <div>Ξ {shortenBalance(ethBalance)}</div>
    </div>
  )
}
