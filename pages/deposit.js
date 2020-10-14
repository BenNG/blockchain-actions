import React, { useEffect, useState } from 'react';
import web3 from '../ethereum/web3';
import useAccounts from '../hooks/useAccounts';

const HelloWorld = () => {
  const [balance, setBalance] = useState(null);
  const accounts = useAccounts();

  useEffect(() => {
    const getBalance = async () => {
      setBalance(await web3.eth.getBalance(Array.isArray(accounts) && accounts[0]));
    };
    getBalance();
  }, [accounts.length]);

  return <div>Hello World !</div>;
};
export default HelloWorld;
