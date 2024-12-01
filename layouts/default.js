import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";
import ScrollContext from "./ScrollContext";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Head />
      <Navbar />
      <ScrollContext>
        <main>{children}</main>
      </ScrollContext>
      <Foot />
    </div>
  );
}
