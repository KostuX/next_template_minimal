
import { ThemeSwitch } from "../components/theme-switch";
import DefaultLayout from "../layouts/default";

export default function Home() {





  return (
    <DefaultLayout >
  <div className="justify-between  ">
      <span className="grid grid-cols-3 gap-4  " >
        <span className=" bg-white">
          <ThemeSwitch />
        </span >
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>
      <span className="grid grid-cols-3 gap-4 place-content-stretch">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>
  
  
  </div>
    </DefaultLayout>
  );
}
