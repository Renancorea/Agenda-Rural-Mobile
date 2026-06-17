/*import { useSQLiteContext } from "expo-sqlite";

export type UserDatabase = {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

export function useAgricultorDatabase(){

    const database = useSQLiteContext();

    // CRIAR
    async function create(data: Omit<UserDatabase,"id">){

        const statement =
        await database.prepareAsync(
            `INSERT INTO agricultores (nome, email, senha) VALUES ($nome, $email, $senha)`
        );

        try{
            const result =
            await statement.executeAsync({
                $nome: data.nome,
                $email: data.email,
                $senha: data.senha,
            });

            return {
                insertedRowId:
                result.lastInsertRowId 

            }; 
        } 

        finally{
            await statement.finalizeAsync();
        }}

    // ATUALIZAR
    async function update(data: UserDatabase){
        const statement =
        await database.prepareAsync(
            `UPDATE agricultores SET nome = $nome, email = $email, senha = $senha WHERE id = $id`
    );
        try{
            await statement.executeAsync({
                $id: data.id,
                $nome: data.nome,
                $email: data.email,
                $senha: data.senha
            });
        } 

        finally{
            await statement.finalizeAsync();
        } }

    // EXCLUIR
    async function remove(id:number){
        await database.execAsync(
            `DELETE FROM agricultores WHERE id = ${id}`
    );
    }

    // LISTAR
    async function list(){
        const response =
        await database.getAllAsync<UserDatabase>(
            `SELECT * FROM agricultores`
        );
        return response;
    }

    return { create, update, remove, list };

}*/