import Menu from "../../components/Menu";
import Table from "../../components/Table";

export default function scene2() {
  return (
    <>
      <Menu>
        <Table
          columnTitle={{
            className: [
              "col-start-2 col-span-4",
              "col-start-6 col-span-2",
              "col-start-8 col-span-2",
            ],
            title: "column",
          }}
        />
      </Menu>
    </>
  );
}
