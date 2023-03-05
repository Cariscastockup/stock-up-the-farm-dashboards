import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme
} from "@mui/material";
import React, { memo } from "react";

const AppTable = ({
  columns = [],
  data = [],
  rowKeyProp,
  showTableBody = true,
  showTableHead = true,
  tableHeadStyle,
  tableBodyCellStyle,
}) => {
  const theme = useTheme();

  const renderCell = (item, column) => {
    if (column?.render) return column.render(item);

    return item[column?.dataIndex];
  };

  return (
    <Table
      sx={{
        borderRadius: "0.2em",
        boxShadow: `0 0 0 1px ${theme.palette.common.lightXs}`,
      }}
    >
      {showTableHead && (
        <TableHead sx={tableHeadStyle}>
          <TableRow>
            {columns.map((c, index) => (
              <TableCell
                sx={{ fontWeight: "bold" }}
                align={c?.align || "left"}
                key={index.toString()}
              >
                {c.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}

      {showTableBody && (
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item[rowKeyProp] || index.toString()}>
              {columns.map((c, cIndex) => (
                <TableCell
                  sx={tableBodyCellStyle}
                  align={c?.align || "left"}
                  key={`${index}_${cIndex}`}
                >
                  {renderCell(item, c)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default memo(AppTable);
