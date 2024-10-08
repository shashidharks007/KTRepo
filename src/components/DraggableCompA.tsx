import DraggableItem from "./DraggableItem";

const DraggableCompA = () => {
  const items = [
    { id: "radio-Radio", label: "Radio", type: "radio" },
    { id: "checkbox-Checkbox", label: "Checkbox", type: "checkbox" },
    { id: "select-Select", label: "Select", type: "select" },
    { id: "Date-Date", label: "Date", type: "Date" },
    { id: "textfield-TextField", label: "TextField", type: "textfield" },
    { id: "templet-ApplicationInformation", label: "ApplicationInformation", type:'templet' },
    { id: "templet-CommunicationDetails", label: "CommunicationDetails", type:'templet' },
  ];

  return (
    <div>
      <h2>Draggable Form Controls</h2>
      {items.map((item) => (
        <DraggableItem key={item.id} id={item.id} label={item.label} />
      ))}
    </div>
  );
};

export default DraggableCompA;
