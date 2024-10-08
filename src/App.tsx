import { DndContext } from "@dnd-kit/core";
import DraggableCompA from "./components/DraggableCompA";
import DroppableCompB from "./components/DroppableCompB";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";

const templateApplicationInfo = [
  { id: "name", label: "Name", type: "textfield" },
  { id: "age", label: "Age", type: "number" },
  { id: "dob", label: "DOB", type: "Date" },
  { id: "gender", label: "Gender", type: "radio" },
  { id: "language", label: "Language", type: "checkbox" },
  { id: "country", label: "Country", type: "select" },
];

const templateCommunicationDetails = [
  { id: "address", label: "Address", type: "textarea" },
  { id: "state", label: "State", type: "select" },
  { id: "city", label: "City", type: "select" },
  { id: "pin", label: "Pin", type: "text" },
  { id: "addressType", label: "Type", type: "checkbox" },
  { id: "mobile", label: "Mobile", type: "text" },
];

const App = () => {
  const [items, setItems] = useState<
    { id: string; type: string; label: string }[]
  >([]);
  const [OverIndex, setOverIndex] = useState<string>("");
  const [highlightedId, setHighlightedId] = useState<string>("");

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over) {
      if (active.data.current == undefined) {
        const { id } = active;
        const newItem = {
          id: `${id}+${Date.now()}`,
          type: `${id.split("-")[0]}`,
          label: `${id.split("-")[1]}`,
        };
        if (OverIndex !== null && OverIndex != undefined && OverIndex !== "") {
          AddItemsBasedOnOverIndex({ newItem, OverIndex });
        } else {
          if (newItem.type === "templet") {
            AddTempleteItems(newItem);
          } else setItems([...items, newItem]);
        }
      } else {
        setItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
    setOverIndex("");
    setHighlightedId("");
  };

  const AddItemsBasedOnOverIndex = ({
    newItem,
    OverIndex,
  }: {
    newItem: { id: string; type: string; label: string };
    OverIndex: string;
  }) => {
    let filteredItems: { id: string; type: string; label: string }[] = [];
    setItems((prev) => {
      const updatedItems = [...prev];
      const NoOfItemsTobermoved = updatedItems.length - parseInt(OverIndex);
      filteredItems = updatedItems.splice(
        parseInt(OverIndex),
        NoOfItemsTobermoved
      );
      return updatedItems;
    });
    if (newItem.type === "templet") {
      AddTempleteItems(newItem);
    } else {
      setItems((prev) => {
        const updatedItems = [...prev];
        updatedItems.push(newItem);
        return updatedItems;
      });
    }
    if (filteredItems.length > 0) {
      filteredItems.map((item) => {
        AddItemsToArray(item);
      });
    }
  };

  const AddItemsToArray = (item: {
    id: string;
    type: string;
    label: string;
  }) => {
    const newTempletItem = {
      id: `${item.id}+${Date.now()}`,
      type: item.type,
      label: item.label,
    };
    setItems((prev) => {
      const updatedItems = [...prev];
      updatedItems.push(newTempletItem);
      return updatedItems;
    });
  };

  const AddTempleteItems = (newItem: {
    id: string;
    type: string;
    label: string;
  }) => {
    if (newItem.label === "ApplicationInformation") {
      templateApplicationInfo.map((item) => {
        AddItemsToArray(item);
      });
    } else if (newItem.label === "CommunicationDetails") {
      templateCommunicationDetails.map((item) => {
        AddItemsToArray(item);
      });
    }
  };

  const handleDragOver = (event: any) => {
    const { over } = event;
    if (!over) return;

    if (over && over.id !== "droppable") {
      const Index = items.findIndex((item) => item.id === over.id);
      setHighlightedId(over.id);
      setOverIndex(Index.toString());
    } else {
      setHighlightedId("");
      setOverIndex("");
    }
  };

  return (
    <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ minWidth: "20%", border: "1px solid black" }}>
          <DraggableCompA />
        </div>
        <div style={{ minWidth: "70%" }}>
          <DroppableCompB items={items} onOver={highlightedId} />
        </div>
      </div>
    </DndContext>
  );
};

export default App;
