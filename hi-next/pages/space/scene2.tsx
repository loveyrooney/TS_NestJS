import Menu from "../../components/Menu";
import Table from "../../components/Table";

export default function scene2() {
  return (
    <>
      <Menu>
        <Table
          columnTitle={{
            className: [
              "col-start-5 col-span-2",
              "col-start-7 col-span-2",
              "col-start-9 col-span-4",
            ],
            title: "column",
          }}
        />
      </Menu>
    </>
  );
}
