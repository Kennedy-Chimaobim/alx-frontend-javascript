import { RowId, RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;
declare function selectRow(rowId: RowID): RowElement;