export default function Container({ children }) {
  return (
    <div
      className="h-[calc(100vh_-_5.5rem)] md:h-[calc(100vh_-_6rem)] w-screen bg-body-color
        flex justify-center items-center"
    >
      {children}
    </div>
  );
}
