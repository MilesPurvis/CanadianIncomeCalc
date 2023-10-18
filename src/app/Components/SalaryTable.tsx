export default function SalaryTable() {
  return (
    <div className='flex flex-col gap-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-700 '>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Income Calculator (Gross Input)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly N. Sal.</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Hours/Day</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Gross Salary</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Net Salary</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Net Salary (Pre-CPP/EI)</td>
            <td>VAL</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan={3}>Income Calculator (Gross Input)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly Net Salary</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Bi-Weekly Net Salary</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Gross Salary</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Net Salary</td>
            <td>VAL</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan={3}>Sole Prop Billing Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily Hours</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Include CPP/EI</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Include HST</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>VAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
