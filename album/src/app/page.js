import Grid from "@/component/Grid";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Toggle from "@/component/Toggle";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 light:bg-white dark:bg-slate-800">
    <Header />
    <Toggle />
    <Grid />
    <Footer />
    </main>
  );
}
