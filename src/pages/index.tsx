import { GetStaticProps } from "next";
import { getUsers } from "../lib/users";

export default function Home() {
  return (
    <h1>Hello World</h1>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();

  return {
    props: {
      users,
    },
    revalidade: 5,
  }
}
