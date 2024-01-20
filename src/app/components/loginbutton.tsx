"use client"
import { useRouter } from 'next/navigation'
export default function Homelogin() {
  const router=useRouter()
  const navigatetoLogin=()=>{
  router.push("/login")
  }
  return (
    <main>
      <p style={{textAlign:"right"}} onClick={navigatetoLogin}>Login Button</p>
    </main>
  )
}
