export default function TaxTable() {
  return (
    <div className='flex flex-col gap-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-700'>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Federal</th>
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
            <td>10%</td>
            <td>Val</td>
          </tr>
          <tr>
            <td>$10,001 - $50,000</td>
            <td>20%</td>
            <td>Val</td>
          </tr>
          <tr>
            <td>$50,001 - $100,000</td>
            <td>30%</td>
            <td>Val</td>
          </tr>
          <tr>
            <td>$100,001 - $250,000</td>
            <td>35%</td>
            <td>Val</td>
          </tr>
          <tr>
            <td>Above $250,000</td>
            <td>40%</td>
            <td>Val</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan={3}>Provincial</th>
          </tr>
          <tr>
            <th>Tax Bracket</th>
            <th>Tax Rate</th>
            <th>Applied</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$0 - $15,000</td>
            <td>8%</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>$15,001 - $40,000</td>
            <td>12%</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>$40,001 - $80,000</td>
            <td>18%</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>$80,001 - $150,000</td>
            <td>25%</td>
            <td>VAL</td>
          </tr>
          <tr>
            <td>Above $150,000</td>
            <td>30%</td>
            <td>VAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
