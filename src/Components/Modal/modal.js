
// import React, { useState, useEffect } from 'react';
// import styles from './modal.module.css';

// const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// const Modal = ({ text, initialStatus, onClose }) => {
//   const [status, setStatus] = useState(initialStatus);

//   useEffect(() => {
//     setStatus(initialStatus);
//   }, [initialStatus]);

//   const handleStatusChange = (index) => {
//     const newStatus = [...status];
//     newStatus[index] = newStatus[index] === 'completed' ? 'incomplete' :
//                       newStatus[index] === 'incomplete' ? 'none' : 'completed';
//     setStatus(newStatus);
//   };

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <button className={styles.close} onClick={() => onClose(status)}>✖</button>
//         <h4>{text}</h4>
//         <div className={styles.daysContainer}>
//           {daysOfWeek.map((day, index) => (
//             <div
//               key={index}
//               className={styles.dayBox}
//               onClick={() => handleStatusChange(index)}
//               style={{ backgroundColor: status[index] === 'completed' ? 'green' :
//                        status[index] === 'incomplete' ? 'red' : 'gray' }}
//             >
//               {day}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React, { useState, useEffect } from 'react';
import styles from './modal.module.css';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Modal = ({ text, initialStatus, onClose }) => {
  const [status, setStatus] = useState(initialStatus);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setStatus(initialStatus);
    setIsDirty(false);
  }, [initialStatus]);

  const handleStatusChange = (index) => {
    const newStatus = [...status];
    newStatus[index] = newStatus[index] === 'completed'
      ? 'incomplete'
      : newStatus[index] === 'incomplete'
      ? 'none'
      : 'completed';
    setStatus(newStatus);
    setIsDirty(true); // Mark as dirty when status changes
  };

  const handleSave = () => {
    onClose(status);
  };

  const handleReset = () => {
    setStatus(initialStatus);
    setIsDirty(false); // Reset dirty state
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.close}
          onClick={() => onClose(status)}
          aria-label="Close Modal"
        >
          ✖
        </button>
        <h4 className={styles.habitTitle}>{text}</h4>
        <div className={styles.daysContainer}>
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={styles.dayBox}
              onClick={() => handleStatusChange(index)}
              style={{
                backgroundColor: status[index] === 'completed'
                  ? 'green'
                  : status[index] === 'incomplete'
                  ? 'red'
                  : 'gray'
              }}
              aria-label={`${day}: ${status[index]}`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.save} onClick={handleSave} disabled={!isDirty}>
            Save Changes
          </button>
          <button className={styles.reset} onClick={handleReset} disabled={!isDirty}>
            Reset
          </button>
          <button className={styles.cancel} onClick={() => onClose(initialStatus)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

