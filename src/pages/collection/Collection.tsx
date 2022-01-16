import './Collection.css'

import { BigNumber } from '@ethersproject/bignumber'
import { useWeb3React } from '@web3-react/core'
import { FreeWayRider__factory, FreeWayDriver__factory } from 'abis/types'
import { RIDER_MUMBAI_ADDRESS, DRIVER_MUMBAI_ADDRESS } from 'constants/chains'
import { useEffect, useState } from 'react'

export default function Collection() {
  const { active, account, library } = useWeb3React()
  const [tried, setTried] = useState(false)
  const [balRider, setBalRider] = useState<BigNumber | undefined>()
  const [balDriver, setBalDriver] = useState<BigNumber | undefined>()
  const [riderURI, setRiderURI] = useState<string | undefined>()
  const [driverURI, setDriverURI] = useState<string | undefined>()
  const [images, setImages] = useState<any[]>([])
  useEffect(() => {
    async function fetchUserColorNfts() {
      try {
        const signer = library.getSigner(account)

        const RiderContract = FreeWayRider__factory.connect(RIDER_MUMBAI_ADDRESS, signer)
        const riderBal = await RiderContract.balanceOf(account || '')
        const riderURI = await RiderContract.tokenURI(1)

        const DriverContract = FreeWayDriver__factory.connect(DRIVER_MUMBAI_ADDRESS, signer)
        const driverBal = await DriverContract.balanceOf(account || '')
        const driverURI = await DriverContract.tokenURI(1)

        const opeaSeaResRider = await fetch(
          `https://testnets-api.opensea.io/api/v1/assets/?owner=${account}&asset_contract_address=${RIDER_MUMBAI_ADDRESS}&order_direction=desc&offset=0&limit=20`,
          { method: 'GET' }
        )
        const opeaSeaResDriver = await fetch(
          `https://testnets-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=${DRIVER_MUMBAI_ADDRESS}&order_direction=desc&offset=0&limit=20`,
          { method: 'GET' }
        )
        const responseRider = await opeaSeaResRider.json()
        const responseDriver = await opeaSeaResDriver.json()
        const jsonResponseRider = await responseRider
        const jsonResponseDriver = await responseDriver
        setBalRider(riderBal)
        setBalDriver(driverBal)
        setImages([...jsonResponseRider?.assets, ...jsonResponseDriver?.assets])
      } catch (err) {
        console.error(err, 'Error fetching balance')
      }
    }
    if (!tried && active) {
      fetchUserColorNfts()
      setTried(true)
    }
  }, [tried, active, account, library])
  return (
    <>
      <h1>My Collection</h1>
      {balRider && <div>Number of Rider NFTs collected: {balRider.toString()}</div>}
      {balDriver && <div>Number of Driver NFTs collected: {balDriver.toString()}</div>}
      <div className="nft-image-collection">
        {images.length > 0 &&
          images.map((image) => (
            <div key={image.id} className="nft-image-wrapper">
              <img alt="Color NFT" src={image.image_original_url} />
              <div>Index: {image.token_id}</div>
              <div>
                Contract:{' '}
                <a target="_blank" href={image.permalink} rel="noreferrer">
                  View on OpenSea
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
