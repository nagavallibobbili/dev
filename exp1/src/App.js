
import './App.css';

function App() {
  return (
    <div className="App">
            
          <h2>Registration Form</h2>
          <form method="post"/>
            <input type="text" name="name" placeholder="Name" required/><br/>
            <input type="email" name="email" placeholder="Email" required/><br/>
            <input type="password" name="password" placeholder="Password" required/><br/>
            <input type="submit" value="Submit"/>

    </div>
  );
}

export default App;
