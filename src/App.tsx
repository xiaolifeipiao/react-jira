import { useAuth } from 'context/auth-context';
import React from 'react';
import { UnauthenticatedApp } from 'unauthenticated-app';
import { AuthenticatedApp } from 'authenticated-app';
import 'App.css';
import { ErrorBoundary } from 'components/error-boundry';
import { FullPageErrorFallback } from 'components/lib';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
