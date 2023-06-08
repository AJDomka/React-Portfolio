import { useState } from "react";
import { Form } from "react-bootstrap";
import "./css/Toggle.css";

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    console.log("Toggled");
  };

  return (
    <Form>
      <Form.Check
        disabled
        type="switch"
        id="toggle-switch"
        label="Toggle Dark Mode"
        checked={isChecked}
        onChange={handleToggle}
      />
    </Form>
  );
}
