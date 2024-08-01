
import React, { useState, useEffect } from 'react';
import styles from './modal.module.css';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Modal = ({ text, initialStatus, onClose }) => {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const handleStatusChange = (index) => {
    const newStatus = [...status];
    newStatus[index] = newStatus[index] === 'completed' ? 'incomplete' :
                      newStatus[index] === 'incomplete' ? 'none' : 'completed';
    setStatus(newStatus);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => onClose(status)}>✖</button>
        <h4>{text}</h4>
        <div className={styles.daysContainer}>
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={styles.dayBox}
              onClick={() => handleStatusChange(index)}
              style={{ backgroundColor: status[index] === 'completed' ? 'green' :
                       status[index] === 'incomplete' ? 'red' : 'gray' }}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
