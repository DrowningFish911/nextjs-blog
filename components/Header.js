import Link from "next/link";
import Divider from "./Divider";

export default function Header({ logoText, menuItems, showMenuItems }) {

  return (
    <header>
      <li className="flex justify-around w-3/5 mx-auto pt-3">
        <img className="mask mask-hexagon-2" width={50} src='/images/polar_bear.png'></img>
        <div className='w-2/5'>
          <Link href="/">
            <button className="btn btn-ghost text-xl">Coleman Manchester</button>
          </Link>       
         </div>
        
        <Link href="/about">
          <button className="btn btn-ghost">About</button>
        </Link>
        <Link href="/notes">
          <button className="btn btn-ghost">Notes</button>
        </Link>
        <Link href="/articles">
            <button className="btn btn-ghost">Articles</button>
        </Link>
        <Link href="/projects">
            <button className="btn btn-ghost">Projects</button>
        </Link>
      </li>
      <Divider></Divider>
    </header>
  );
}