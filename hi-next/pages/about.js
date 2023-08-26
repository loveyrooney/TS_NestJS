import Navbar from "./../components/Navbar";

export default function About() {
  return (
    <>
      <div>
        <h1 className="active">about us</h1>
        <style jsx global>{`
          .active {
            color: green;
          }
        `}</style>
      </div>
    </>
  );
}
