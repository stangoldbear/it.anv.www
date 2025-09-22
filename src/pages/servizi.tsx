import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ServiziPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Servizi</h1>
      <p>
        Elenco dei servizi offerti dall'associazione, con descrizioni e modalità
        di accesso.
      </p>
    </>
  );
};

export default ServiziPage;

export const Head: HeadFC = () => <title>Servizi | it.assonuovavita</title>;
