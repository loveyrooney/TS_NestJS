import Menu from "../../components/Menu";
import Table from "../../components/Table";

export default function scene3() {
  return (
    <>
      <Menu>
        <Table
          columnTitle={{
            className: [
              "col-start-2 col-span-3",
              "col-start-5 col-span-3",
              "col-start-8 col-span-2",
            ],
            title: "column",
          }}
        />
      </Menu>
    </>
  );
}
