import {Table, Headertable, Datatable} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Headertable>Type</Headertable>
          <Headertable>Amount</Headertable>
          <Headertable>Currency</Headertable>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <Datatable>{item.type}</Datatable>
              <Datatable>{item.amount}</Datatable>
              <Datatable>{item.currency}</Datatable>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
