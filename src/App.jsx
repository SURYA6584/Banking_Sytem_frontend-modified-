import './App.css'
import Bank from './Components/Banks'
import Branch from './Components/Branch'
import Service from './Components/Service'
import { useState , useEffect} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {


  const [bankName ,setBankName]=useState([])
  const [selectedBank, setSelectedBank] = useState(' ')
  const [selectedBranchId, setSelectedBranchId] = useState(101)
  const [selectedBranchName, setSelectedBranchName] = useState('')



  useEffect(() => {
    fetch('http://localhost:9090/home/bank')
      .then((res) => res.json())
      .then((data) => setBankName(data))  // Set the bankName state
      .catch((error) => console.error('Error fetching bank data:', error));
  }, []);





    const handleBankName=( bank)=>{

        setSelectedBank(bank)
        console.log(bank)

    }

    const handleBranchId= (branchId)=>{
 
      setSelectedBranchId(branchId)
      console.log(branchId)

    }

    const handleBranchName= (branchName)=>{
 
      setSelectedBranchName(branchName)
      console.log(branchName )

    }

    


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Bank bankName={bankName} handleBankName={handleBankName} />}
        />
        <Route
          path="/banks"
          element={<Bank bankName={bankName} handleBankName={handleBankName}  />}
        />
        <Route
          path="/banks/branches"
          element={<Branch selectedBank={selectedBank} handleBranchId={handleBranchId} handleBranchName={handleBranchName} />}
        />
        <Route
          path="/banks/branches/services"
          element={<Service  selectedBank={selectedBank} selectedBranchId={selectedBranchId} selectedBranchName={selectedBranchName}/>}
        />
      </Routes>
    </Router>
  );
  
}

export default App
