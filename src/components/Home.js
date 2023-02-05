import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home =()=> {
  const contacts = useSelector(state=>state);
  const dispatch = useDispatch();
  const deleteContact = (id)=>{dispatch({type:"DELETE_CONTACT",payload:id});
     toast.success("To do list deleted successfully!");
};
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-end my-5 ml-auto">
                <Link to="/add" className="btn btn-dark">Add To do list</Link>
                </div>
                <table className="table table-hover table-striped table-bordered">
                    <tr className="text-white bg-primary text-center">
                      <th scope="col">Id</th>
                      <th scope="col">Note</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                      {
                        contacts.map((contact,id)=>(
                          <tr key={id}>
                            <td  className="text-white bg-primary text-center">{id + 1}</td>
                            <td  className="text-white bg-primary text-center">{contact.note}</td>
                            <td  className="text-white bg-primary text-center">{contact.description}</td>
                            <td  className="text-white bg-primary text-center"><Link to={`/edit/${contact.id}`} type="button" className="btn btn-success me-4">Edit</Link>
                      <button type="button" onClick={()=>deleteContact(contact.id)} className="btn btn-danger">Delete</button></td>
                          </tr>
                        ))
                      }
                </table>
            
        </div>
    </div>
  )
}

export default Home;
