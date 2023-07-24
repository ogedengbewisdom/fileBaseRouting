import Link from "next/link";
import { useRouter } from "next/router";


const ClientPage = () => {

    const CLIENTS = [
        {id: "wis", name: "Wisdom"},
        {id: "max", name: "Maxmillan"}
    ]
    return(
        <div>
             <h1>This is the ClientPage</h1>
             <ul>
                {CLIENTS.map(client => <li key={client.id}><Link href={`/clients/${client.id}`}>{client.name}</Link></li>)}
             </ul>
        </div>
    )
}

export default ClientPage