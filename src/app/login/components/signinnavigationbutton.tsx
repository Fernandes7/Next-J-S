"use client"
import { useRouter } from "next/navigation"

export default function Signinnaviagtion()
{
    const router=useRouter()
    const navigatetosignin=()=>{
        router.push("/signin")
    }
    return(
        <>
        <p onClick={navigatetosignin}>Sign In</p>
        </>
    )
}