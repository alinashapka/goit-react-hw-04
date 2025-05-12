import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({items}) {
    return (<table className={clsx(css.container)}>
  <thead className={clsx(css.header)}>
    <tr className={clsx(css.headerRow)}>
      <th className={clsx(css.headerRowEl)}>Type</th>
      <th className={clsx(css.headerRowEl)}>Amount</th>
      <th className={clsx(css.headerRowEl)}>Currency</th>
    </tr>
  </thead>

        <tbody className={clsx(css.body)}>
            {items.map(item => (
<tr key={item.id} className={clsx(css.row)}>
      <td className={clsx(css.rowEl, css.text)}>{item.type}</td>
      <td className={clsx(css.rowEl)}>{item.amount}</td>
      <td className={clsx(css.rowEl)}>{item.currency}</td>
    </tr>
            ))}
  </tbody>
</table>

    )
}