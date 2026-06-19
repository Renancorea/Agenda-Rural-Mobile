import { type SQLiteDatabase} from 'expo-sqlite';

export async function initializeDatabase( database: SQLiteDatabase) { //Função para criar a tabela de agricultores, caso ela ainda não existisse .
	await database.execAsync(` 
        CREATE TABLE IF NOT EXISTS agricultores( 
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nome TEXT NOT NULL, 
            email TEXT NOT NULL UNIQUE, 
            senha TEXT NOT NULL  
        )

        CREATE TABLE IF NOT EXISTS notas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            conteudo TEXT,
            agricultores_id INTEGER
        )

        CREATE TABLE IF NOT EXISTS eventos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            descricao TEXT,
            data DATE,
            agricultores_id INTEGER

);
    `)
}