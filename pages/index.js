import DefaultLayout from "../layouts/default";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="justify-between h-full text-center ">
        <div className="border  m-5 border-sky-600 dark:border-red-600">
          Top Center
        </div>

        <span className="grid grid-cols-2 gap-4  m-3 h-56 ">
          <span className="border border-sky-600 dark:border-red-600">
            Left Panel
          </span>

          <span className="border border-sky-600 dark:border-red-600">
            Right Panel
          </span>
        </span>
      </div>
    </DefaultLayout>
  );
}
