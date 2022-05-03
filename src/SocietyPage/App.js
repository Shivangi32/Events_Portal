import './App.css';
import AddEventCard from './MyComponents/AddEventCard';
import Card from './MyComponents/Card';
function App() {
  return (
    <div className="societyPage">
      <div className="societyName">
        <h1>INSTINCT</h1>
        <hr></hr>
      </div>
      <div className='cards'>
        <AddEventCard/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </div>
    
  );
}

export default App;
