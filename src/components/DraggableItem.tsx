import { useDraggable } from '@dnd-kit/core';

const DraggableItem = ({ id, label }: { id: string; label: string; }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });
  
    return (
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={{
          padding: '8px',
          margin: '4px',
          backgroundColor: isDragging ? 'lightgreen' : 'lightgray',
          border: '1px solid #333',
          cursor: 'grab',
        }}
      >
        {label}
      </div>
    );
  };

export default DraggableItem