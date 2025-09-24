import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ChiSiamoPage: React.FC<PageProps> = () => {
  return (
    <article style={{ padding: 24, lineHeight: 1.7 }}>
      <h1>Chi Siamo</h1>
      <p>
        L'Associazione Nuova Vita affonda le sue radici in due valori semplici e
        profondi: il bene e l'amore. Il nostro impegno prende forma attraverso
        iniziative concrete di raccolta e distribuzione di beni di prima
        necessità, unite all'ascolto, alla vicinanza e all'attenzione verso le
        persone che vivono situazioni di bisogno.
      </p>
      <p>
        Siamo un gruppo unito che attribuisce grande valore all'aiuto del
        prossimo e alla collaborazione. Crediamo nella solidarietà, nel dialogo
        e nella costruzione di legami che mettano al centro la dignità di
        ciascuno.
      </p>

      <h2>La nostra "casa"</h2>
      <p>
        Per raccontare chi siamo, ti invitiamo simbolicamente a entrare nella
        nostra casa: la nostra associazione. È una casa senza mura, la cui
        architettura e le cui stanze sono delineate dallo statuto. A darle vita
        sono le persone: la disponibilità, la presenza, le fatiche, le speranze
        e i desideri di volontari e utenti che la abitano ogni giorno.
      </p>

      <h2>Un'associazione di volontariato</h2>
      <p>
        La legge quadro n. 266 del 1991 definisce le organizzazioni di
        volontariato (o.d.v.) e riconosce loro specifiche tutele e agevolazioni;
        le o.d.v., tra l'altro, sono di diritto anche o.n.l.u.s. (organizzazioni
        non lucrative di utilità sociale). L'Associazione Nuova Vita risponde ai
        requisiti previsti e risulta iscritta al RUNTS, il Registro Unico
        Nazionale del Terzo Settore.
      </p>
      <p>
        Per approfondire, suggeriamo il sito di{" "}
        <a
          href="https://www.volabo.it/centro-di-servizi-volontariato/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Volabo, il Centro servizi per il Volontariato
        </a>{" "}
        della provincia di Bologna.
      </p>
    </article>
  );
};

export default ChiSiamoPage;

export const Head: HeadFC = () => (
  <>
    <title>Chi Siamo | Associazione Nuova Vita</title>
    <meta
      name="description"
      content="Associazione Nuova Vita: valori, missione e natura di organizzazione di volontariato iscritta al RUNTS."
    />
  </>
);
