import tableDataDevelopment from "./variables/tableDataDevelopment.ts";
import tableDataCheck from "./variables/tableDataCheck.ts";
import CheckTable from "./components/CheckTable.tsx";
import tableDataColumns from "./variables/tableDataColumns.ts";
import tableDataComplex from "./variables/tableDataComplex.ts";
import DevelopmentTable from "./components/DevelopmentTable.tsx";
import ColumnsTable from "./components/ColumnsTable.tsx";
import ComplexTable from "./components/ComplexTable.tsx";
import React from "react";

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        {/* <DevelopmentTable tableData={tableDataDevelopment} /> */}
        {/* <CheckTable tableData={tableDataCheck} /> */}
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};

export default Tables;
