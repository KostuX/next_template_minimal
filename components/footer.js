import { cfg_site } from "../config/cfg_site";
import { Logo } from "./icons";
export const Foot = () => {
  return (
    <footer className="bg-background w-full mx-auto  p-4 md:flex sticky justify-between">
      <Logo />
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {cfg_site.footerLinks.map((e) => (
          <li>
            <a href={e.href} className="hover:underline me-4 md:me-6">
              {e.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {cfg_site.year}{" "}
        <a href="#" className="hover:underline">
          {cfg_site.title}
        </a>
      </span>
    </footer>
  );
};
