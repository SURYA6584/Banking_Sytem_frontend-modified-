import { useState , useEffect} from "react"
import { Link } from 'react-router-dom';


const Branch =({ selectedBank ,handleBranchId,handleBranchName})=>{


    const [branchName ,setBranchName]=useState([])

    useEffect(() => {
      fetch('http://localhost:9090/home/branch')
        .then((res) => res.json())
        .then((data) => setBranchName(data))  // Set the bankName state
        .catch((error) => console.error('Error fetching bank data:', error));
        
    }, []);


    
       
    return (
      <>
        <h1 className="my-4 text-center">{selectedBank}</h1>
        <div className="container">
          <ul className="list-group">
            {branchName.map((branch, index) => (
          <Link to="/banks/branches/services" className="text-decoration-none text-dark">     <li
                key={index}
                onClick={() => {
                  handleBranchId(branch.branch_id);
                  handleBranchName(branch.branch_name);
                }}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                style={{ cursor: 'pointer' }}
              >
               
                  {`${selectedBank}-${branch.branch_name}`}
                
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </>
    );
    





}

export default Branch;