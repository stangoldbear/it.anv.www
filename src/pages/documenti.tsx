import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const DocumentiPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Documenti</h1>
      <p>
        In questa sezione troverai documentazione, modulistica e risorse utili
        per i soci.
      </p>
    </>
  );
};

export default DocumentiPage;

export const Head: HeadFC = () => <title>Documenti | it.assonuovavita</title>;
