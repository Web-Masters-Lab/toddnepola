// CashOnCashReturn.js
import React, { useState } from 'react';

export const CashOnCashReturn = () => {
  const [totalCashInvested, setTotalCashInvested] = useState(0);
  const [cashOnCashReturn, setCashOnCashReturn] = useState(0);
  const [annualCashFlow, setAnnualCashFlow] = useState(0)

  const calculateCashOnCashReturn = () => {
    if (totalCashInvested > 0) {
      const returnRate = (annualCashFlow / totalCashInvested) * 100;
      setCashOnCashReturn(returnRate);
    } else {
      setCashOnCashReturn(0);
    }
  };

  return (
    <div>
      <h2 className='font-roboto_condensedBold text-2xl'>Cash-on-Cash Return Calculator</h2>
      <div className='flex flex-col gap-2 py-6 w-52'>
        <label htmlFor="total-cash-invested">Total Cash Invested</label>
        <input
          type="number"
          className='bg-white border-solid border-2 '
          placeholder="Total Cash Invested"
          name="total-cash-invested"
          id="total-cash-invested"
          value={totalCashInvested}
          onChange={(e) => setTotalCashInvested(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className='flex flex-col gap-2 py-6 w-52'>
        <label htmlFor="annual-cash-flow">Annual Cash Flow</label>
        <input
          type="number"
          className='bg-white border-solid border-2 '
          placeholder="Annual Cash Flow"
          name="annual-cash-flow"
          id="annual-cash-flow"
          value={annualCashFlow}
          onChange={(e) => setAnnualCashFlow(parseFloat(e.target.value) || 0)}
        />
      </div>
      <button className="bg-primary text-gray-100 rounded-lg p-2 mb-10"  onClick={calculateCashOnCashReturn}>Calculate Cash-on-Cash Return</button>
      <p>Cash-on-Cash Return: {cashOnCashReturn.toFixed(2)}%</p>
    </div>
  );
};
