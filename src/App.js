import './App.css';
import { Message } from './Message';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.messageStyle}>
      <Message message={"Hello world"} />
    </div>
  );
}

export default App;
