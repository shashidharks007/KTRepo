import { useSortable } from "@dnd-kit/sortable";
import DynamicFormElement from "./DynamicFormElement";

const SortableItem = ({
  id,
  type,
  label,
  onOver,
}: {
  id: string;
  type: string;
  label: string;
  onOver: string;
}) => {
  const { setNodeRef, attributes, listeners } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        padding: "8px",
        margin: "4px",
        backgroundColor: "lightgray",
        border: id === onOver ? "5px solid #333" : "1px solid white",
        cursor: "grab",
      }}
    >
      <DynamicFormElement id={id} label={label} type={type} />
      <button {...attributes} {...listeners} style={{ marginTop: "8px" }}>
        Drag
      </button>
    </div>
  );
};

export default SortableItem;
