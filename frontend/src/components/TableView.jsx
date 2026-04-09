export default function TableView({ data, loading }) {
  if (loading) return <p className="empty-state">Loading...</p>;
  if (!data) return <p className="empty-state">Click "Fetch" to load data.</p>;
  if (data.length === 0) return <p className="empty-state">No records found.</p>;

  const columns = Object.keys(data[0]);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {columns.map((col) => <th key={col}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => <td key={col}>{row[col] ?? "—"}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
