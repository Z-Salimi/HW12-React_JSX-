import { Clients } from "./components/Clients";
import { Community } from "./components/Community";
import { Demo } from "./components/Demo";
import { Design } from "./components/Design";
import { Footer } from "./components/footer";
import { Helping } from "./components/Helping";
import { Hero } from "./components/HeroSection";
import { Marketing } from "./components/Marketing";
import { Navbar } from "./components/Navbar";
import { TimSmith } from "./components/TimSmith";
import { Unseen } from "./components/Unseen";

export default function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Clients />
    <Community />
    <Unseen />
    <Helping />
    <Design />
    <TimSmith />
    <Marketing />
    <Demo />
    <Footer />
    </div>
  )
}