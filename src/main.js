import App from './App.js'
import router from './routes/index.js'

const root = document.querySelector('#root');
root.append(new App().el);

router()

;(async () => {
  const res = await fetch('api/test');
  const json = await res.json();
  console.log('/api/test', json);
})()