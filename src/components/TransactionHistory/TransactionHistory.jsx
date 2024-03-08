import cssTr from "./transactionHistory.module.css";

// function Transaction({ item, idx }) {
//   return (

//   );
// }

export default function TransactionHistor({ items }) {
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
          {items.map((item, idx) => {
            return (
              <tr key={item.id} className={idx % 2 ? cssTr.grey : cssTr.ney}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
