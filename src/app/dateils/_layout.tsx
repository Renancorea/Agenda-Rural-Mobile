/*import { Slot} from 'expo-router'; // usado para redecionar para as telas "filhas".
import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite'; // importa os componentes necessarios.
import { initializeDatabase } from '../database/InitializeDatabase'; // importa a função de inicialização do banco de dados.

export default function Layout() { // componente de layout que envolve as telas do aplicativo e da acesso ao banco de dados.
    return(
        <SQLiteProvider databaseName="AgendaRural.db" onInit={initializeDatabase}> // fornece o banco de dados para as telas filhas, garantindo que ele seja inicializado antes do uso.
              <Slot/>
        </SQLiteProvider>
      
    );
}
*/