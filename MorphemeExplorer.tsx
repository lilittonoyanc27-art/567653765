import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speakText } from './speech';

interface MorphemePiece {
  token: string;
  labelEs: string;
  labelHy: string;
  type: 'root' | 'gender' | 'number' | 'person';
  meaningEs: string;
  meaningHy: string;
}

export const MorphemeExplorer: React.FC = () => {
  const [activeWord, setActiveWord] = useState<'ninas' | 'hablar'>('ninas');
  const [selectedPieceIndex, setSelectedPieceIndex] = useState<number | null>(0);

  const ninasPieces: MorphemePiece[] = [
    {
      token: 'niñ-',
      labelEs: 'Raíz / Lexema',
      labelHy: 'Արմատ',
      type: 'root',
      meaningEs: 'Aporta el significado básico de la palabra («ser humano en la niñez»).',
      meaningHy: 'Կրում է բառի հիմնական բառային իմաստը («մանուկ/երեխա»)։'
    },
    {
      token: '-a',
      labelEs: 'Morfema flexivo de género',
      labelHy: 'Սեռի քերականական ձևույթ',
      type: 'gender',
      meaningEs: 'Indica que el referente es de género femenino.',
      meaningHy: 'Ցույց է տալիս, որ խոսքը իգական սեռի մասին է։'
    },
    {
      token: '-s',
      labelEs: 'Morfema flexivo de número',
      labelHy: 'Թվի քերականական ձևույթ',
      type: 'number',
      meaningEs: 'Indica número plural (más de una persona).',
      meaningHy: 'Ցույց է տալիս հոգնակի թիվ (մեկից ավելի անձ)։'
    }
  ];

  const hablarForms = [
    { verb: 'habl-o', personEs: '1.ª persona singular (Yo)', personHy: 'Եզակի 1-ին դեմք (Ես խոսում եմ)', morpheme: '-o' },
    { verb: 'habl-as', personEs: '2.ª persona singular (Tú)', personHy: 'Եզակի 2-րդ դեմք (Դու խոսում ես)', morpheme: '-as' },
    { verb: 'habl-a', personEs: '3.ª persona singular (Él / Ella)', personHy: 'Եզակի 3-րդ դեմք (Նա խոսում է)', morpheme: '-a' },
    { verb: 'habl-amos', personEs: '1.ª persona plural (Nosotros)', personHy: 'Հոգնակի 1-ին դեմք (Մենք խոսում ենք)', morpheme: '-amos' }
  ];

  const activePieces = ninasPieces;
  const currentPiece = selectedPieceIndex !== null ? activePieces[selectedPieceIndex] : null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Ձևույթների ինտերակտիվ վերլուծություն · Descomposición Morfemática</span>
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Սեղմեք յուրաքանչյուր ձևույթի վրա՝ նրա քերականական դերն ու իմաստը տեսնելու համար
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
          <button
            type="button"
            onClick={() => {
              setActiveWord('ninas');
              setSelectedPieceIndex(0);
            }}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md transition-colors ${
              activeWord === 'ninas'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            niñ-a-s (Գոյական)
          </button>
          <button
            type="button"
            onClick={() => setActiveWord('hablar')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md transition-colors ${
              activeWord === 'hablar'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            habl- (Բայի խոնարհում)
          </button>
        </div>
      </div>

      {activeWord === 'ninas' ? (
        <div className="mt-6">
          {/* Interactive Morpheme Tiles */}
          <div className="flex flex-wrap items-center justify-center gap-4 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
            {ninasPieces.map((piece, idx) => {
              const isSelected = selectedPieceIndex === idx;
              return (
                <button
                  key={piece.token}
                  type="button"
                  onClick={() => {
                    setSelectedPieceIndex(idx);
                    speakText(piece.token.replace(/[-]/g, ''), 'es-ES');
                  }}
                  className={`group relative px-7 py-5 rounded-2xl border transition-all text-center ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md ring-2 ring-amber-400 scale-105'
                      : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-900'
                  }`}
                >
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight block">
                    {piece.token}
                  </span>
                  <span
                    className={`text-sm sm:text-base block mt-2 font-bold ${
                      isSelected ? 'text-amber-300' : 'text-slate-600'
                    }`}
                  >
                    {piece.labelHy}
                  </span>
                </button>
              );
            })}

            <div className="w-full text-center mt-3 flex items-center justify-center gap-3">
              <span className="text-sm sm:text-base text-slate-500 font-medium">Արդյունքը միասին՝</span>
              <strong className="text-slate-950 font-extrabold text-2xl sm:text-3xl font-mono">niñas</strong>
              <button
                type="button"
                onClick={() => speakText('niñas', 'es-ES')}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-700 hover:text-slate-950"
                title="Լսել niñas"
              >
                <Volume2 className="w-5 h-5 text-amber-600" />
              </button>
              <span className="text-slate-400 text-xl">·</span>
              <span className="text-lg sm:text-xl font-bold text-slate-800">աղջիկներ</span>
            </div>
          </div>

          {/* Details on clicked piece */}
          {currentPiece && (
            <div className="mt-5 p-5 sm:p-6 rounded-xl bg-amber-50/80 border border-amber-200 text-slate-900 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono font-extrabold text-2xl text-amber-950">{currentPiece.token}</span>
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-1 bg-amber-200 text-amber-950 rounded-md">
                    {currentPiece.labelEs}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed mt-2">{currentPiece.meaningEs}</p>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-amber-200 md:pl-5 pt-4 md:pt-0">
                <div className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wide mb-1.5">
                  🇦🇲 Հայերեն մեկնաբանություն
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-950 mb-1.5">
                  {currentPiece.labelHy}
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">{currentPiece.meaningHy}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Verb conjugation breakdown */
        <div className="mt-6 space-y-4">
          <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-base sm:text-lg text-slate-800 mb-4 leading-relaxed">
              Բայի հիմքը մնում է <strong className="font-mono font-bold text-slate-950 text-lg">habl-</strong> (արմատ), իսկ վերջավորությունները (morfemas flexivos) փոխվում են ըստ դեմքի և թվի.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {hablarForms.map((item) => (
                <div
                  key={item.verb}
                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-400 transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono font-bold text-lg sm:text-xl text-slate-950">
                        {item.verb}
                      </span>
                      <button
                        type="button"
                        onClick={() => speakText(item.verb.replace('-', ''), 'es-ES')}
                        className="text-slate-400 hover:text-slate-900 p-1"
                        title={`Լսել ${item.verb}`}
                      >
                        <Volume2 className="w-4 h-4 text-amber-600" />
                      </button>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">{item.personEs}</div>
                    <div className="text-sm sm:text-base font-semibold text-amber-950 mt-1">{item.personHy}</div>
                  </div>

                  <span className="font-mono text-sm sm:text-base font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg">
                    {item.morpheme}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
