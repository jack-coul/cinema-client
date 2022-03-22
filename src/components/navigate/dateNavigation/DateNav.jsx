import React from 'react';

import Today from './Today';
import Tomorrow from './Tomorrow';

const DateNav = () => {
    return (
        <div>
            <Today/>
            <Tomorrow/>
        </div>
    );
};

export default DateNav;