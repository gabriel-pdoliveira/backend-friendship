const Friend = require('../model/friendModel');

class FriendController {
  static listarFriends(req, res) {
    Friend.getAll((err, friends) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao buscar usuários' });
      }
      return res.json(friends);
    });
  }

  static criarFriend(req, res) {
    const { nome, idade, dtn, dtn_conhecimento, local_conhecimento } = req.body;

    // Validar os dados de entrada, certificando-se de que estão corretos

    Friend.criar({ nome, idade, dtn, dtn_conhecimento, local_conhecimento }, (err, novoFriend) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao criar usuário' });
      }
      return res.status(201).json(novoFriend); // 201 Created
    });
  }
  

  // Outros métodos do controlador aqui
}

module.exports = FriendController;
