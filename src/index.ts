
/* IMPORT */

import {PRIMES_1000} from './constants';
import getRandomInRange from 'crypto-random-in-range';
import fme from 'fast-mod-exp';

/* MAIN */

//URL: https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test

const isProbablyPrime = ( n: bigint, k: number = 8 ): boolean => {

  /* FAST EXACT CHECKS */

  for ( const prime of PRIMES_1000 ) {

    if ( n % prime === 0n ) return n === prime;

  }

  if ( n <= 1000n ) return false;

  /* PROBABILITISTIC CHECKS */

  let s = 0n;
  let d = ( n - 1n );

  while ( ( d & 1n ) === 0n ) {

    s += 1n;
    d >>= 1n;

  }

  for ( let i = 0; i < k; i++ ) {

    const a = getRandomInRange ( 2n, n - 2n );

    let x = fme ( a, d, n );
    let y = 0n;

    for ( let j = 0; j < s; j++ ) {

      y = fme ( x, 2n, n );

      if ( y === 1n && x !== 1n && x !== ( n - 1n ) ) return false;

      x = y;

    }

    if ( y !== 1n ) return false;

  }

  return true;

};

/* EXPORT */

export default isProbablyPrime;
