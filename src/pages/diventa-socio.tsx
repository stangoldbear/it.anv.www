import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const DiventaSocioPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Diventa Socio</h1>
      <p>
        Informazioni su come iscriversi all'associazione, requisiti, quote e
        benefici.
      </p>
    </>
  );
};

export default DiventaSocioPage;

export const Head: HeadFC = () => (
  <title>Diventa Socio | it.assonuovavita</title>
);
