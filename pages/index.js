import Home from "@/components/home";
import Layout from "@/components/layout";

export default function Main() {
  return (
    <Home />
  );
}


Main.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};