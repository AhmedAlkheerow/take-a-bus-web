import React from 'react';
import PropTypes from 'prop-types';
export default function ShiftTime({ bus }) {
  return (
    <td className="border-t px-4 py-2">
      {bus.startTime} - {bus.endTime}
    </td>
  );
}
ShiftTime.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  bus: PropTypes.object.isRequired,
};
