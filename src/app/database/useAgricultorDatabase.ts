/*import { useSQLiteContext } from "expo-sqlite";

export type ProductDatabase ={
    id: number;
    nome: string;
    email: string;
    senha: string;
}
export function useProductDatabase() {
    const database = useSQLiteContext();

    async function create (data: Omit<ProductDatabase, "id">){ 
        const statement = await database.prepareAsync(
            "INSERT INTO products (nome, email, senha) VALUES ($nome, $email, $senha)",
        );

        try{
            const rusult = await statement.executeAsync({
                $nome: data.nome,
                $email: data.email,
                $senha: data.senha,
            })

        const insertedRowId = rusult.lastInsertRowId.toLocaleString();

        return {insertedRowId};
            
        } catch (error){
            throw error;
        } finally{
            await statement.finalizeAsync();
        }
    }

    async function searchByName(name: string){ 
        try {
            const query = "SELECT * FROM products WHERE name LIKE ?"

            const response = await database.getAllAsync<ProductDatabase>(query, `%${name}%`)

            return response 
        } catch (error) {
            throw error;
            
        }
    }

    async function update (data: ProductDatabase){ 
        const statement = await database.prepareAsync(
            "UPDATE products SET name = $name, email = $email, senha = $senha WHERE id = $id",
        );

        try{
            await statement.executeAsync({
                $id: data.id,
                $nome: data.nome,
                $email: data.email,
                $senha: data.senha,
            })
            
        } catch (error){
            throw error;
        } finally{
            await statement.finalizeAsync();
        }
    }

    async function remove (id: number){
        try {
            await database.execAsync('DELETE FROM products WHERE id = ' + id)
        } catch (error) {
            throw error;
        }
    }

    async function show(id: number){ 
        try {
            const query = "SELECT * FROM products WHERE id = ?"
            const response = await database.getFirstSync<ProductDatabase>(query, id)
            return response
        } catch (error) {
            throw error;
            
        }
    }

    return { create, searchByName, update, remove, show }
}*/