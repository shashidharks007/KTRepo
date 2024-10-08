import DroppableArea from "./DroppableArea";

const DroppableCompB = ({
  items,
  onOver,
}: {
  items: { id: string; type: string; label: string }[];
  onOver:string;
}) => {
  return (
    <div>
      <DroppableArea items={items} onOver={onOver} />
    </div>
  );
};

export default DroppableCompB;