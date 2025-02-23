import classes from "./page.module.css";
import Typing from "@/components/typing/typing";
import ThemeToggle from "@/components/setting/ThemeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <p>Welcome To Type Pulse</p>
          <h1>Test your typing speed</h1>
          <h2> Made by <Link href="https://github.com/Piyushyadav">Piyush Yadav</Link></h2>
          <ThemeToggle /> {/* ✅ Add the theme toggle button */}
        </div>
        <Typing />
      </div>
    </main>
  );
}
