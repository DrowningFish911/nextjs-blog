// import Head from "next/head";

import Header from "./Header";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function PostLayout({title, subtitle, children}) {

  return (
    <div>
        <Header/>
        <Title>
            {title}
        </Title>
        <SubTitle>

        </SubTitle>
        <div className="divider w-1/2 mx-auto"></div>
         <main>{children}</main>
    </div>

  );
}