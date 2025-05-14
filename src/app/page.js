import Image from "next/image";
import HomePage from "./movie";
import picture from "./page";

export default function page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <HomePage />
      <picture />
    </div>
  );
}
