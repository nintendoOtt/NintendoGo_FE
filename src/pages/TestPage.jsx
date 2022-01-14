import React from 'react'
import { gql, useQuery } from '@apollo/client'

function TestPage() {
    const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;
    function ExchangeRates() {
        const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
    
        return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
                <p>
                {currency}: {rate}
                </p>
            </div>
        ));
    }

  return (
    <div>
      test
      <ExchangeRates />
    </div>
  )
}

export default TestPage