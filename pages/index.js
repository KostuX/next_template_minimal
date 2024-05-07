import DefaultLayout from "../layouts/default";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="justify-between h-full text-center ">
        <div className="border  m-5">Top Center</div>

        <span className=" grid grid-cols-2 gap-4  m-3 h-56 ">
          <span className="border">Left Panel</span>
          <span className="border">Right Panel</span>
        </span>
      </div>
    </DefaultLayout>
  );
}
