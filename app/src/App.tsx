import React from 'react';

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return <div>{message}</div>
}

export default App;

// import React from 'react';

// interface AppProps {
//  message: string;
// }

// const App: React.FC<AppProps> = ({ message }) => {
//  return <div>{message}</div>;
// };

// export default App;