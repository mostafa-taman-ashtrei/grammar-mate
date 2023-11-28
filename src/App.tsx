import { Button } from "./components/ui/button";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen">
      Hello World!

      <Button>Hey there I'm a btn</Button>
    </div>
  );
};

export default App;
