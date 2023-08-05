# Crypto Miller-Rabin

Implementation of the Miller-Rabin primality test.

## Install

```sh
npm install --save crypto-miller-rabin
```

## Usage

```ts
import isProbablyPrime from 'crypto-miller-rabin';

// Check if a bigint is probably prime, performing 8 rounds of Miller-Rabin tests

isProbablyPrime ( 428619803581219889005329334991561182527277683715078274359377824192296037302435017260422513n, 8 ); // => true
```

## License

MIT © Fabio Spampinato
