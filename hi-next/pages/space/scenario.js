import Heads from "@/components/Heads";
import Navbar from "@/components/Navbar";

export default function Scenario() {
  return (
    <>
      <div>
        <Heads title="Scenario" />
        <Navbar />
        <h1 className="active">Scenario blabla</h1>
        <style jsx>{`
          .active {
            color: black;
          }
        `}</style>
      </div>
    </>
  );
}
