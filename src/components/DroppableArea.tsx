import { SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import { useDroppable } from "@dnd-kit/core";

const DroppableArea = ({ 
  items,
  onOver,
 }: { 
  items: { id: string; type: string; label: string }[];
  onOver:string;
}) => {
  const { setNodeRef } = useDroppable({ id: 'droppable' });

  return (
    <div
      ref={setNodeRef}
      style={{
        minWidth: '200px',
        minHeight: '400px',
        padding: '16px',
        border: '2px dashed #333',
      }}
    >
      <SortableContext items={items.map(item => item.id)}>
        {items.map(({ id, type, label }) => (
          <SortableItem key={id} id={id} type={type} label={label} onOver={onOver} />
        ))}
      </SortableContext>
    </div>
  );
};

export default DroppableArea;