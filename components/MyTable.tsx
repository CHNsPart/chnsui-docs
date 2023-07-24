// @ts-nocheck
import { Paragraph } from "chnsui";
import React from "react";
import { Table, TableHead, TableBody, Td, Th, Tr, TableProps } from "chnsui";
import 'chnsui/dist/styles.css'
 
export const TableRaw: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Paragraph>Default Table</Paragraph>
      <Table>
        <Tr>
            <Th>Kings Treasury</Th>
            <Th>Peoples happiness</Th>
        </Tr>
        <Tr>
            <Td>Empty</Td>
            <Td>Overflowing</Td>
        </Tr>
      </Table>
    </div>
  );
};
export const TableRawSecondary: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Paragraph>Default Table</Paragraph>
      <Table variant={"bg"}>
        <TableHead alignment="center">
            <Tr variant={"default"}>
                <Th>Kings Treasury</Th>
                <Th>Kings Treasury</Th>
                <Th>Peoples happiness</Th>
                <Th>Peoples happiness</Th>
            </Tr>
         </TableHead>
         <TableBody alignment="center">
            <Tr variant={"bg"}>
                <Td>Empty</Td>
                <Td>Overflowing</Td>
                <Td variant={"bg"}>.</Td>
                <Td>Overflowing</Td>
            </Tr>
            <Tr variant={"bg"}>
                <Td>Empty</Td>
                <Td>Overflowing</Td>
                <Td>Overflowing</Td>
            </Tr>
            <Tr variant={"bg"}>
                <Td variant={"bg"}>.</Td>
                <Td>Overflowing</Td>
                <Td>Overflowing</Td>
                <Td>Overflowing</Td>
            </Tr>
        </TableBody>
      </Table>
    </div>
  );
};
 
export const TableSimple = () => {
  return (
    <div className='flex flex-col gap-5'>
    <Paragraph>Simple Table</Paragraph>
    <Table padding="all" alignmentment="center" variant="bg" className="custom-table">
      <TableHead variant="bg" alignment="center">
        <Tr>
          <Th>Header 1</Th>
          <Th>Header 2</Th>
        </Tr>
      </TableHead>
      <TableBody>
        <Tr>
          <Td>Cell 1</Td>
          <Td>Cell 2</Td>
        </Tr>
        <Tr>
          <Td>Cell 3</Td>
          <Td>Cell 4</Td>
        </Tr>
      </TableBody>
    </Table>
    </div>
  );
};