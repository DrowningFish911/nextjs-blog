// import Head from "next/head";

import Header from "./Header";
import Title from "./Title";

export default function Layout({title, children}) {

  return (
    <div>
      <Header/>
      <Title>
        {title}
      </Title>
      <main>{children}</main>
    </div>

  );
}