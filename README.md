# Tact Jetton (Fungible Token) Implementation

## Overview

This project includes a complete setup for working with Tact-based smart contracts for Jettons. It provides:

- A preconfigured Tact compiler.
- Smart contracts written in the Tact language.
- TypeScript + Jest testing environment with `@ton/sandbox`.

## Goals

This implementation is fully compatible with the following TON standards:
- [TEP-64](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md),
- [TEP-74](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md),
- [TEP-89](https://github.com/ton-blockchain/TEPs/blob/master/text/0089-jetton-wallet-discovery.md).

You can use this implementation as an alternative to the reference Jetton contracts available in the [TON Blockchain repository](https://github.com/ton-blockchain/token-contract).

## Getting Started

### 1. Install Dependencies

Run the following command to install all required dependencies:

```bash
yarn install
```

### 2. Build Contracts

Compile the smart contracts with:

```bash
yarn build
```

### 3. Deploy Contracts

Customize your Jetton by editing the `contract.deploy.ts` file. This file also includes a detailed deployment guide. Deploy the contracts with:

```bash
yarn deploy
```

### 4. Test Contracts

Run tests in the `@ton/sandbox` environment:

```bash
yarn test
```
## Jetton Architecture

If you’re new to Jettons, refer to the [TON Jettons Processing](https://docs.ton.org/develop/dapps/asset-processing/jettons)

## Project Structure

Smart contracts themselves are located in the `sources/` directory.
```
sources/
    jetton_minter.tact 
    jetton_wallet.tact
    messages.tact 
```


Tests are locates in `sources/` directory.
```
sources/
    contrtact.spec.ts
```

Deployment script is located in `sources/` directory.
```
sources/
    contract.deploy.ts
```

Note, that tests and deployment script require the compiled contracts to be present in the `sources/output/` directory.
Also, additional utils from `sources/utils/` are used in tests and deployment script.

`tact.config.json` contains the configuration for the Tact compiler. In most cases, you don't need to modify this file.

## Best Practices

- For guidance on interacting with Jettons using Tact, check the [Jetton Cookbook](https://docs.tact-lang.org/cookbook/jettons/).
- Be cautious of fake messages sent by scammers. Read the [Security Best Practices](https://docs.tact-lang.org/book/security-best-practices/) for protection against fraudulent activities.
- Always consult the [official Tact documentation](https://docs.tact-lang.org/) for additional resources and support.

## License

This project is licensed under the MIT License.
