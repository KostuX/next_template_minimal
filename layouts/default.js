
import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";


export default function DefaultLayout({ children }) {


  return (
   <> 
<Head/>
      <Navbar/>
      <main >
        {children}
      </main>
      <Foot/>
      </>

  );
}
