
/* IMPORT */

import benchmark from 'benchloop';
import isProbablyPrime from '../dist/index.js';

/* MAIN */

benchmark ({
  name: 'crypto-miller-rabin',
  iterations: 1,
  fn: () => {
    for ( let i = 0n; i < 10_000_000n; i++ ) {
      isProbablyPrime ( i );
    }
  }
});

benchmark.summary ();
