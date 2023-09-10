const express = require('express');
const cors = require('cors');
const app = express();



const FriendController = require('./controller/FriendController');

app.use(cors());
// Outras configurações do servidor
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('<h1>FriendShip</h1>')
})


app.get('/friends', FriendController.listarFriends);
app.post('/friends', FriendController.criarFriend);

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});