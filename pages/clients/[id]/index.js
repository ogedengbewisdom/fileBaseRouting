import Link from "next/link";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
    const PROJECTS = [
        {id: "pr1", name: "PROJECT 1"},
        {id: "pr2", name: "PROJECT 2"},
        {id: "pr3", name: "PROJECT 3"},
        {id: "pr4", name: "PROJECT 4"}
    ]    
    return(
        <div>
            <h1>List of all Client Project</h1>
            <ul>
                {PROJECTS.map(item => <li key={item.id}><Link href={
                    {
                        pathname: "/clients/[id]/[clientProjectId]",
                        query: {id: `/clients/[id]`, clientProjectId: item.id}
                    }
                        }>{item.name}</Link></li>)}
            </ul>
           
        </div>
    )
}

export default ClientProjectPage