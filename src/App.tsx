import Info from "./Info/Info";
import Button from "./Button/Button";

const App = () => {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
      </div>
      <section className="controls">
        <Info></Info>
        <Button></Button>
      </section>
    </>
  );
};

export default App;
