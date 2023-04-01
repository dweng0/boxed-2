/* @refresh reload */
import { render } from "solid-js/web";

const Header = () => {
  return <h1>Header</h1>;
};

const Content = () => {
  return <h1>Content</h1>;
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const App = () => {
  return (
    <section>
      <section>
        <Header />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
};

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(() => <App />, root!);
