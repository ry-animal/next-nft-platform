
# SC-App-v3 (SC dAPP)

SC-App-v3 🤖 is a decentralized application (dApp) marketplace for NFTs (Non-Fungible Tokens) built using Next.js, a popular React framework. This project aims to provide a user-friendly platform for users to browse, purchase, and sell unique digital assets on the Ethereum blockchain. It also features a backend powered by Prisma with MongoDB as the database.

## Modules

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/snowcrash-labs/sc-app-v3.git
cd sc-app-v3
```

### Install dependencies



```bash
yarn install
```

### Set up environment variables

Copy `/env/.env.dev` to `.env.local` and update the variables with your own values:

```bash
cp .env.development .env.local
```

### Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To deploy the app on Vercel or another platform, follow the official Next.js [deployment guide](https://nextjs.org/docs/deployment).

