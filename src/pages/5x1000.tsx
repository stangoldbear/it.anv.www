import * as React from "react";

const FivePerMillePage: React.FC = () => {
  return (
    <main style={{ padding: 24 }}>
      <h1>Dona il 5 per mille</h1>
      <p>
        Sostieni l'Associazione Nuova Vita con il tuo 5x1000. Inserisci il
        nostro codice fiscale <strong>91298160374</strong> nella tua
        dichiarazione dei redditi.
      </p>
    </main>
  );
};

export default FivePerMillePage;

export const Head = () => <title>5x1000 | Associazione Nuova Vita</title>;
