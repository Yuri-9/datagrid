import React from 'react';

function User ({name, surname, date}) {
    
    return (
        <div>
            <p>{`${ name }${ surname}${date}`}</p>
        </div>
    )
}

export default User;