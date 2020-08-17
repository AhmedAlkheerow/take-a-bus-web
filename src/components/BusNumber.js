import React from 'react';
import PropTypes from 'prop-types';
export default function BusNumber({ bus }) {
  return <td className="border-t px-4 py-2">{bus.busNo} EBL - IRQ</td>;
}
BusNumber.propTypes = {
  busNo: PropTypes.number.isRequired,
  bus: PropTypes.object.isRequired,
};
