const db = require('../db');

async function getAllUsers(req, res) {
  try {
    const users = await db.query('SELECT id, name, email, created_at FROM users');
    res.json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erro ao buscar usuários' });
  }
}

async function getUserById(req, res) {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ success: false, message: 'ID inválido' });

  try {
    const rows = await db.query('SELECT id, name, email, created_at FROM users WHERE id = ?', [id]);
    if (!rows || rows.length === 0) return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erro ao buscar usuário' });
  }
}

module.exports = {
  getAllUsers,
  getUserById
};
