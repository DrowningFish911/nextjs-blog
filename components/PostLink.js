import Link from "next/link";
import Date from "./Date";

export default function PostLink({ id, title, date, blogType}) {
    const postLink = './' + blogType + "/" + id 
    return (
        <li className="pb-4">
            <Link href={postLink}>
                <div className="flex">
                <Date dateString={date}/>
                <p className="px-5 text-l">{title}</p>
                </div>
            </Link>
        </li>
    );
  }