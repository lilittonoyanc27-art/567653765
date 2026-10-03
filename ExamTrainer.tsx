import React, { useState } from 'react';
import { quizQuestions } from './data';
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, HelpCircle } from 'lucide-react';

export const ExamTrainer: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQ = quizQuestions[currentIdx];
  const hasAnswered = !!selectedAnswers[currentQ.id];
  const isCorrect = selectedAnswers[currentQ.id] === currentQ.correctOptionId;

  const totalQuestions = quizQuestions.length;
  const score = Object.entries(selectedAnswers).filter(
    ([qId, ansId]) => quizQuestions.find((q) => q.id === qId)?.correctOptionId === ansId
  ).length;

  const handleSelect = (optionId: string) => {
    if (hasAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResult(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Քննության մարզիչ · Entrenador de Examen
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Ստուգեք ձեր գիտելիքները լեզվի համակարգի, մակարդակների և միավորների վերաբերյալ
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
            Հարց {currentIdx + 1} / {totalQuestions}
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="Վերսկսել թեստը"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!showResult ? (
        <div className="mt-6">
          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
            <div
              className="bg-amber-500 h-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-7 border border-slate-200">
            <div className="text-xs sm:text-sm text-amber-700 font-bold uppercase tracking-wider mb-1.5">
              🇪🇸 Pregunta
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 mb-2.5 leading-snug">
              {currentQ.questionEs}
            </h3>
            <div className="text-base sm:text-lg font-semibold text-slate-700 border-t border-slate-200 pt-2.5 mb-5 leading-relaxed">
              🇦🇲 <span className="text-slate-950">{currentQ.questionHy}</span>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswers[currentQ.id] === opt.id;
                const isOptionCorrect = opt.id === currentQ.correctOptionId;

                let optionStyle = 'bg-white hover:bg-slate-100 border-slate-200 text-slate-900';
                if (hasAnswered) {
                  if (isOptionCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400';
                  } else if (isSelected && !isOptionCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-1 ring-rose-400';
                  } else {
                    optionStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect(opt.id)}
                    disabled={hasAnswered}
                    className={`w-full p-4 sm:p-5 rounded-xl border text-left transition-all flex items-start gap-3.5 ${optionStyle}`}
                  >
                    <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center text-xs sm:text-sm font-mono font-bold shrink-0 mt-0.5">
                      {opt.id.toUpperCase()}
                    </span>
                    <div className="flex-1">
                      <div className="text-base sm:text-lg font-semibold leading-relaxed">{opt.textEs}</div>
                      <div className="text-sm sm:text-base opacity-80 mt-1 leading-relaxed">{opt.textHy}</div>
                    </div>
                    {hasAnswered && isOptionCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {hasAnswered && isSelected && !isOptionCorrect && (
                      <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation on answer */}
            {hasAnswered && (
              <div
                className={`mt-5 p-4 sm:p-5 rounded-xl border ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50 border-amber-200 text-amber-950'
                }`}
              >
                <div className="font-bold text-base sm:text-lg mb-1.5 flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Ճիշտ է! ¡Correcto!</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                      <span>Ուշադրություն · Explicación:</span>
                    </>
                  )}
                </div>
                <p className="text-sm sm:text-base mt-1.5 leading-relaxed">{currentQ.explanationEs}</p>
                <p className="text-sm sm:text-base mt-1.5 opacity-90 leading-relaxed font-medium">{currentQ.explanationHy}</p>
              </div>
            )}
          </div>

          {/* Navigation between questions */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 disabled:opacity-30 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Նախորդը · Anterior
            </button>

            {currentIdx < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => i + 1)}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <span>Հաջորդ հարցը</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowResult(true)}
                className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <Award className="w-4 h-4" />
                <span>Ամփոփել արդյունքները</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results screen */
        <div className="mt-6 text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
            Քննական արդյունք · Resultado del Examen
          </h3>
          <p className="text-base sm:text-lg text-slate-600 mb-5">
            Դուք ճիշտ եք պատասխանել <strong className="text-slate-900">{score}</strong> հարցի՝ {totalQuestions}-ից
          </p>

          <div className="text-5xl font-black font-mono text-slate-950 mb-6">
            {Math.round((score / totalQuestions) * 100)}%
          </div>

          <div className="max-w-md mx-auto text-sm sm:text-base text-slate-700 bg-white p-5 rounded-xl border border-slate-200 mb-6 leading-relaxed">
            {score === totalQuestions ? (
              <span className="text-emerald-700 font-bold">
                Գերազանց է! ¡Excelente! Դուք կատարյալ գիտեք «La lengua como sistema» թեման:
              </span>
            ) : score >= totalQuestions / 2 ? (
              <span className="text-amber-800 font-semibold">
                Լավ արդյունք! ¡Buen trabajo! Կարող եք կրկնել այն հարցերը, որտեղ սխալվել եք:
              </span>
            ) : (
              <span className="text-rose-700 font-semibold">
                Խորհուրդ ենք տալիս նորից կարդալ «Para recordar» բաժինը և կրկնել թեստը:
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="px-7 py-3 text-sm sm:text-base font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Կրկնել թեստը · Reiniciar Examen</span>
          </button>
        </div>
      )}
    </div>
  );
};
