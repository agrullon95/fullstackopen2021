import React from 'react';

const Notification = ({ notification }) => {

    if (notification === null) {
        return null
    }

    const messageMapping = {
        UPDATE: 'success',
        ADD: 'success',
        ERROR: 'error',
        DELETE: 'success'
    }
    
    const messageType = notification && messageMapping[notification.type] ? messageMapping[notification.type]: null;

    return (
        <div className={messageType}>
            {notification.message}
        </div>
    )
}

export default Notification;