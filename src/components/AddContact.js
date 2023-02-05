import  {React, useState } from "react";
import { useSelector , useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = ()=> {
  const [note, setNote] = useState("");
  const [description, setDescription] = useState("");
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = (e)=> {
    e.preventDefault();

    if(!note ||!description){
      return toast.warning("Please fill in all fields!");
    }
    
    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      
      note,
      description
    };
    dispatch({type:"ADD_CONTACT", payload: data});
    toast.success("List added sucessfully!!")
    navigate('/');
  };
  

  return (
    <div className="container">
<h1 className="text-center">Add To do list</h1>
<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="text" class="form-label">Add Note</label>
    <input type="text" class="form-control" placeholder="add note" value={note} onChange={e=>setNote(e.target.value)} />
  </div>
  <div class="mb-3">
    <label for="text" class="form-label">Description</label>
    <input type="text" class="form-control" placeholder="add description" value={description} onChange={e=>setDescription(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
</form>
    </div>
  )
}

export default AddContact;
