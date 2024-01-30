import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

// Styles
import s from "./Table.module.scss";

interface TableItem {
  [field: string]: React.ReactNode;
}

interface TableProps extends React.HTMLAttributes<HTMLElement> {
  data: TableItem[];
  spacing: any;
  headless?: boolean;
  headClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  dataClassName?: string;
}

export default function Table(props: TableProps) {
  const { data, spacing, headless, className, headClassName, headerClassName, rowClassName, dataClassName } = props;
  const tableHeadRef = useRef<HTMLElement>(null);
  const [headSticked, setHeadSticked] = useState(false);

  useEffect(() => {
    const listener = () => {
      const rect = tableHeadRef.current?.getBoundingClientRect() as DOMRect;
      if (rect && rect.top <= 56) {
        setHeadSticked(true);
      } else setHeadSticked(false);
    };

    document.addEventListener("scroll", listener, { capture: true });

    return () => document.removeEventListener("scroll", listener, { capture: true });
  }, []);

  return (
    <div
      role="grid"
      aria-rowcount={data.length}
      aria-colcount={Object.keys(data[0]).length}
      className={classNames(s.table, className)}
      style={{ ["--grid-columns" as any]: spacing.join(" ") }}
    >
      {!headless && (
        <header ref={tableHeadRef} role="presentation" className={classNames(s.tableHead, headSticked && s.sticked, headClassName)}>
          <div role="row" aria-rowindex={1} className={classNames(s.tableRow, !headless && s.spaced)}>
            {Object.keys(data[0]).map((field) => (
              <div key={field} role="columnheader" className={classNames(s.tableHeader, headerClassName)}>
                {field}
              </div>
            ))}
          </div>
        </header>
      )}

      <div role="presentation" className={s.tableBody}>
        {data.map((dataRows, idx) => (
          <div key={idx} role="row" aria-rowindex={idx + 2}>
            <div role="presentation" className={classNames(s.tableRow, !headless && s.spaced, rowClassName)}>
              {Object.values(dataRows).map((property, idx) => (
                <div key={idx} role="gridcell" className={classNames(s.tableData, dataClassName)}>
                  {property}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
