"use client"
import { useRouter } from "next/navigation"

export default function Loginnaviagtion()
{
    const router=useRouter()
    const navigatetologin=()=>{
        router.push("/login")
    }
    return(
        <>
        <p onClick={navigatetologin}>Login Option</p>
        </>
    )
}