export enum SupportedChainId {
  // MAINNET = 1,
  // ROPSTEN = 3,
  // RINKEBY = 4,
  // GOERLI = 5,
  // KOVAN = 42,
  POLYGON_MUMBAI = 80001,
  // LOCALHOST = 31337
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export const RIDER_MUMBAI_ADDRESS =
  '0xf40835485B3C70327DF06aA783f68540c8D604B2';
export const DRIVER_MUMBAI_ADDRESS =
  '0x4129740D1CD170604F4067AF3c98883Dc781cf7D';
