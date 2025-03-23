'use client'
import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { InformationCircleIcon } from '@heroicons/react/24/outline'
// import { PieChart } from './PieChart'
// import classNames from 'classnames';
// import { useRouter } from 'next/router';

export const CashOnCashReturn = () => {
  

  const [propertyValue, setPropertyValue] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [years, setYears] = useState('');
  const [cashInvested, setCashInvested] = useState('');
  const [annualCashFlow, setAnnualCashFlow] = useState('');
  const [results, setResults] = useState(null);
  // const [pieChartData, setPieChartData] = useState(null);

  const parsedObject = {
    propertyValue: parseFloat(propertyValue.replace(/[^\d.-]/g, '')) || 0,
    cashInvested: parseFloat(cashInvested.replace(/[^\d.-]/g, '')) || 0,
    annualCashFlow: parseFloat(annualCashFlow.replace(/[^\d.-]/g, '')) || 0,
    growthRate: parseFloat(growthRate.replace(/[^\d.-]/g, ''))/100 || 0,
    numYears: parseFloat(years.replace(/[^\d.-]/g, '')) || 0,
  }

  const calculateReturn = () => {
    // const value = parseFloat(propertyValue);
    // const rate = parseFloat(growthRate) / 100; // convert % to decimal
    // const numYears = parseFloat(years);
    // const invested = parseFloat(cashInvested);
    // const cashFlow = parseFloat(annualCashFlow);
    

    if (parsedObject.propertyValue > 0 && parsedObject.growthRate >= 0 && parsedObject.numYears > 0 && parsedObject.cashInvested > 0 && parsedObject.annualCashFlow >= 0) {
      const futureValue = parsedObject.propertyValue * Math.pow(1 + parsedObject.growthRate, parsedObject.numYears);
      const appreciationGain = futureValue - parsedObject.propertyValue;
      const totalCashFlow = parsedObject.annualCashFlow * parsedObject.numYears;
      const totalGain = appreciationGain + totalCashFlow;
      const cashOnCashReturn = (totalGain / parsedObject.cashInvested) * 100;
      // const chartData = [
      //   { label: 'Total Cash Invested', value: parsedObject.rentalIncome },
      //   { label: 'Operating Expenses', value: parsedObject.operatingExpenses  },
      //   { label: 'Mortgage Payments',  value: parsedObject.mortgagePayments },
      //   { label: 'Capital Gains Taxes', value:  incomeTaxes },
      //   { label: 'Income', value: afterTaxes }
      // ];
      // setPieChartData(chartData);
      setResults({
        cashOnCashReturn: cashOnCashReturn.toFixed(0),
        appreciationGain: appreciationGain.toFixed(2),
        totalCashFlow: totalCashFlow.toFixed(2),
        totalGain: totalGain.toFixed(2),
        futureValue: futureValue.toFixed(2),
      });
    } else {
      setResults(null);
    }
  };
  // const router = useRouter();
//   const [rentalIncome, setRentalIncome] = useState('');
//   const [operatingExpenses, setOperatingExpenses] = useState("");
//   const [mortgagePayments, setMortgagePayments] = useState("");
//   const [cashFlow, setCashFlow] = useState("")
//   const [incomeTax, setIncomeTax] = useState("")
//   const [pieChartData, setPieChartData] = useState(null);

//   const calculateAnnualCashFlow = () => {
    // const parsedObject = {
    //   rentalIncome: parseFloat(rentalIncome.replace(/[^\d.-]/g, '')) || 0,
    //   operatingExpenses: parseFloat(operatingExpenses.replace(/[^\d.-]/g, '')) || 0,
    //   mortgagePayments: parseFloat(mortgagePayments.replace(/[^\d.-]/g, '')) || 0,
    // }
//     const profit = parsedObject.rentalIncome - parsedObject.operatingExpenses - parsedObject.mortgagePayments;
//     const afterTaxes = (profit - (profit * TAXES)).toFixed(2);
//     const incomeTaxes = (profit * TAXES).toFixed(2);
//     setIncomeTax(incomeTaxes)
//     setCashFlow(afterTaxes)

    
//   };

// const pieChartClasses = classNames(
//   'overflow-hidden transition-[max-height] duration-300 ease-in-out',
//   {
//     'max-h-0': !pieChartData,
//     'max-h-[500px]': pieChartData // Adjust this value based on your maximum expected height
//   }
// );

  const inputClasses = 'bg-gray-100 border-solid border-b-2 rounded p-1 border-black focus:border-primary focus:border-2 focus-visible:outline-none'

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col bg-gray-200 lg:grid lg:grid-cols-3 gap-8 py-4 w-full border-y-2 lg:border-x-2 lg:bg-white  border-primary lg:rounded-2xl my-14'>
        <div className='p-8 mx-8'>
          <h2 className='font-roboto_condensedBold text-2xl'>Cash on Cash Calculator</h2>
          <div className='flex flex-col gap-2 py-4 w-52'>
            <label htmlFor="property-value"><span className='flex gap-2 items-center'>Property Value<a className='tooltip tooltip-right' data-tip="The assessed value of the property"><InformationCircleIcon className='size-5 btn-ghost' data-tip="Amount you are charging to rent the property"/></a></span></label>
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
                value={propertyValue} // Bind value to state
                onAccept={(value) => setPropertyValue(value)} // Update state with formatted value
                className={inputClasses}
                placeholder="Property Value"
                autoComplete='off'
                name="property-value"
                id="property-value"
              />  
          </div>
          
          <div className='flex flex-col  gap-2 py-6 w-52'>
            <label htmlFor="growth-rate"><span className='flex gap-2 items-center'>Annual Growth Rate <a className='tooltip tooltip-right' data-tip="Annual percentage of increase in property value"><InformationCircleIcon className='size-5 btn-ghost' data-tip="Annual percentage of increase in property value"/></a></span></label>
            <IMaskInput
              mask="num%"
              lazy={false}
              blocks={{
                num: {
                  mask: Number,
                  min: 0,
                  max: 100,
                  scale: 2,
                  radix: '.',
                },
              }}
              className={inputClasses}
              name="growth-rate"
              id="growth-rate"
              placeholder="Annual Growth Rate (%)"
              autoComplete='off'
              value={growthRate}
              onAccept={(value) => setGrowthRate(value || '')}
            />
          </div>

          <div className='flex flex-col gap-2 py-6 w-52'>
            <label htmlFor="years"><span className='flex gap-2 items-center'>Years of Ownership <a className='tooltip tooltip-right' data-tip="Amount of years you plan to hold the property for ownership"><InformationCircleIcon className='size-5 btn-ghost'/></a></span></label>
            <IMaskInput
              mask="num"
              lazy={false}
              blocks={{
                num: {
                  mask: Number, // Numeric mask
                  min: 0,
                  max: 50,
                  radix: '.', // Optional: Decimal separator
                  scale: 2, // Optional: Allow two decimal places
                },
              }}
              className={inputClasses}
              name="years"
              id="years"
              autoComplete='off'
              placeholder="0-50"
              value={years}
              onAccept={(value) => setYears(value || 0)}
            />
          </div>
          <div className='flex flex-col gap-2 py-6 w-52'>
            <label htmlFor="annual-cash-flow"><span className='flex gap-2 items-center'>AnnualCashFlow <a className='tooltip tooltip-right' data-tip="Annual income received from the property"><InformationCircleIcon className='size-5 btn-ghost'/></a></span></label>
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
              name="annual-cash-flow"
              id="annual-cash-flow"
              autoComplete='off'
              placeholder="Annual Cash Flow"
              value={annualCashFlow}
              onAccept={(value) => setAnnualCashFlow(value || 0)}
            />
          </div>
          <div className='flex flex-col gap-2 py-6 w-52'>
            <label htmlFor="cash-invested"><span className='flex gap-2 items-center'>Cash Invested <a className='tooltip tooltip-right' data-tip="Money spent on the property including down payment, closing costs, and repairs"><InformationCircleIcon className='size-5 btn-ghost'/></a></span></label>
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
              name="cash-invested"
              id="cash-invested"
              autoComplete='off'
              placeholder="Cash Invested"
              value={cashInvested}
              onAccept={(value) => setCashInvested(value || 0)}
            />
          </div>
          <button className="bg-primary text-gray-100 rounded-lg p-2 mt-4 " onClick={calculateReturn}>Calculate Return</button>
          {/* <div className={`hidden lg:block ${pieChartClasses}`}>
            <div className='w-full justify-center flex'>
              <PieChart data={pieChartData} />
            </div>
          </div> */}
        </div>
        <div className='px-8 lg:p-8 mx-8'>
          <h2 className='font-roboto_condensedBold text-2xl justify-start flex'>Results</h2>
          <p className='my-4 font-bold justify-start flex'>Cash-On-Cash Return: {results?.cashOnCashReturn}%</p>
          <p className='my-4 font-bold justify-start flex'>Appreciation Gain: ${results?.appreciationGain}</p>
          <p className='my-4 font-bold justify-start flex'>Total Cash Flow: ${results?.totalCashFlow}</p>
          <p className='my-4 font-bold justify-start flex'>Total Gain: ${results?.totalGain}</p>
          <p className='my-4 font-bold justify-start flex'>Future Value: ${results?.futureValue}</p>
        </div>
        {/* <div id='pie-chart' className={pieChartClasses}>
          <div className=' mx-2 bg-white justify-center flex'>
            <PieChart data={pieChartData} />
          </div>
        </div> */}
      </div>
    </section>
  );
};