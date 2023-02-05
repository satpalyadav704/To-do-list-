import {React, useEffect ,useState} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {useParams,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact =()=> {
    const {id} = useParams();
    const dispatch = useDispatch();
  const navigate = useNavigate();
    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact=> contact.id === parseInt(id));
    useEffect(()=>{
  if(currentContact){
     setNote(currentContact.note);
     setDescription(currentContact.description);
  }
    },
    [currentContact]);
  const [note, setNote] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e)=> {
    e.preventDefault();
  
    const data = {
      id: parseInt(id),
      note,
      description
    };
    dispatch({type:"UPDATE_CONTACT", payload: data});
    toast.success("List updated sucessfully!!")
    navigate('/');
  };
  
    
  return (
    <div className="container">
      {currentContact? (
        <>
    <h1 className="text-center">Add To do list {id}</h1>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="text" class="form-label">Add Note</label>
        <input type="text" class="form-control" value={note} onChange={e=>setNote(e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="text" class="form-label">Description</label>
        <input type="text" class="form-control" value={description} onChange={e=>setDescription(e.target.value)} />
      </div>
      <div className="form-group text-end">
                <button type="submit" className="btn btn-primary me-4">Update Note</button>
                <button type="button" className="btn btn-danger">cancel</button>
              </div>
    </form>
    </>
     ) : (
      <h1 className="text-center">No To do list Found in this id  {id}</h1>
    )}
        </div>
  );
};

export default EditContact
