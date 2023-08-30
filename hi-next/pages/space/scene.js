import Heads from "@/components/Heads";
import Navbar from "@/components/Navbar";

export default function Scene() {
  return (
    <>
      <div>
        <Heads title="Scene" />
        <Navbar />
        <h1 className="active">Scene blabla</h1>
        <style jsx>{`
          .active {
            color: green;
          }
        `}</style>
      </div>
    </>
  );
}
