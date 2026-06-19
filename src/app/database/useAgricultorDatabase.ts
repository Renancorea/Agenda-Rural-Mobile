import { useSQLiteContext } from "expo-sqlite";

export type UserDatabase = {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

export function useAgricultorDatabase(){

    const database = useSQLiteContext();

    // criar conta
    async function CriarConta(data: Omit<UserDatabase,"id">){

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
        }
    }

    // login
    async function Entrar(email: string, senha: string){

        const statement =
        await database.prepareAsync(
            `SELECT * FROM agricultores WHERE email = $email`
        );

        try{

            const user =
            await statement.executeAsync({
                $email: email
            });

            const response =
            (await user.getFirstAsync()) as UserDatabase; 

            // email não existe
            if(!response){
                return {
                    success: false,
                    message: "Email não encontrado"
                };
            }
            // senha errada
            if (response?.senha !== senha) {
                return {
                    success: false,
                    message: "Senha incorreta"
                };
            }

            // cadastro certo
            return {
                success: true,
                user: response
            };
            
        }
        finally{
            await statement.finalizeAsync();
        }
    }

    // atualizar
    async function Atualizar(data: UserDatabase){

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
        }
    }

    // excluir
    async function Excluir(id:number){

        await database.execAsync(
            `DELETE FROM agricultores WHERE id = ${id}`
        );

    }

    return { CriarConta, Entrar, Atualizar, Excluir };

}