import * as React from "react";

const DonatePage: React.FC = () => {
  return (
    <main style={{ padding: 24 }}>
      <h1>Dona Ora</h1>
      <p>
        Grazie per il tuo supporto! Puoi donare tramite bonifico usando le
        coordinate in fondo alla pagina oppure contattarci per maggiori
        informazioni.
      </p>
    </main>
  );
};

export default DonatePage;

export const Head = () => <title>Dona Ora | Associazione Nuova Vita</title>;
