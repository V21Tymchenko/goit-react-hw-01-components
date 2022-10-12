import PropTypes from 'prop-types';

import {
  Table,
  TableHead,
  TableType,
  TableAmount,
  TableBody,
  TableCurrency,
  HeadAmount,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <TableHead>
        <tr>
          <th>Type</th>
          <HeadAmount>Amount</HeadAmount>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ currency, amount, type, id }) => {
          return (
            <tr key={id}>
              <TableType>{type}</TableType>
              <TableAmount>{amount}</TableAmount>
              <TableCurrency>{currency}</TableCurrency>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ),
};
