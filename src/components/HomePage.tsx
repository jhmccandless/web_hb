import HomePageForm from "./HomePageForm";

function HomePage() {
  return (
    <div className="homepage">
      <h2 className="form-row-2">Welcome to Hangboarding!</h2>
      <p className="form-row-4" style={{ margin: "0" }}>
        Choose your desired hangboard workout!
      </p>
      <HomePageForm />
    </div>
  );
}

export default HomePage;
