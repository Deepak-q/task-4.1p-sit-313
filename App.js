import './App.css';
import CardList from './CardList';
import Header from './Header';
import Bottom from './bottom';
import Deepak from './deepak';
import CardList123 from './Cardlist1';
import staffList2 from './staffList2';
function App() {
  return (
    <div>
      <Header/>
     <img src = "./main_gate.jpg" style={{width:'100%'}}/>
     <CardList/>
     <CardList123/>
     <staffList2/>
     <Bottom/>
     <Deepak/>
    </div>
  );
}

export default App;
