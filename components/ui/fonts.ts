import { Roboto, Manrope } from 'next/font/google';
 
export const roboto = Roboto({
    weight: ['100','300','400', '500', '700', '900'], // Choose the weights you want to include
    subsets: ['latin'], // Choose the subsets you need
  });

  export const mr = Manrope({
    weight: ['300','400', '500', '700'], // Choose the weights you want to include
    subsets: ['latin'], // Choose the subsets you need
  });
