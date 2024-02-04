import classNames from "classnames";
import { useRefs } from "@/hooks/useRefs";
import { createContext, forwardRef, useContext, useEffect, useRef, useState } from "react";

// Styles
import s from "./Tabs.module.scss";

interface TabsValue {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext({} as TabsValue);

const TabsProvider = ({ value, setValue, children }: React.PropsWithChildren<TabsValue>) => {
  const initialState = { value, setValue };

  return <TabsContext.Provider value={initialState}>{children}</TabsContext.Provider>;
};

/* -----------
 * TabsRoot
 * ----------- */

interface TabsRootProps extends React.HTMLAttributes<HTMLElement> {
  defaultValue: string;
}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ defaultValue, className, children, ...props }, forwardedRef) => {
    const [value, setValue] = useState(defaultValue);

    return (
      <TabsProvider value={value} setValue={setValue}>
        <div {...props} ref={forwardedRef} className={classNames(s.tabsRoot, className)}>
          {children}
        </div>
      </TabsProvider>
    );
  },
);

TabsRoot.displayName = "Tabs";

/* -----------
 * TabsList
 * ----------- */

interface TabsListProps extends React.HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ sticky = true, style, className, children }, forwardedRef) => {
    const tableHeadRef = useRef<HTMLElement>(null);
    const [headSticked, setHeadSticked] = useState(false);

    useEffect(() => {
      const listener = () => {
        const rect = tableHeadRef.current?.getBoundingClientRect() as DOMRect;
        if (sticky && rect && rect.top <= 56) {
          setHeadSticked(true);
        } else setHeadSticked(false);
      };

      document.addEventListener("scroll", listener, { capture: true });

      return () => {
        document.removeEventListener("scroll", listener, { capture: true });
      };
    }, [sticky]);

    return (
      <div
        ref={useRefs(forwardedRef, tableHeadRef)}
        role="tablist"
        style={style}
        className={classNames(s.tabsList, headSticked && s.sticked, className)}
      >
        {children}
      </div>
    );
  },
);

TabsList.displayName = "List";

/* -----------
 * TabsTrigger
 * ----------- */

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled, className, children }, forwardedRef) => {
    const context = useContext(TabsContext);

    const isSelected = value === context.value;

    return (
      <button
        ref={forwardedRef}
        type="button"
        role="tab"
        aria-selected={isSelected}
        data-state={isSelected ? "active" : "inactive"}
        disabled={disabled}
        className={classNames(s.tabsTrigger, className)}
        onClick={() => {
          context.setValue(value);
        }}
      >
        {children}
      </button>
    );
  },
);

TabsTrigger.displayName = "Trigger";

/* -----------
 * TabsContent
 * ----------- */

interface TabsContentProps extends React.HTMLAttributes<HTMLElement> {
  value: string;
}

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, forwardedRef) => {
    const context = useContext(TabsContext);

    const isSelected = value === context.value;

    return isSelected ? (
      <div {...props} ref={forwardedRef} role="tabpanel" className={classNames(s.tabsContent, className)}>
        {children}
      </div>
    ) : null;
  },
);

TabsContent.displayName = "Content";

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;
