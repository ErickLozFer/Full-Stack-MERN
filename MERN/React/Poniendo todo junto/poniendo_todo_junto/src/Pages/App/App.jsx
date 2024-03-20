import PersonCard from '../../Components/Apoyalo/PersonCard';
import './App.css';

function App() {
  return (
    <div>
      <PersonCard lastName="Doe," firstName="Jane" age={45} hairColor="Black" fullName='Jane Doe'/>
      <PersonCard lastName="Smith," firstName="John" age={88} hairColor="Brown" fullName='John Smith'/>
    </div>
  )
}

export default App