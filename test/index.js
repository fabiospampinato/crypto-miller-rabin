
/* IMPORT */

import sieve from 'crypto-sieve';
import {describe} from 'fava';
import isProbablyPrime from '../dist/index.js';

/* MAIN */

describe ( 'Crypto Miller Rabin', it => {

  it ( 'works perfectly for primes <= 10M', t => {

    const primes = sieve ( 10_000_000 ).map ( BigInt );
    const primesSet = new Set ( primes );

    for ( let i = 0n; i <= 10_000_000n; i += 1n ) {

      const expected = primesSet.has ( i );
      const actual = isProbablyPrime ( i );

      t.is ( expected, actual );

    }

  });

});
