import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWrapper = ({ children }) => {
  // Replace with your Auth0 domain and client ID
  const domain = 'your-auth0-domain';
  const clientId = 'your-auth0-client-id';

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWrapper;
