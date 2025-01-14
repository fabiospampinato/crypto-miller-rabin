
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

  it ( 'works for negative numbers', t => {

    t.is ( isProbablyPrime ( -1n ), false );
    t.is ( isProbablyPrime ( -10000n ), false );

  });

  it ( 'works for 0 and 1', t => {

    t.is ( isProbablyPrime ( 0n ), false );
    t.is ( isProbablyPrime ( 1n ), false );

  });

});
