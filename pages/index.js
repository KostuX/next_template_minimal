import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "../components/theme-switch";
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <main className={` flex min-h-screen  items-center justify-between p-24`}>
      <span className="inline-grid grid-cols-3 gap-4">
        <span>
          <ThemeSwitch />
        </span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>
      <span className="inline-grid grid-cols-3 gap-4">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>
    </main>
  );
}
