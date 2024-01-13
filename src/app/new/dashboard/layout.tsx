"use client"
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    console.log("its is layout")
    return (
      <section>
        <h1>Here Headder</h1>
        <nav></nav>
   
        {children}
        <h2>Here Footer</h2>
      </section>
    )
  }