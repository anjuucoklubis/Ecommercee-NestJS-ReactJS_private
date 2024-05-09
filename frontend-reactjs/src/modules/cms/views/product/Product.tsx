import React from "react";
import ColumnsTable from "../admin/tables/components/ColumnsTable.tsx";
import tableDataColumns from "../admin/tables/variables/tableDataColumns.ts";

function Product() {
  return (
    <div className="mt-5 h-full grid-cols-1 gap-5 md:grid-cols-2">
      <ColumnsTable tableData={tableDataColumns} />
    </div>
  );
}

export default Product;
