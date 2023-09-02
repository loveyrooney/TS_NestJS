import Menu from "../../components/Menu";
import Table from "../../components/Table";

export default function scene4() {
  return (
    <>
      <Menu>
        <Table
          columnTitle={{
            className: [
              "col-start-2 col-span-2",
              "col-start-4 col-span-3",
              "col-start-7 col-span-3",
            ],
            title: "column",
          }}
        />
      </Menu>
    </>
  );
}
