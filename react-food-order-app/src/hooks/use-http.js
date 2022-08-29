import React, { useState, useCallback } from "react";

const useHttp = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeRequest = useCallback(async (requestData, requestFn) => {
    setIsLoading(true);
    try {
      const response = await fetch( requestData.url,
                                  {
                                    method: requestData.method ? requestData.method : 'GET',
                                    headers: requestData.headers ? requestData.headers : {},
                                    body: requestData.body ? JSON.stringify(requestData.body) : null 
                                  });
        
        if(!response.ok) 
          throw new Error('Something went wrong');
        
        const resData = await response.json();
        requestFn(resData);
    } catch (err) {
      setIsError(true);
      console.log(err.message);
    }
    setIsLoading(false); 
  }, [])

  return {
    isLoading,
    isError,
    makeRequest
  }
}

export default useHttp;