const handleMouseMove = () => console.log("Mouse hover on the para")
const Move = () => <p onMouseMove={handleMouseMove}>DOn't move the mouse on the para of my display ok man .....</p>
const Button = () => (
  <button
    onClick={() => {
      console.log("Why click me!!");
    }}
  >
    click me
  </button>
);
const CopyText = () => {
  return (<p onCopy={()=>{console.log("Don't copy my content")}}>
    klasjdflkasdasl;dcsal;dcasl;dksa;ldkasl;dkasl;dsal;dksal;
    ashdaskjdhcaskdjxalkdjaslkjas.kasdjsa.kjdxsal;kdkjas;ldsajk
  </p>)
};

function App() {
  return (
    <>
      <Button />
      <CopyText/>
      <Move/>
    </>
  );
}

export default App;
