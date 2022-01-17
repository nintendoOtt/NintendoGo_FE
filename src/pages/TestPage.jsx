/* eslint-disable array-callback-return */
import React from 'react'
import { Link } from 'react-router-dom'

import { cartItemsVar } from 'apollo'
import { EXCHANGE_RATES } from 'apollo/user'
import { useQuery } from '@apollo/client'

function TestPage() {

    const a = 3;
    function ExchangeRates() {
        const { loading, error, data } = useQuery(EXCHANGE_RATES, { variables: { a } });
  
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

      
    
        data.rates.map(({rate}) => {
          cartItemsVar([...cartItemsVar(), rate])
        })
        
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
      <Link to='/myParty'>aass</Link>
      <ExchangeRates />
    </div>
  )
}

export default TestPage
