import app from './app';

require('dotenv').config();

const port = 3001;
app.listen(port, () => {
  console.log(`Testando api na porta ${process.env.APP_PORT}`);
});
