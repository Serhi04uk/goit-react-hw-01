import cssTr from "./tran.module.css";

function TransactionHistor({ all }) {
  return all.map((tran, i) => {
    return (
      <tr key={tran.id} className={i % 2 ? cssTr.grey : cssTr.ney}>
        <td>{tran.type}</td>
        <td>{tran.amount}</td>
        <td>{tran.currency}</td>
      </tr>
    );
  });
}

export default function TranAllMarcuk({ items }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionHistor all={items} />
        </tbody>
      </table>
    </>
  );
}
