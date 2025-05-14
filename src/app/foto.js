import Image from "next/image";

export default function picture() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image
        src="/foto.jpg"
        alt="Picture of the author"
        width={500}
        height={450}
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      />
    </div>
  );
}
