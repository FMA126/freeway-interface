import { useEagerConnect, useInactiveListener } from '../../hooks/web3'

export default function Web3ReactManager({ children }: { children: JSX.Element }) {
  // const { active } = useWeb3React()

  // try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEager = useEagerConnect()
  // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEager)

  // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error
  // if (triedEager && !active) {
  //   return <div>Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device.</div>
  // }

  return children
}
