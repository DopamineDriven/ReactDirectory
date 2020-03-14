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
            {context.devState.filteredUsers[0] !== undefined && context.devState.filteredUsers[0].name !== undefined ? (
                context.devState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        // this api uses uuid for user-sensitive login info
                        // this is confirmed via the use of postman to get the info
                        // example: "login": {"uuid": "80627358-57b1-4106-ad03-166933a31e7a",...}
                        // data-th is data for the table header corresponding to image
                        <tr key={login.uuid}>
                            <td className="align-middle" data-th="image">
                                <img 
                                    src={picture.medium} 
                                    alt={`profile image for ${name.first} ${name.last}`} 
                                    className="img-responsive"
                                />
                            </td>
                            <td className="align-middle" data-th="name">
                                {name.first} {name.last}
                            </td>
                            <td className="align-middle" data-th="phone">
                                {phone}
                            </td>
                            <td className="align-middle" data-th="email">
                                <a href={"mailto: " + email} target="__blank">
                                    {email}
                                </a>
                            </td>
                            <td className="align-middle" data-th="dob">
                                {FormatDOB(dob.date)}
                            </td>
                        </tr>
                    )
                })
            ) : (
                // empty else :( <></> ) to end ternary function
                <></>
            )}
        </tbody>
    )
}

export default TableBody;

// consider using syntax to have email open in default mailing app
// this can be achieved via 
// <a href={`mailto: ${email}`} target='__blank'>
//     {email}
// </a>

// update: syntax successfully incorporated