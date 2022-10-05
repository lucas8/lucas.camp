import Head from "next/head";

const IndexPage = () => (
  <>
    <Head>
      <title>
        Hey, I&apos;m Lucas {process.env.NODE_ENV !== "production" && "(dev)"}
      </title>
    </Head>
    <main>
      <h1>
        To collaborate on a project, please feel free to shoot an email or reach
        out on any of the platforms below. In the interest of transparency, my
        typical lead time for taking on new work is 6 weeks.
      </h1>
    </main>
  </>
);

export default IndexPage;
