import "./styles.css";

export default function App() {
 
  return <form className="add-item" >
    <div className="">
      <label htmlFor="item">Add Item</label>
      <input type="text" id="item" name="item" />
      <button className="btn">Add</button>
    </div>
  </form>
}
