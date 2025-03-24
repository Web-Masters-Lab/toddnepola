'use client'
import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PieChart } from './PieChart'
import classNames from 'classnames';
// import { useRouter } from 'next/router';

const TAXES = '0.20';

export const AnnualCashFlow = () => {
  // const router = useRouter();
  const [rentalIncome, setRentalIncome] = useState('');
  const [operatingExpenses, setOperatingExpenses] = useState("");
  const [mortgagePayments, setMortgagePayments] = useState("");
  const [cashFlow, setCashFlow] = useState("")
  const [incomeTax, setIncomeTax] = useState("")
  const [pieChartData, setPieChartData] = useState(null);

  const calculateAnnualCashFlow = () => {
    const parsedObject = {
      rentalIncome: parseFloat(rentalIncome.replace(/[^\d.-]/g, '')) || 0,
      operatingExpenses: parseFloat(operatingExpenses.replace(/[^\d.-]/g, '')) || 0,
      mortgagePayments: parseFloat(mortgagePayments.replace(/[^\d.-]/g, '')) || 0,
    }
    const profit = parsedObject.rentalIncome - parsedObject.operatingExpenses - parsedObject.mortgagePayments;
    const afterTaxes = (profit - (profit * TAXES)).toFixed(2);
    const incomeTaxes = (profit * TAXES).toFixed(2);
    setIncomeTax(incomeTaxes)
    setCashFlow(afterTaxes)

    const chartData = [
      { label: 'Rental Income', value: parsedObject.rentalIncome },
      { label: 'Operating Expenses', value: parsedObject.operatingExpenses  },
      { label: 'Mortgage Payments',  value: parsedObject.mortgagePayments },
      { label: 'Income Taxes', value:  incomeTaxes },
      { label: 'Income', value: afterTaxes }
    ];
    setPieChartData(chartData);
  };

const pieChartClasses = classNames(
  'lg:overflow-hidden lg:transition-[max-height] lg:duration-300 lg:ease-in-out',
  {
    'max-h-0': !pieChartData,
    'max-h-[500px]': pieChartData // Adjust this value based on your maximum expected height
  }
);

  const inputClasses = 'bg-gray-100 border-solid border-b-2 rounded p-1 border-black focus:border-primary focus:border-2 focus-visible:outline-none'

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col bg-gray-200 lg:grid lg:grid-cols-3 gap-8 py-4 w-full border-y-2 lg:border-x-2 lg:bg-white  border-primary lg:rounded-2xl my-14'>
        <div className='p-8 mx-8'>
          <h2 className='font-roboto_condensedBold text-2xl'>Income Calculator</h2>
          <div className='flex flex-col gap-2 py-4 w-52'>
            <label htmlFor="rental-income"><span className='flex gap-2 items-center'>Rental Income <a className='tooltip tooltip-bottom lg:tooltip-right' data-tip="Amount you charge for rent"><InformationCircleIcon className='size-5 btn-ghost' data-tip="Amount you are charging to rent the property"/></a></span></label>
              <IMaskInput
                mask="$num" // Static dollar sign followed by a numeric mask
                lazy={false} // Disable lazy mode for immediate formatting
                blocks={{
                  num: {
                    mask: Number, // Numeric mask
                    thousandsSeparator: ',', // Optional: Add commas for thousands
                    radix: '.', // Optional: Decimal separator
                    scale: 2, // Optional: Allow two decimal places
                  },
                }}
                value={rentalIncome} // Bind value to state
                onAccept={(value) => setRentalIncome(value)} // Update state with formatted value
                className={inputClasses}
                placeholder="Rental Income"
                autoComplete='off'
                name="rental-income"
                id="rental-income"
              />  
          </div>
          
          <div className='flex flex-col  gap-2 py-6 w-52'>
            <label htmlFor="operating-expenses"><span className='flex gap-2 items-center'>Operating Expenses <a className='tooltip tooltip-bottom lg:tooltip-right' data-tip="Operational costs for maintenance of property"><InformationCircleIcon className='size-5 btn-ghost' data-tip="Amount you are charging to rent the property"/></a></span></label>
            <IMaskInput
              mask="$num"
              lazy={false}
              blocks={{
                num: {
                  mask: Number, // Numeric mask
                  thousandsSeparator: ',', // Optional: Add commas for thousands
                  radix: '.', // Optional: Decimal separator
                  scale: 2, // Optional: Allow two decimal places
                },
              }}
              className={inputClasses}
              name="operating-expenses"
              id="operating-expenses"
              placeholder="Operating Expenses"
              autoComplete='off'
              value={operatingExpenses}
              onAccept={(value) => setOperatingExpenses(value || 0)}
            />
          </div>

          <div className='flex flex-col gap-2 py-6 w-52'>
            <label htmlFor="mortgage-payments"><span className='flex gap-2 items-center'>Mortgage Payments<a className='tooltip tooltip-bottom lg:tooltip-right' data-tip="Payments made to the bank for the mortgage"><InformationCircleIcon className='size-5 btn-ghost'/></a></span></label>
            <IMaskInput
              mask="$num"
              lazy={false}
              blocks={{
                num: {
                  mask: Number, // Numeric mask
                  thousandsSeparator: ',', // Optional: Add commas for thousands
                  radix: '.', // Optional: Decimal separator
                  scale: 2, // Optional: Allow two decimal places
                },
              }}
              className={inputClasses}
              name="mortgage-payments"
              id="mortgage-payments"
              autoComplete='off'
              placeholder="Mortgage Payments"
              value={mortgagePayments}
              onAccept={(value) => setMortgagePayments(value || 0)}
            />
          </div>
          <button className="bg-primary text-gray-100 rounded-lg p-2 mt-4 " onClick={calculateAnnualCashFlow}>Calculate Cash Flow</button>
        </div>
        <div className='px-8 lg:p-8 mx-8'>
          <h2 className='font-roboto_condensedBold text-2xl justify-start flex'>Results</h2>
          <p className='my-4 font-bold justify-start flex'>Income: ${cashFlow}</p>
          <p className='my-4 font-bold justify-start flex'>Income Taxes: ${incomeTax}</p>
        </div>
        <div id='pie-chart' className={pieChartClasses}>
          <div className=' mx-2 bg-white justify-center flex'>
            <PieChart data={pieChartData} />
          </div>
        </div>
      </div>
    </section>
  );
};