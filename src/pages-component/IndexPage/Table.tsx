import styled from 'styled-components';

const TableElement = styled.table`
  border-spacing: unset;
`;

const HeadColumn = styled.th`
  text-align: left;
  padding: 10px;
  border: 2px solid gray;
  border-right: 0;
  &:last-child {
    border-right: 2px solid gray;
    border-top-right-radius: 4px;
  }
  &:first-child {
    border-top-left-radius: 4px;
  }
`;

const BodyColumn = styled.td`
  padding: 10px;
  background-color: #fff;
  border-bottom: 2px solid gray;
  &:first-child {
    border-left: 2px solid gray;
  }
  &:last-child {
    border-right: 2px solid gray;
  }
`;

const BodyRow = styled.tr`
  &:last-child {
    > td {
      border-bottom: 2px solid gray;
      &:first-child {
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-bottom-right-radius: 4px;
      }
    }
  }
`;

interface TableProps {
  columnNames: string[];
  rows: string[][];
}

export default function Table({ columnNames, rows }: TableProps) {
  return (
    <TableElement>
      <thead>
        <tr>
          {columnNames.map((name, index) => (
            <HeadColumn key={index}>{name}</HeadColumn>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <BodyRow key={index}>
            {row.map((column, index) => (
              <BodyColumn key={index}>{column}</BodyColumn>
            ))}
          </BodyRow>
        ))}
      </tbody>
    </TableElement>
  );
}
