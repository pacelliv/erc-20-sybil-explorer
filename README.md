# Sybilscan

### ⚡️⚡️ Live Demo: https://odd-cloud-3941.on.fleek.co/

### ⚡️⚡️ ipfs://Qmd4PwrMdpkqbqmmYbBA1pTEaeCC8Rw1VCoMVtuAEReEwL

### ⚡️⚡️ Check the smart contracts [here](https://github.com/pacelliv/erc20-sybil-token).

## Overview

This UI consists of three pages:

-   Transactions: displays a table, built with `react-table`, with the latest transactions of the token after making an API call to the Ethereum blockchain using Alchemy. The table implements the `usePagination`, `useFlexLayout` and `useResizeColumns` APIs to create a responsive and dynamic table.

-   Faucet: this page displays an UI that allow users to interact with the faucet smart contract to request SYL tokens every 10 minutes.

-   Dashboard: displays a set of cards with relevant statistics about the token after making an API call to the network using Alchemy.

Users must log their wallet to the Göerli network in order to launch and interact with the app. Placeholders and warning messages have been designed to notify users of this necessity.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

This project uses [styled-components](https://styled-components.com/docs/basics) to enhance styling in React components.

## Site deployed on Fleek

The easiest way to build website and apps: permissionless, trustless, censorship resistant, and free of centralized gatekeepers. Check [fleek.co](https://fleek.co/).

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   Check [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
-   [react-jazzicon](https://www.npmjs.com/package/react-jazzicon)
-   [React Table](https://react-table-v7.tanstack.com/)
-   [React Moralis](https://github.com/MoralisWeb3/react-moralis) - thin React wrapper around
-   [Alchemy](https://www.alchemy.com/) - powerful set of web3 development tools to build and scale your dApp
