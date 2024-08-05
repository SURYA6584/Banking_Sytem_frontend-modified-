import { useState, useEffect } from "react";

const Service = ({ selectedBranchId ,selectedBank,selectedBranchName}) => {
    const [serviceName, setServiceName] = useState([]);

    useEffect(() => {
        if (selectedBranchId) {
            fetch(`http://localhost:9090/home/service/${selectedBranchId}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    setServiceName(data);
                })
                .catch((error) => {
                    console.error('Error fetching service data:', error);
                });
        }
    }, [selectedBranchId]); // Depend on selectedBranchId

    return (
        <>
            <h1>{`${selectedBank}${selectedBranchName}`}</h1>
            <ul>
                {
                    serviceName.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))
                }
            </ul>
        </>
    );
};

export default Service;
