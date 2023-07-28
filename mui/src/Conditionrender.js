import React from 'react'
function Conditionrender() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? (

        <h1>Welcome, User!</h1>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}

export default Conditionrender;

