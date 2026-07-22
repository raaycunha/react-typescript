interface GreetingProps {
  name: string;
}
const Greeting = ({ name }: GreetingProps) => {
  return (
    <div className="m-3">
      <h1>Eai {name}!</h1>
    </div>
  );
};

export default Greeting;
