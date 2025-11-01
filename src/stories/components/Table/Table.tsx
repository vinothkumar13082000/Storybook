import React, { useState, useRef, useEffect } from 'react';
import './Table.scss';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

export interface TableColumn {
  key: string;
  header: string;
  render?: (value: any, row: any) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  width?: string | number;
}

export interface TableProps {
  /** Table columns */
  columns: TableColumn[];
  /** Table data */
  data: any[];
  /** Show borders */
  bordered?: boolean;
  /** Show all borders */
  fullBordered?: boolean;
  /** Stripe rows */
  striped?: boolean;
  /** Hoverable rows */
  hoverable?: boolean;
  /** Row selection */
  selectable?: boolean;
  /** Selected row keys */
  selectedRowKeys?: (string | number)[];
  /** Row selection handler */
  onRowSelect?: (keys: (string | number)[]) => void;
  /** Row click handler */
  onRowClick?: (row: any, index: number) => void;
  /** Show header */
  showHeader?: boolean;
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  /** Border width */
  borderWidth?: number;
  /** Border color */
  borderColor?: string;
  /** Header background color */
  headerBgColor?: string;
  /** Header text color */
  headerTextColor?: string;
  /** Hover background color */
  hoverColor?: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Compact mode */
  compact?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  bordered = false,
  fullBordered = false,
  striped = false,
  hoverable = false,
  selectable = false,
  selectedRowKeys = [],
  onRowSelect,
  onRowClick,
  showHeader = true,
  borderStyle = 'solid',
  borderWidth = 1,
  borderColor,
  headerBgColor,
  headerTextColor,
  hoverColor,
  size = 'medium',
  compact = false,
  className = '',
  animated = false,
  style,
}) => {
  const [sortedColumn, setSortedColumn] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<(string | number)[]>(selectedRowKeys);
  const selectAllCheckboxRef = useRef<HTMLInputElement>(null);
  
  const isControlled = selectedRowKeys.length > 0 || onRowSelect !== undefined;
  const selectedKeys = isControlled ? selectedRowKeys : internalSelectedKeys;

  const handleSort = (column: TableColumn) => {
    if (!column.sortable) return;
    
    if (sortedColumn?.key === column.key) {
      if (sortedColumn.direction === 'asc') {
        setSortedColumn({ key: column.key, direction: 'desc' });
      } else {
        setSortedColumn(null);
      }
    } else {
      setSortedColumn({ key: column.key, direction: 'asc' });
    }
  };

  const handleRowSelect = (rowKey: string | number) => {
    if (!selectable) return;
    
    const newKeys = selectedKeys.includes(rowKey)
      ? selectedKeys.filter(key => key !== rowKey)
      : [...selectedKeys, rowKey];
    
    if (!isControlled) {
      setInternalSelectedKeys(newKeys);
    }
    onRowSelect?.(newKeys);
  };

  const sortedData = sortedColumn ? [...data].sort((a, b) => {
    const aVal = a[sortedColumn.key];
    const bVal = b[sortedColumn.key];
    const direction = sortedColumn.direction === 'asc' ? 1 : -1;
    
    if (aVal < bVal) return -1 * direction;
    if (aVal > bVal) return 1 * direction;
    return 0;
  }) : data;

  // Calculate select-all checkbox state
  const getSelectAllState = () => {
    if (sortedData.length === 0) return { checked: false, indeterminate: false };
    
    const selectedCount = sortedData.filter((row, index) => {
      const rowKey = row.id || row.key || index;
      return selectedKeys.includes(rowKey);
    }).length;

    if (selectedCount === 0) {
      return { checked: false, indeterminate: false };
    } else if (selectedCount === sortedData.length) {
      return { checked: true, indeterminate: false };
    } else {
      return { checked: false, indeterminate: true };
    }
  };

  const selectAllState = getSelectAllState();

  // Update indeterminate state whenever selection changes
  useEffect(() => {
    if (selectAllCheckboxRef.current) {
      selectAllCheckboxRef.current.indeterminate = selectAllState.indeterminate;
    }
  }, [selectAllState.indeterminate, selectedKeys, sortedData]);

  const tableStyle: React.CSSProperties = {
    ...style,
    ...(borderColor && { '--table-border-color': borderColor } as any),
    ...(headerBgColor && { '--table-header-bg': headerBgColor } as any),
    ...(headerTextColor && { '--table-header-text': headerTextColor } as any),
    ...(hoverColor && { '--table-hover-color': hoverColor } as any),
    '--table-border-width': `${borderWidth}px`,
    '--table-border-style': borderStyle,
  };

  return (
    <div className={`ui-table-wrapper ${animated ? 'ui-table-wrapper--animated' : ''} ${className}`} style={tableStyle}>
      <table
        className={`ui-table ui-table--${size} ${bordered ? 'ui-table--bordered' : ''} ${fullBordered ? 'ui-table--full-bordered' : ''} ${striped ? 'ui-table--striped' : ''} ${hoverable ? 'ui-table--hoverable' : ''} ${selectable ? 'ui-table--selectable' : ''} ${compact ? 'ui-table--compact' : ''} ${animated ? 'ui-table--animated' : ''}`}
      >
        {showHeader && (
          <thead>
            <tr>
              {selectable && (
                <th className="ui-table__header ui-table__header--select">
                  <input
                    ref={selectAllCheckboxRef}
                    type="checkbox"
                    checked={selectAllState.checked}
                    onChange={(e) => {
                      if (e.target.checked) {
                        const allKeys = sortedData.map((row, index) => row.id || row.key || index);
                        if (!isControlled) setInternalSelectedKeys(allKeys);
                        onRowSelect?.(allKeys);
                      } else {
                        if (!isControlled) setInternalSelectedKeys([]);
                        onRowSelect?.([]);
                      }
                    }}
                    className="ui-table__select-all"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`ui-table__header ui-table__header--${column.align || 'left'} ${column.sortable ? 'ui-table__header--sortable' : ''}`}
                  style={{ width: column.width }}
                  onClick={() => handleSort(column)}
                >
                  <div className="ui-table__header-content">
                    <span>{column.header}</span>
                    {column.sortable && (
                      <span className="ui-table__sort-icon">
                        {sortedColumn?.key === column.key ? (
                          sortedColumn.direction === 'asc' ? <FaSortUp /> : <FaSortDown />
                        ) : (
                          <FaSort />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="ui-table__empty">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIndex) => {
              const rowKey = row.id || row.key || rowIndex;
              const isSelected = selectedKeys.includes(rowKey);
              
              return (
                <tr
                  key={rowIndex}
                  className={`ui-table__row ${isSelected ? 'ui-table__row--selected' : ''}`}
                  onClick={() => onRowClick?.(row, rowIndex)}
                >
                  {selectable && (
                    <td className="ui-table__cell ui-table__cell--select">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleRowSelect(rowKey)}
                        onClick={(e) => e.stopPropagation()}
                        className="ui-table__select-checkbox"
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`ui-table__cell ui-table__cell--${column.align || 'left'}`}
                    >
                      {column.render ? column.render(row[column.key], row) : row[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

