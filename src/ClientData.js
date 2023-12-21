import { useState, useEffect } from "react"
import ClientDataTable from './ClientDataTable'

export default function ClientData() {
    const [clientData, setClientData] = useState();

    const getClientData = async () => {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setClientData(data);
    }

    useEffect(() => {
        getClientData()
    }, []);

    return (<>
        <ul>
            {clientData ?
                Object.entries(clientData).map(([key, value]) => (<li>{key}:{value}</li>)) : null}
        </ul>
        {clientData ? <ClientDataTable clientData={clientData} /> : null}
    </>);
}

