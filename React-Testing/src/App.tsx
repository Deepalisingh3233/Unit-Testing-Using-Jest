import './App.css';
import MedicinePopup from './components/MedicinePopup';
import InputEcho from './InputEcho';

const user = {
  name: 'Ankita Bajpai'
};

function handleClick() {
  alert("Hello, I am " + user.name);
}

function MyButton() {
  return (
    <button className="btn" onClick={handleClick}>
      Click Me!
    </button>
  );
}

export default function App() {

  return (
    <>
    <div className="main">
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt={`Photo of ${user.name}`}
        style={{
          width: 90,
          height: 90,
          borderRadius: '50%',
        }}
      />
      <div>
        <MyButton />
      </div>

      <div>
        <h2>Type Something:</h2>
        <InputEcho/> 
      </div>

      <div><MedicinePopup/></div>
    </div>
    </>
  );
}
