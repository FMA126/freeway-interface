export function shortenAddress(address: string | null | undefined): string | undefined {
  return address ? `${address.substring(0, 3)}...${address.substring(address.length - 4)}` : undefined
}

export function shortenBalance(balance: string | undefined): string | undefined {
  const indexOfDecimal = balance && balance.indexOf('.')
  return indexOfDecimal
    ? `${balance.substring(0, indexOfDecimal)}${balance.substring(indexOfDecimal, indexOfDecimal + 4)}`
    : undefined
}
