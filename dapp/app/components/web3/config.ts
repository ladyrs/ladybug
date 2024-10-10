import { getDefaultConfig } from 'connectkit'
import { createConfig, http } from 'wagmi'
import { linea, lineaSepolia } from 'wagmi/chains'

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [lineaSepolia, linea],
    transports: {
      // RPC URL for each chain
      [lineaSepolia.id]: http(),
      // [foundry.id]: http(),
      [linea.id]: http(),
    },
    // Required API Keys
    walletConnectProjectId: '',
    // Required App Info
    appName: 'Ladybug',
    // Optional App Info
    appDescription: 'ladybug',
    appUrl: '', // your app's url
    appIcon: '', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
)
