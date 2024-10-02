import Link from "next/link";
import Divider from "./Divider";

export default function Header({ logoText, menuItems, showMenuItems }) {

  return (
    <header>
      <li className="flex justify-around w-3/5 mx-auto pt-3">
        <img className="mask mask-hexagon-2" width={50} src='/images/polar_bear.png'></img>
        <div className='w-2/5'>
          <p className="text-xl pt-2">Coleman Manchester</p>
        </div>
        
        <Link href="/">
          <button className="btn btn-ghost">Home</button>
        </Link>
        <Link href="/about">
          <button className="btn btn-ghost">About</button>
        </Link>
        <Link href="/blog">
          <button className="btn btn-ghost">Blog</button>
        </Link>
        <Link href="/contact">
            <button className="btn btn-ghost">Contact</button>
        </Link>
      </li>
      <Divider></Divider>
    </header>
  );
}