import Link from "next/link";
import { useRouter } from "next/router"

const SelectedClientProjectPage = () => {

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query)
    return (
        <div>
        <h1>This the selected client PROJECT DETAIL PAGE</h1>
        <Link href={`..`}>Back</Link>
        </div>
    )
}

export default SelectedClientProjectPage;