
  import { useState, useEffect } from 'react';

 import addInfo from './addForm.module.css';
 import AlbumContent from '../AlbumContent/albumContent';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Reducer/habitReducer';
import { toast , ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import AlbumNav from '../AlbumNav/albumNav';

 function AddForm() {
   const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "" });
   const [pic, setPic] = useState(false);
   const [album,setAlbum]=useState('');
   // const [album, setAlbum] = useState(() => {
   //   const savedAlbum = localStorage.getItem('habbit');
  //   return savedAlbum ? JSON.parse(savedAlbum) : [];
   // });
   useEffect(()=>{
     async function fetchData(){
       //localStorage.setItem('habbit', JSON.stringify(album));
     
       setAlbum(album);
    }
    fetchData();
   },[album]);

  

   const clear = () => {
     setFormData({ name: "" });
   }

   async  function  add  (e) {
   e.preventDefault();
   if (formData.name) { // Ensure the album name is not empty
      setAlbum(prevAlbum => [{ id:album.length,name: formData.name }, ...prevAlbum]);
       setPic(true);
       clear(); 
       console.log("formData",formData);
       dispatch(actions.add(formData.name));
      toast.success("New Habbit Added");
     }
   }

   return (
     pic ? (
       <>
         <AlbumContent album={album} />
         <ToastContainer/>
       </>
     ) : (
       <>
        <div className={addInfo.form}>
           <form>
             <h3>Create a Habbit</h3>
             <input
               value={formData.name}
               onChange={(e) => setFormData({ name: e.target.value })}
               className={addInfo.input}
               placeholder="Enter a habbit"
              required
             />
             <div>
               <button type="button" className={`${addInfo.button} ${addInfo.clear}`} onClick={clear}>Clear</button>
               <button type="submit" className={`${addInfo.button} ${addInfo.add}`} onClick={add}>Add</button>
             </div>
           </form>
         </div>
        <ToastContainer />
       </>
    )
   );
 }

 export default AddForm;

