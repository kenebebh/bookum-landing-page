import Head from "next/head";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function AppLayout({ title, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="any"
        />
      </Head>

      <main className="">{children}</main>
    </>
  );
}

AppLayout.defaultProps = {
  title: "Bookum - Where Bookish conversations happen",
};
