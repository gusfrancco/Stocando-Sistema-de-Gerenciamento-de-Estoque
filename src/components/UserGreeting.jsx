import React, { useState } from "react";

function UserGreeting({ user }) {
  return (
    <div>
      <p>Bem-vindo {user}!</p>
    </div>
  );
}

export default UserGreeting;
