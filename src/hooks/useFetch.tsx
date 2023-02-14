import React, { useEffect, useState } from 'react';

const useFetch = () => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log('Hello World!');
  }, []);

  return <div>useFetch</div>;
};

export default useFetch;
