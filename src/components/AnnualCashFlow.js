// AnnualCashFlow.js
import React, { useState } from 'react';

export const AnnualCashFlow = () => {
  const [rentalIncome, setRentalIncome] = useState("");
  const [operatingExpenses, setOperatingExpenses] = useState("");
  const [mortgagePayments, setMortgagePayments] = useState("");
  const [taxes, setTaxes] = useState("");
//   const [mortgageInterest, setMortgageInterest] = useState("");
  const [otherExpenses, setOtherExpenses] = useState("");
  const [cashFlow, setCashFlow] = useState("")

  const calculateAnnualCashFlow = () => { 
    const annualCashFlow = rentalIncome - operatingExpenses - mortgagePayments - taxes - otherExpenses;
    setCashFlow(annualCashFlow)
  };

  return (
    <div>
      <h2 className='font-roboto_condensedBold text-2xl'>Annual Cash Flow Calculator</h2>
      

      <div className='flex flex-col gap-2 py-6 w-52'>
        <label htmlhtmlhtmlFor="rental-income">Rental Income</label>
        <input
          type="number"
          className='bg-white border-solid border-2 '
          name="rental-income"
          id="rental-income"
          placeholder="Rental Income"
          value={rentalIncome}
          onChange={(e) => setRentalIncome(parseFloat(e.target.value) || 0)}
        />
      </div>
      
      <div className='flex flex-col gap-2 py-6 w-52'>
        <label htmlhtmlhtmlFor="operating-expenses">Operating Expenses</label>
        <input
          type="number"
          className='bg-white border-solid border-2 '
          name="operating-expenses"
          id="operating-expenses"
          placeholder="Operating Expenses"
          value={operatingExpenses}
          onChange={(e) => setOperatingExpenses(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className='flex flex-col gap-2 py-6 w-52'>
        <label htmlhtmlhtmlFor="mortgage-payments">Mortgage Payments</label>
        <input
          type="number"
          className='bg-white border-solid border-2 '
          name="mortgage-payments"
          id="mortgage-payments"
          placeholder="Mortgage Payments"
          value={mortgagePayments}
          onChange={(e) => setMortgagePayments(parseFloat(e.target.value) || 0)}
        />
      </div>
      
      <div className='flex flex-col gap-2 py-6 w-52'>
        <label htmlhtmlhtmlFor="taxes">Taxes</label>
        <input
          type="number"
          className='bg-white border-solid border-2 '
          name="taxes"
          id="taxes"
          placeholder="Taxes"
          value={taxes}
          onChange={(e) => setTaxes(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className='flex flex-col gap-2 py-6 w-52'>
        <label htmlhtmlhtmlFor="other-expenses">Other Expenses</label>
        <input
          type="number"
          placeholder="Other Expenses"
          value={otherExpenses}
          onChange={(e) => setOtherExpenses(parseFloat(e.target.value) || 0)}
          className='bg-white border-solid border-2 '
          name="other-expenses"
          id="other-expenses"
        />
      </div>
      
      <button className="bg-primary text-gray-100 rounded-lg p-2 mt-4 " onClick={calculateAnnualCashFlow}>Calculate Annual Cash Flow</button>
      <p className='my-10'>Annual Cash Flow: {cashFlow}%</p>
    </div>
  );
};