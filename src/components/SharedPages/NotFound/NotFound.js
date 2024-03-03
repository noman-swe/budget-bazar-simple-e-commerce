import React from 'react';

import error404 from '../../../images/404-error-page.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={error404} className='w-full mt-0' alt="" />
        </div>
    );
};

export default NotFound;