export interface ISortableHeader {
    label: string;
    column: "stars" | "updated" | "full_name";
    sort: string;
    order: string;
    onSort: (column: "stars" | "updated" | "full_name") => void;
    align?: "left" | "center" | "right";
}
declare const _default: import("react").MemoExoticComponent<({ label, column, sort, order, onSort, align, }: ISortableHeader) => import("react/jsx-runtime").JSX.Element>;
export default _default;
