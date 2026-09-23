import Flow from "../components/text/Flow";

const Test = () => {
  return (
    <div>
      <h1>A test page... on prod???</h1>
      <p>That's the way we rock.</p>
      <p><Flow text="This is an example wave text" types={["wave"]} /></p>
    </div>
  );
};

export default Test;