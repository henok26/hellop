function Employee(props) {
    return (
      <div className="bg-red">
        <h1 className="bg-red">{props.name}</h1 >
       {props.role?props.role:<p>No Role</p>} 
        {/* <h1>{props.name}</h1>
       { props.role?props.role: <p>No Role</p>} */}
      </div>
    );
  }
  
  export default Employee;
  