import InputForm from './Components/InputForm';
import SalaryTable from './Components/SalaryTable';
import TaxTable from './Components/TaxTable';
import CompTable from './Components/CompTable';

export default function Home() {
  return (
    <body>
      <main className=''>
        <div className='flex gap-6  justify-center '>
          <InputForm />
          <SalaryTable />
          <TaxTable />
          <CompTable />
        </div>
      </main>
    </body>
  );
}
