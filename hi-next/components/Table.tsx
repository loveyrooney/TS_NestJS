import Cell from "./Cell";
import Column from "./Column";
import SaveButton from "./SaveButton";

export default function Table({ columnTitle }) {
  return (
    <form className="col-start-2 col-span-3 grid grid-cols-9 text-gray-400 bg-gray-800 text-center">
      <div className="col-span-1">
        <div className="border-2 border-gray-700">
          <SaveButton />
          <span>#Num</span>
        </div>
        <Cell cells={Array.from({ length: 22 })} />
        <button type="button">➕page</button>
      </div>
      {columnTitle.className.map((el, index) => (
        <Column key={index} classProps={el} title={columnTitle.title} />
      ))}
    </form>
  );
}

//지금은 씬넘버컬럼과 나머지 컬럼에 cells를 아예 정해서 주고 있음 (컬럼 개수 5가지한정에 페이지 단위로 row 추가형태)
//page기능도 아직 완성되지 않았음.
//버전2는 cell단위로 추가할수 있도록 디벨롭
