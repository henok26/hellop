import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState(" ");
  const [role, setRole] = useState(" ");
  const [img ,setImg]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className=" bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-auto  block m-2">+ Add Employee</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>+ Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e)=>{
        
            handleClose();
            e.preventDefault();
            setName("");
            setImg("");
            setRole("");
console.log(props.id,name,role)
            props.newEmployee(name,role,img);}}
        className="w-full max-w-sm" id='editmodal'>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={name}
    onChange={ (e)=>{setName(e.target.value)}}
      />
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
    Role
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" type="text" value={role}
        onChange={ (e)=>{setRole(e.target.value)}}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
    Image URL
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="img" placeholder='https:google.com' type="text" value={img}
        onChange={ (e)=>{setImg(e.target.value)}}/>
    </div>
  </div>
</form>
        </Modal.Body>
        <Modal.Footer>
      
          <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'  form='editmodal' onClick={  handleClose}>Add</button>
          <button className='bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;