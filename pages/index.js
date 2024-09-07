import HeaderComponent from "@/components/home/header";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <HeaderComponent />
  );
}


Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};