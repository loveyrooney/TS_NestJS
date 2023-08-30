import Heads from "@/components/Heads";
import Navbar from "@/components/Navbar";

export default function Treatment() {
  return (
    <>
      <div>
        <Heads title="Treatment" />
        <Navbar />
        <container className="grid grid-cols-4">
          <aside className="bg-orange-500">
            <div>hello</div>
            <div>hello</div>
          </aside>
          <article className="col-span-3 bg-lime-300">
            <div>hello</div>
          </article>
        </container>

        {/* <h1 className="active">Treatment blabla</h1>
        <style jsx>{`
          .active {
            color: skyblue;
          }
        `}</style> */}
      </div>
    </>
  );
}
