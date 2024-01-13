export default function Template({ children }: { children: React.ReactNode }) {
    console.log("It is template");
    return <div>
        <h2>the Template</h2>
        {children}
        </div>
  }