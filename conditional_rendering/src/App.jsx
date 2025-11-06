const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>InValid Password</h1>;

const Password = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InValidPassword />;

const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie","New HHD"];
  return (
    <div>
      <h1>Cart <span>{'\u{1F6D2}'}</span> </h1>
      {items.length>0 && <h2>You have {items.length} items in your Cart</h2> }
      <h2>Products</h2>
      {
        items.map(item=>(
          <ul key={Math.random}>
            <li>{item}</li>
          </ul>
        ))
      }
    </div>
  );
};
function App() {
  return (
    <>
      <Cart />
      <Password isValid={false} />
    </>
  );
}

export default App;
