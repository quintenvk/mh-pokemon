import React from 'react';
import propTypes from 'prop-types';
import PokeStatsCol from './UI/PokeStatsCol';

const PokeStatsRow = ({ name, value }) => (
  <tr>
    <PokeStatsCol header>{name}</PokeStatsCol>
    <PokeStatsCol>{value}</PokeStatsCol>
  </tr>
);
PokeStatsRow.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
};

PokeStatsRow.defaultProps = {
  name: '',
  value: '',
};

const PokeStatsTable = ({ stats }) => (
  <table>
    <tbody>
      {stats.map((
        { base_stat, stat }, // eslint-disable-line camelcase
      ) => (
        <PokeStatsRow name={stat.name} value={base_stat} key={stat.name} /> // eslint-disable-line camelcase
      ))}
    </tbody>
  </table>
);

PokeStatsTable.propTypes = {
  stats: propTypes.arrayOf(propTypes.object),
};

PokeStatsTable.defaultProps = {
  stats: [],
};

export default PokeStatsTable;
