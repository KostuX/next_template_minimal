
import { ThemeSwitch } from "../components/theme-switch";
import DefaultLayout from "../layouts/default";

export default function Home() {





  return (
    <DefaultLayout >
  <div className="justify-between h-full ">

  <div className="text-center border border-sky-500 m-3">Top Center</div>

    <span className=" text-center grid grid-cols-2 gap-4  m-3 h-56 " >
      <span className="  border border-sky-500">Left Panel</span>
      <span  className=" border border-sky-500">Right Panel</span>    
    </span>
     
  </div>
    </DefaultLayout>
  );
}
