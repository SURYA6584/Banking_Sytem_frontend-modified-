
import { Link } from 'react-router-dom';

const Bank=({bankName ,handleBankName})=>{

         
  return (
  <>
    <h1 className="my-4 text-center">Bank Names</h1>
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="text-start">Bank Name</th>
          </tr>
        </thead>
        <tbody>
          {bankName.map((bank, index) => (
            <tr key={index} onClick={() => handleBankName(bank)} style={{ cursor: 'pointer' }}>
              <td className="text-start">
                <Link to="/banks/branches" className="text-decoration-none text-dark">
                  {bank}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);




}

export default Bank