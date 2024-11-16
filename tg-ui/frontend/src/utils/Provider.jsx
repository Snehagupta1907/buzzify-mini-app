'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}) {
  return<PrivyProvider
  appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
  config={{
  
    appearance: {
      theme: "dark",
      accentColor: "#080d27",
    },
  }}
  clientId='client-WY5dQwGXwr4wkDfz1CizvJK3c5r2FHEdqqs3g3z8szt3g'
>{children}</PrivyProvider>;
}