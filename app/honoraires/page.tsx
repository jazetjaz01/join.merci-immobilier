import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Info, CheckCircle2 } from "lucide-react";

const honorairesData = [
  { tranche: "Inférieur à 15 000 €", ht: "1 667 €", ttc: "2 000 €" },
  { tranche: "15 000 € à 29 999 €", ht: "2 500 €", ttc: "3 000 €" },
  { tranche: "30 000 € à 39 999 €", ht: "2 916 €", ttc: "3 500 €" },
  { tranche: "40 000 € à 49 999 €", ht: "3 333 €", ttc: "4 000 €" },
  { tranche: "50 000 € à 59 999 €", ht: "4 166 €", ttc: "5 000 €" },
  { tranche: "60 000 € à 69 999 €", ht: "5 000 €", ttc: "6 000 €" },
  { tranche: "70 000 € à 79 999 €", ht: "5 833 €", ttc: "7 000 €" },
  { tranche: "80 000 € à 94 999 €", ht: "6 666 €", ttc: "8 000 €" },
  { tranche: "95 000 € à 134 999 €", ht: "7 083 €", ttc: "8 500 €" },
  { tranche: "135 000 € à 144 999 €", ht: "7 500 €", ttc: "9 000 €" },
  { tranche: "145 000 € à 179 999 €", ht: "8 333 €", ttc: "10 000 €" },
  { tranche: "180 000 € à 199 999 €", ht: "9 166 €", ttc: "11 000 €" },
  { tranche: "200 000 € à 239 999 €", ht: "10 000 €", ttc: "12 000 €" },
  { tranche: "À partir de 240 000 €", ht: "4,166 %", ttc: "5 %" },
];

export default function HonorairesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            Barème des Honoraires
          </h1>
          <div className="h-1 w-20 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-slate-600 font-medium">Merci Immobilier — Mise à jour 2026</p>
        </div>

        <div className="bg-white shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 bg-slate-900 text-white flex items-center gap-3">
            <FileText className="size-6 text-teal-400" />
            <h2 className="text-xl font-semibold uppercase tracking-wider">Transactions</h2>
          </div>

          <div className="p-0">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="text-slate-900 font-bold py-6 px-8 text-lg">Prix des biens</TableHead>
                  <TableHead className="text-slate-900 font-bold py-6 px-8 text-lg text-right">Honoraires HT</TableHead>
                  <TableHead className="text-slate-900 font-bold py-6 px-8 text-lg text-right bg-teal-50/50 text-teal-800">Honoraires TTC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {honorairesData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-slate-50 transition-colors">
                    <TableCell className="py-4 px-8 font-medium text-slate-700">{row.tranche}</TableCell>
                    <TableCell className="py-4 px-8 text-right text-slate-500">{row.ht}</TableCell>
                    <TableCell className="py-4 px-8 text-right font-bold text-slate-900 bg-teal-50/30">
                      {row.ttc}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Mentions Légales / Informations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 border border-slate-200 flex gap-4">
            <Info className="size-6 text-teal-600 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Informations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Les honoraires sont à la charge du vendeur, sauf mention contraire stipulée sur le mandat de vente. 
                Nos tarifs s'entendent TVA au taux en vigueur de 20% incluse.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 border border-slate-200 flex gap-4">
            <CheckCircle2 className="size-6 text-teal-600 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Engagement</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Merci Immobilier s'engage à une transparence totale. Aucun frais supplémentaire n'est appliqué 
                en dehors de ce barème contractuel.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-xs italic">
            Merci Immobilier — SIRET : 85222662000015 — Carte Professionnelle : CPI 66012021000000021
          </p>
        </div>
      </div>
    </main>
  );
}