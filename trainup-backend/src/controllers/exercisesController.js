const db = require('../db');

async function getAllExercises(req, res){
    try {
        const rows = await db.query('SELECT name, muscle_group, gif_url FROM exercise_library');
        
        res.json({ success: true, data: rows });
    } catch(err) {
        console.error('Erro no exercisesController:', err); // Log mais detalhado
        res.status(500).json({ success: false, message: 'Erro ao buscar exercícios' });
    }
}

module.exports = {
    getAllExercises
};