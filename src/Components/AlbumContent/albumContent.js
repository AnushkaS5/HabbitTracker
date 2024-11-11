
// import { useState, useEffect } from 'react';
// import each from './eachpic.module.css';
// import content from './albumContent.module.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { actions,habbitSelector } from '../../redux/Reducer/habitReducer';

// import Modal from '../Modal/modal';
// import AlbumCard from '../AlbumCard/albumCard';
// function AlbumContent() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedHabit, setSelectedHabit] = useState(null);
//   const [habitStatuses, setHabitStatuses] = useState({});
//   const [showNav, setShowNav] = useState(false);
//   const habbits = useSelector(habbitSelector);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
  
//   useEffect(() => {
//     const storedStatuses = JSON.parse(localStorage.getItem('habitStatuses')) || {};
//     setHabitStatuses(storedStatuses);
//   }, []);

//   useEffect(() => {
//     const initialStatuses = habbits.reduce((acc, habit) => {
//       if (!acc[habit.text]) {
//         acc[habit.text] = Array(7).fill('none');
//       }
//       return acc;
//     }, {});

//     setHabitStatuses((prevStatuses) => ({
//       ...prevStatuses,
//       ...initialStatuses
//     }));
//   }, [habbits]);

//   useEffect(() => {
//     localStorage.setItem('habitStatuses', JSON.stringify(habitStatuses));
//   }, [habitStatuses]);

//   const handleAlbumClick = (habit) => {
//     setSelectedHabit(habit);
//     setShowModal(true);
//   };

//   const handleCloseModal = (status) => {
//     setShowModal(false);
//     setHabitStatuses((prevStatuses) => ({
//       ...prevStatuses,
//       [selectedHabit.text]: status,
//     }));
//   };

//   const handleBackClick = () => {
//     setShowNav(true);
   
//   };

//   const handleDelete = (index, e) => {
//     e.stopPropagation(); // Prevent the click event from bubbling up
//     const ans = window.confirm("Are you sure??");
//     if(ans){
//       dispatch(actions.delete(index));
      
//     }
   
//   };

//   return (
//     <>
//       {showNav ? (
//         <AlbumCard />
       
//       ) : (
//         <>
//           <img
//             className={content.back}
//             onClick={handleBackClick}
//             src="https://cdn-icons-png.flaticon.com/128/8022/8022662.png"
//             alt="Back"
//             style={{ width: '70px', height: '70px', cursor: 'pointer' }}
//           />

//           <header className={content.card1}>
//             {habbits.map((habit, index) => {
//               const status = habitStatuses[habit.text] || Array(7).fill('none');
//               const completedDays = status.filter((day) => day === 'completed').length;
//               return (
//                 <div key={index} className={each.album} onClick={() => handleAlbumClick(habit)}>
//                   <img src="https://cdn-icons-png.flaticon.com/128/13675/13675738.png"/>
//                   <h3>{habit.text}</h3>
//                   <div className={each.del}>
//                     <img
//                       onClick={(e) => handleDelete(index, e)}
//                       src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
//                       alt="Delete"
//                       style={{ cursor: 'pointer' }}
//                     />
//                   </div>
//                   <p>{completedDays}/7 days</p>
//                 </div>
//               );
//             })}
//           </header>

//           {showModal && (
//             <Modal
//               text={selectedHabit.text}
//               initialStatus={habitStatuses[selectedHabit.text] || Array(7).fill('none')}
//               onClose={handleCloseModal}
//             />
//           )}
          
//         </>
//       )}
//     </>
//   );
// }

// export default AlbumContent;
import { useState, useEffect } from 'react';
import each from './eachpic.module.css';
import content from './albumContent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions, habbitSelector } from '../../redux/Reducer/habitReducer';
import Modal from '../Modal/modal';
import AlbumCard from '../AlbumCard/albumCard';

function AlbumContent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [habitStatuses, setHabitStatuses] = useState({});
  const [showNav, setShowNav] = useState(false);
  const habbits = useSelector(habbitSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedStatuses = JSON.parse(localStorage.getItem('habitStatuses')) || {};
    setHabitStatuses(storedStatuses);
  }, []);

  useEffect(() => {
    const initialStatuses = habbits.reduce((acc, habit) => {
      if (!acc[habit.text]) {
        acc[habit.text] = Array(7).fill('none');
      }
      return acc;
    }, {});

    setHabitStatuses((prevStatuses) => ({
      ...prevStatuses,
      ...initialStatuses
    }));
  }, [habbits]);

  useEffect(() => {
    localStorage.setItem('habitStatuses', JSON.stringify(habitStatuses));
  }, [habitStatuses]);

  const handleAlbumClick = (habit) => {
    setSelectedHabit(habit);
    setShowModal(true);
  };

  const handleCloseModal = (status) => {
    setShowModal(false);
    setHabitStatuses((prevStatuses) => ({
      ...prevStatuses,
      [selectedHabit.text]: status,
    }));
  };

  const handleBackClick = () => {
    setShowNav(true);
  };

  const handleDelete = (index, e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    const ans = window.confirm("Are you sure you want to delete this habit?");
    if (ans) {
      dispatch(actions.delete(index));
    }
  };

  return (
    <>
      {showNav ? (
        <AlbumCard />
      ) : (
        <>
          <img
            className={content.back}
            onClick={handleBackClick}
            src="https://cdn-icons-png.flaticon.com/128/8022/8022662.png"
            alt="Back"
            style={{ width: '70px', height: '70px', cursor: 'pointer' }}
          />

          <header className={content.card1}>
            {/* {habbits.map((habit, index) => {
              const status = habitStatuses[habit.text] || Array(7).fill('none');
              const completedDays = status.filter((day) => day === 'completed').length;
              return (
                <div 
                  key={index} 
                  className={each.album} 
                  onClick={() => handleAlbumClick(habit)}
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/13675/13675738.png" 
                    alt="Habit Icon"
                  />
                  <h3>{habit.text}</h3>
                  <div className={each.del}>
                    <img
                      onClick={(e) => handleDelete(index, e)}
                      src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
                      alt="Delete"
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <p>{completedDays}/7 days</p>
                </div>
              );
            })} */}
            {habbits.map((habit, index) => {
    const status = habitStatuses[habit.text] || Array(7).fill('none');
    const completedDays = status.filter((day) => day === 'completed').length;
    return (
        <div key={index} className={each.album} onClick={() => handleAlbumClick(habit)}>
          <img 
                    src="https://cdn-icons-png.flaticon.com/128/13675/13675738.png" 
                    alt="Habit Icon"
                  />
            <h3>{habit.text}</h3> {/* Ensure habit.text is the right property */}
            <div className={each.del}>
                <img
                    onClick={(e) => handleDelete(index, e)}
                    src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
                    alt="Delete"
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <p>{completedDays}/7 days</p> {/* Ensure this line is visible */}
        </div>
    );
})}

          </header>

          {showModal && (
            <Modal
              text={selectedHabit.text}
              initialStatus={habitStatuses[selectedHabit.text] || Array(7).fill('none')}
              onClose={handleCloseModal}
            />
          )}
        </>
      )}
    </>
  );
}

export default AlbumContent;
