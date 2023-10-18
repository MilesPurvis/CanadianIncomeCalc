export default function CompTable() {
  return (
    <div className='flex flex-col gap-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-700'>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Comprehensive</th>
          </tr>
          <tr>
            <th>Tax Bracket</th>
            <th>Tax Rate</th>
            <th>Applied</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$0 - $10,000</td>
            <td>5%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>$10,001 - $20,000</td>
            <td>10%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>$20,001 - $40,000</td>
            <td>15%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>$40,001 - $80,000</td>
            <td>20%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>$80,001 - $150,000</td>
            <td>25%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>$150,001 - $300,000</td>
            <td>30%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>$300,001 - $500,000</td>
            <td>35%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>$500,001 - $1,000,000</td>
            <td>40%</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Above $1,000,000</td>
            <td>45%</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Canadian Pension Plan (CPP)</th>
          </tr>
          <tr>
            <th>Max Contribution</th>
            <th>Rate</th>
            <th>Applied</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$3,166.45</td>
            <td>5.45%</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Employment Insurance (EI)</th>
          </tr>
          <tr>
            <th>Max Contribution</th>
            <th>Rate</th>
            <th>Applied</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$889.54</td>
            <td>1.58%</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Personal Account</th>
          </tr>
          <tr>
            <th>Max Contribution</th>
            <th>Rate</th>
            <th>Applied</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$5,000.00</td>
            <td>Varies</td>
            <td>Depends</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
