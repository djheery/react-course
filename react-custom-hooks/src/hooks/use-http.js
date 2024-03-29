import React, { useState, useEffect, useCallback }from 'react'

const useHTTP = (() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const sendRequests = useCallback(async (requestConfig, applyDataFn) => {
    try {
      const response = await fetch(
        requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      const data = await response.json();

      applyDataFn(data);


    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    
    setIsLoading(false);
  }, [])

    return {
      isLoading,
      error,
      sendRequests
    }; 

})

export default useHTTP;