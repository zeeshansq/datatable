import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

import './App.css';

DataTable.use(DT);

function App() {
  const columns = [
    { data: 'name' },
    { data: 'position' },
    { data: 'office' },
    { data: 'start_date' },
    { data: 'salary' },
  ];

  return (
    <>
      <div>
        <h1>Ajax data source table</h1>
        <h2>DataTables + React example</h2>
        <p>
          This example demonstrates the <code>datatables.net-react</code>
          package being used to display a DataTable with data sourced Ajax.
        </p>
        <p>
          Full documentation for the DataTables React component is{' '}
          <a href="https://datatables.net/manual/react">
            available in the DataTables manual
          </a>
          .
        </p>

        <DataTable
           ajax="data.json"
           columns={columns}
           className="display"
           >
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </>
  );
}
export default App;
