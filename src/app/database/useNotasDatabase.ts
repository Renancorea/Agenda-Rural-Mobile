import { useSQLiteContext } from "expo-sqlite";

export type EventoDatabase = {
    id: number;
    titulo: string;
    descricao: string;
    data: string;
    hora: string; 
    agricultores_id: number;
}

export function useEventoDatabase(){

    const database = useSQLiteContext();

    // criar evento
    async function CriarEvento(data: Omit<EventoDatabase, "id">){

        const statement =
        await database.prepareAsync(
            `INSERT INTO eventos (titulo, descricao, data, hora) VALUES ($titulo, $descricao, $data, $hora)`
        );

        try{

            const result =
            await statement.executeAsync({
                $titulo: data.titulo,
                $descricao: data.descricao,
                $data: data.data,
                $hora: data.hora,
            });

            return {
                insertedRowId: result.lastInsertRowId
            };

        } finally{
            await statement.finalizeAsync();
        }
    }

    // atualizar evento
    async function AtualizarEvento(data: EventoDatabase){

        const statement =
        await database.prepareAsync(
            `UPDATE eventos SET titulo = $titulo, descricao = $descricao, data = $data, hora = $hora WHERE id = $id`
        );

        try{

            await statement.executeAsync({
                $id: data.id,
                $titulo: data.titulo,
                $descricao: data.descricao,
                $data: data.data,
                $hora: data.hora,
            });

        } finally{
            await statement.finalizeAsync();
        }
    }

    // excluir evento
    async function ExcluirEvento(id:number){

        await database.execAsync(
            `DELETE FROM eventos WHERE id = ${id}`
        );

    }

    // listar eventos
    async function ListarEventos(){

        const response =
        await database.getAllAsync<EventoDatabase>(
            `SELECT * FROM eventos`
        );

        return response;
    }

    return { CriarEvento, ExcluirEvento, AtualizarEvento, ListarEventos };
}