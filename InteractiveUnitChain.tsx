import React, { useState } from 'react';
import { unitLadder } from './data';
import { Volume2, ArrowRight, Check } from 'lucide-react';
import { speakText } from './speech';

export const InteractiveUnitChain: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const activeUnit = unitLadder.find((u) => u.level === selectedLevel) || unitLadder[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Սանդուղք · Jerarquía de las Unidades</span>
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Սեղմեք յուրաքանչյուր աստիճանի վրա՝ իսպաներեն և հայերեն բացատրությունը տեսնելու համար
          </p>
        </div>
        <div className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-lg border border-slate-200 shrink-0">
          Մակարդակ {activeUnit.level} / 6
        </div>
      </div>

      {/* Chain Step Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 my-5">
        {unitLadder.map((unit) => {
          const isSelected = unit.level === selectedLevel;
          return (
            <button
              key={unit.level}
              type="button"
              onClick={() => setSelectedLevel(unit.level)}
              className={`p-3.5 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1.5 opacity-80">
                <span className="font-mono font-bold">{unit.level}.</span>
                {isSelected && <Check className="w-4 h-4 text-amber-400" />}
              </div>
              <div className="font-bold text-base leading-tight">{unit.titleEs}</div>
              <div className={`text-xs sm:text-sm mt-1 font-medium ${isSelected ? 'text-amber-200' : 'text-slate-500'}`}>
                {unit.titleHy}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Unit Deep Dive */}
      <div className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-bold text-base flex items-center justify-center font-mono shadow-xs">
              {activeUnit.level}
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900">{activeUnit.titleEs}</span>
                <span className="text-slate-400 text-lg">·</span>
                <span className="text-lg sm:text-xl font-bold text-slate-700">{activeUnit.titleHy}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => speakText(activeUnit.exampleEs, 'es-ES')}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shrink-0 shadow-xs"
            title="Լսել իսպաներեն արտասանությունը"
          >
            <Volume2 className="w-4 h-4 text-amber-600" />
            <span>Լսել / Escuchar</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
              🇪🇸 Español
            </div>
            <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-4">
              {activeUnit.descEs}
            </p>
            <div className="bg-amber-50/80 border border-amber-200/90 rounded-lg px-4 py-2.5 text-sm">
              <span className="text-slate-600">Ejemplo: </span>
              <strong className="text-slate-950 font-mono text-base sm:text-lg ml-1">{activeUnit.exampleEs}</strong>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
              🇦🇲 Հայերեն
            </div>
            <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-4">
              {activeUnit.descHy}
            </p>
            <div className="bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-sm">
              <span className="text-slate-600">Օրինակ՝ </span>
              <strong className="text-slate-950 text-base sm:text-lg ml-1">{activeUnit.exampleHy}</strong>
            </div>
          </div>
        </div>

        {/* Progression Chain Visualizer */}
        <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            <span className="font-semibold text-slate-700">Աստիճանական աճ:</span>
            {unitLadder.map((u, i) => (
              <React.Fragment key={u.level}>
                <span
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    u.level === selectedLevel
                      ? 'bg-amber-100 text-amber-950 font-bold'
                      : 'hover:text-slate-900 font-medium'
                  }`}
                  onClick={() => setSelectedLevel(u.level)}
                >
                  {u.titleEs}
                </span>
                {i < unitLadder.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 inline shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
