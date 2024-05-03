import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()    

export async function getAllAIs() {
    const [rows] = await pool.query(`
    SELECT t.*, el.nombre, ct.type_content, ec.proposito, logo.imgdir
    FROM AIs t
    JOIN ecosystem_layer el ON t.ecosystem_layer_id_ecosystem_layer = el.id_ecosystem_layer
    JOIN content_type ct ON t.content_type_id_content_type = ct.id_content_type
    JOIN enterprise_category ec ON t.enterprise_category_id_enterprise_category = ec.id_enterprise_category
    JOIN logo ON t.logo_id_logo = logo.id_logo;
    `)
    return rows
}

export async function getTechnology(name) {
    const [rows] = await pool.query(`
    SELECT t.*, el.nombre, ct.type_content, ec.proposito, logo.imgdir
    FROM AIs t
    JOIN ecosystem_layer el ON t.ecosystem_layer_id_ecosystem_layer = el.id_ecosystem_layer
    JOIN content_type ct ON t.content_type_id_content_type = ct.id_content_type
    JOIN enterprise_category ec ON t.enterprise_category_id_enterprise_category = ec.id_enterprise_category
    JOIN logo ON t.logo_id_logo = logo.id_logo
    WHERE t.ai_name = ?;
    `, [name])
    return rows[0]
}

export async function getEvals(id) {
    const [evals] = await pool.query(`
    SELECT e.*
    FROM evaluaciones e
    JOIN AIs a ON e.AIs_id_ais = a.id_ais
    WHERE a.ai_name = ?;
    `, [id])
    return evals
}

export async function createEval(note, comment, date, AI) {
    const [result] = await pool.query(`
    INSERT INTO evaluaciones (calificacion, comentario, fecha, AIs_id_ais)
    VALUES (?, ?, ?, ?);
    `, [note, comment, date, AI])
    return result
}