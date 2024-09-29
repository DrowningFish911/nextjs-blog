
export default function Header({ logoText, menuItems, showMenuItems }) {

  return (
    <header>
      <li className="flex justify-around glass">
        <button className="btn btn-ghost">Home</button>
        <button className="btn btn-ghost">About</button>
        <button className="btn btn-ghost">Blog</button>
        <button className="btn btn-ghost">Contact</button>
      </li>
    </header>
  );
}