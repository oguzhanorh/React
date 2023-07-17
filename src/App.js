import Button from './Button';

function App() {
  return (
    <>
      <div>
        <Button success rounded outline>
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button />
      </div>
    </>
  );
}

export default App;
