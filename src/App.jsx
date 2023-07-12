import Container from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Raffer from "./components/Raffer";
import { VolumeProvider } from "./components/VolumeContext";

export default function App() {
  return (
    <div className="font-poppins text-white select-none">
      <VolumeProvider>
        <Header />
        <Container>
          <Raffer />
        </Container>
        <Footer />
      </VolumeProvider>
    </div>
  );
}
