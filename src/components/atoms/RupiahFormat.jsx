import React from 'react'
import NumberFormat from 'react-number-format'

const RupiahFormat = ({ value = 0, displayType = 'text' }) => {
    return <NumberFormat
        value={value}
        displayType={displayType}
        thousandSeparator="."
        decimalSeparator=","
        prefix="Rp"
    />
}

export default RupiahFormat