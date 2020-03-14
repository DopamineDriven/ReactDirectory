import React, { useContext } from 'react';
import TableAreaContext from '../utils/TableAreaContext.js';

const TableBody = () => {
    const context = useContext(TableAreaContext)

    // formatting DOB to 'merican standards (MM/DD/YYYY)
    // using .split and .join methods
    // date appears as follows in the api object
    // "date": "1962-02-17T03:11:10.394Z",
    // therefore, year[0], month[1], day[2] (split from T, time, as below)
    function FormatDOB(date) {
        const arrayDOB = date.split('-')
        const year = arrayDOB[0]
        const month = arrayDOB[1]
        const arrayDay = arrayDOB[2].split('T')
        const day = arrayDay[0]
        const formatDOB = [month, day, year].join('-')
        return formatDOB
    }

    return (
        <tbody>

        </tbody>
    )
}