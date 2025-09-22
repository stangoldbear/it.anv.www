import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ChiSiamoPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Chi Siamo</h1>
      <p>
        Siamo l'Associazione Nuova Vita. Questa pagina conterrà informazioni
        sulla nostra missione, i valori e il team.
      </p>
    </>
  );
};

export default ChiSiamoPage;

export const Head: HeadFC = () => <title>Chi Siamo | it.assonuovavita</title>;
