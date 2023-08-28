import Heads from "@/components/Heads";

export default function About() {
  return (
    <>
      <div>
        <Heads title="About" />
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
