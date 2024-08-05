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
        <h1>{selectedBank}</h1>
        <ul>
          {branchName.map((branch, index) => (
            <li key={index}   onClick={()=>{handleBranchId(branch.branch_id) ,handleBranchName(branch.branch_name)}} 
                style={{ cursor: 'pointer', padding: '5px', borderBottom: '1px solid #ccc' } }>
                 <Link to="/banks/branches/services">{`${selectedBank}-${branch.branch_name}`}</Link></li>
          ))}
        </ul>   
      </>
    );






}

export default Branch;