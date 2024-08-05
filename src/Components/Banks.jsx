
import { Link } from 'react-router-dom';

const Bank=({bankName ,handleBankName})=>{

         
    return (
        <>
          <h1>Bank Names</h1>
          <ul>
            {bankName.map((bank, index) => (

              <h2 key={index}   onClick={()=>{handleBankName(bank)}}  style={{ cursor: 'pointer', padding: '5px', borderBottom: '1px solid #ccc' } }><Link to="/banks/branches">{bank}</Link></h2>

            ))}
          </ul>
        </>
      );




}

export default Bank