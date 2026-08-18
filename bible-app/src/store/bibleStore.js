import { create } from 'zustand';

import NVI from "../data/NVI.json";
import NAA from "../data/NAA.json";
import ARA from "../data/ARA.json";
import ARC from "../data/ARC.json";

export const useBibleStore = create((set) => ({
  ara: ARA,
  nvi: NVI,
  naa: NAA,
  arc: ARC,
  loadBibles: () => {
    // Como os JSONs já estão importados estaticamente, 
    // esta função atende à chamada do App.jsx sem gerar erro.
    console.log("Bíblias carregadas com sucesso!");
  },
}));