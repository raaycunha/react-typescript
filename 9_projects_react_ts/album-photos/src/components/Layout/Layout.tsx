import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const Layout = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <main>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
