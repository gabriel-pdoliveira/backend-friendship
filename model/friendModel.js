const db = require('../db');

class FriendModel {
  static getAll(callback) {
    db.query('SELECT * FROM friends', (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results);
    });
  }

  // Outros métodos do modelo aqui


  static criar({ nome, idade, dtn, dtn_conhecimento, local_conhecimento }, callback) {
    const query = 'INSERT INTO friends (nome, idade, dtn, dtn_conhecimento, local_conhecimento) VALUES (?, ?, ?, ?, ?)';
    const values = [nome, idade, dtn, dtn_conhecimento, local_conhecimento];

    db.query(query, values, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      const novoFriend = {
        id: results.insertId,
        nome, idade, dtn, dtn_conhecimento, local_conhecimento
      };
      return callback(null, novoFriend);
    });

  }
}

module.exports = FriendModel;
