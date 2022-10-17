import Info from "./Info/Info";

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
      </section>
    </>
  );
};

export default App;
