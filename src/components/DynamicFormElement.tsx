import React from "react";

interface DynamicFormElementProps {
  id: string;
  label: string;
  type: string;
}

const DynamicFormElement: React.FC<DynamicFormElementProps> = ({
  id,
  label,
  type,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === "text" &&
        (label === "Pin" ? (
          <input
            type="text"
            id={id}
            placeholder={label}
            pattern={"d{6}"}
            minLength={6}
            maxLength={6}
          />
        ) : (
          <input
            type="text"
            id={id}
            placeholder={label}
            pattern={"d{10}"}
            minLength={10}
            maxLength={10}
          />
        ))}
      {type === "textfield" && (
        <input type="text" id={id} placeholder={label} />
      )}
      {type === "textarea" && (
        <input type="textarea" id={id} placeholder={label} />
      )}
      {type === "number" && <input type="number" id={id} placeholder={label} />}
      {type === "checkbox" &&
        (label === "Language" ? (
          <div>
            <input type="checkbox" id={id} value="Kannada" /> Kannada
            <input type="checkbox" id={id} value="Hindi" /> Hindi
            <input type="checkbox" id={id} value="Others" /> Others
          </div>
        ) : label === "Type" ? (
          <div>
            <input type="checkbox" id={id} value="ParmentAddress" />{" "}
            ParmentAddress
            <input type="checkbox" id={id} value="TemprearyAddress" />{" "}
            TemprearyAddress
          </div>
        ) : (
          label === "Checkbox" && <div></div>
        ))}
      {type === "select" &&
        (label === "Country" ? (
          <select id={id}>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
          </select>
        ) : label === "State" ? (
          <select id={id}>
            <option value="Karnataka">Karnataka</option>
            <option value="Andra">Andra</option>
          </select>
        ) : label === "City" ? (
          <select id={id}>
            <option value="Mysuru">Mysuru</option>
            <option value="Mandya">Mandya</option>
          </select>
        ) : (
          label === "Select" && (
            <select id={id} disabled={true}>
              <option value=""></option>
            </select>
          )
        ))}
      {type === "radio" &&
        (label === "Gender" ? (
          <div>
            <input type="radio" id={id} value="Male" /> Male
            <input type="radio" id={id} value="Felmale" /> Felmale
            <input type="radio" id={id} value="Others" /> Others
          </div>
        ) : (
          <div></div>
        ))}
      {type === "Date" && (
        <div>
          <input type="Date" id={id} placeholder={label} />
        </div>
      )}
    </div>
  );
};

export default DynamicFormElement;
