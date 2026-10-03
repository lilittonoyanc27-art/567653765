import React, { useState, useMemo } from 'react';
import { linguisticSections } from './data';
import { LinguisticSection, ViewMode } from './types';
import { speakText } from './speech';
import { InteractiveUnitChain } from './InteractiveUnitChain';
import { MorphemeExplorer } from './MorphemeExplorer';
import { ExamTrainer } from './ExamTrainer';
import {
  Volume2,
  Search,
  Eye,
  EyeOff,
  GraduationCap,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  XCircle,
  BookmarkCheck,
  Split,
  MousePointerClick,
  Type
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'study' | 'units' | 'morphemes' | 'exam'>('study');
  const [viewMode, setViewMode] = useState<ViewMode>('interactive');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('large');
  const [searchQuery, setSearchQuery] = useState('');
  // Map of item ID -> boolean (is translated text currently revealed)
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  // Bookmarked item IDs
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-1');

  // Toggle single item translation
  const toggleItemTranslation = (id: string) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Toggle bookmark
  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Reveal all or hide all Armenian translations
  const revealAll = () => {
    const allIds: Record<string, boolean> = {};
    linguisticSections.forEach((sec) => {
      sec.items.forEach((item) => {
        allIds[item.id] = true;
      });
    });
    setRevealedIds(allIds);
  };

  const hideAll = () => {
    setRevealedIds({});
  };

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return linguisticSections;
    const q = searchQuery.toLowerCase();
    return linguisticSections
      .map((section) => {
        const titleMatch =
          section.titleEs.toLowerCase().includes(q) ||
          section.titleHy.toLowerCase().includes(q);
        const matchingItems = section.items.filter(
          (item) =>
            item.es.toLowerCase().includes(q) ||
            item.hy.toLowerCase().includes(q) ||
            item.note?.es.toLowerCase().includes(q) ||
            item.note?.hy.toLowerCase().includes(q) ||
            item.breakdownParts?.some(
              (p) =>
                p.part.toLowerCase().includes(q) ||
                p.roleEs.toLowerCase().includes(q) ||
                p.roleHy.toLowerCase().includes(q)
            )
        );
        if (titleMatch || matchingItems.length > 0) {
          return {
            ...section,
            items: titleMatch ? section.items : matchingItems
          };
        }
        return null;
      })
      .filter((s): s is LinguisticSection => s !== null);
  }, [searchQuery]);

  // Determine text scale classes
  const textScaleClass =
    fontSize === 'xl'
      ? 'text-scale-xl'
      : fontSize === 'large'
      ? 'text-scale-large'
      : 'text-scale-normal';

  const bodyTextSize =
    fontSize === 'xl'
      ? 'text-xl sm:text-2xl leading-relaxed'
      : fontSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed'
      : 'text-base sm:text-lg leading-relaxed';

  const headingTextSize =
    fontSize === 'xl'
      ? 'text-2xl sm:text-3xl'
      : fontSize === 'large'
      ? 'text-xl sm:text-2xl'
      : 'text-lg sm:text-xl';

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col ${textScaleClass}`}>
      {/* Top Bar Contract: 3 zones */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('study');
              setActiveSectionId('sec-1');
            }}
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 shrink-0 flex items-center gap-2.5"
          >
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm shadow-xs">
              Es
            </span>
            <span className="truncate">La lengua como sistema</span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 shrink-0">
            <button
              type="button"
              onClick={() => {
                setActiveTab('study');
                setActiveSectionId('sec-1');
              }}
              className={`hover:text-slate-900 transition-colors ${
                activeTab === 'study' && activeSectionId === 'sec-1'
                  ? 'text-slate-900 font-semibold'
                  : ''
              }`}
            >
              1. Համակարգ
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('study');
                setActiveSectionId('sec-2');
              }}
              className={`hover:text-slate-900 transition-colors ${
                activeTab === 'study' && activeSectionId === 'sec-2'
                  ? 'text-slate-900 font-semibold'
                  : ''
              }`}
            >
              2. Նշաններ
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('study');
                setActiveSectionId('sec-3');
              }}
              className={`hover:text-slate-900 transition-colors ${
                activeTab === 'study' && activeSectionId === 'sec-3'
                  ? 'text-slate-900 font-semibold'
                  : ''
              }`}
            >
              3. Մակարդակներ
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('units')}
              className={`hover:text-slate-900 transition-colors ${
                activeTab === 'units' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              4. Միավորներ
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('morphemes')}
              className={`hover:text-slate-900 transition-colors ${
                activeTab === 'morphemes' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              5. Ձևույթ (niñ-a-s)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('study');
                setActiveSectionId('sec-summary');
              }}
              className={`hover:text-slate-900 transition-colors ${
                activeTab === 'study' && activeSectionId === 'sec-summary'
                  ? 'text-slate-900 font-semibold'
                  : ''
              }`}
            >
              Քննության համար
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'exam' ? 'study' : 'exam')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                activeTab === 'exam'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{activeTab === 'exam' ? 'Դասագիրք' : 'Քննության թեստ'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Hero Banner */}
      <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-mono text-amber-400 mb-2">
                <span>Իսպաներեն լեզվաբանություն</span>
                <span aria-hidden="true">·</span>
                <span>Lingüística Española</span>
                <span aria-hidden="true">·</span>
                <span>Հայերեն թարգմանությամբ</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 text-balance">
                📘 La lengua como sistema — Լեզուն որպես համակարգ
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Ինտերակտիվ ուսումնական ուղեցույց. <strong className="text-amber-300 font-semibold">սեղմեք իսպաներեն ցանկացած տեքստի վրա</strong>՝ հայերեն թարգմանությունն ու քերականական մեկնաբանությունը բացելու համար:
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() =>
                  speakText(
                    'La lengua es un sistema organizado de signos y reglas que una comunidad utiliza para comunicarse.',
                    'es-ES'
                  )
                }
                className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Գլխավոր սահմանում</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('study');
                  setActiveSectionId('sec-summary');
                }}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Շատ կարճ՝ քննության համար</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Control bar: Tabs, View Mode, Font Size Controller, Search, Global translation toggles */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Main Segmented Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('study')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                activeTab === 'study'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Ամբողջ նյութը (1-9)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('units')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                activeTab === 'units'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Միավորների սանդուղք</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('morphemes')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                activeTab === 'morphemes'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Ձևույթ (niñ-a-s)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('exam')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                activeTab === 'exam'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-900" />
              <span>Քննության մարզիչ</span>
            </button>
          </div>

          {/* Right Controls: Font Size, Search, View Mode, Global Translation Toggles */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Font Size Controller (Requested: шрифт побольше) */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg" title="Փոխել տառաչափը / Изменить размер шрифта">
              <span className="px-2 text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Type className="w-3.5 h-3.5 text-slate-600" />
                <span className="hidden sm:inline">Տառաչափ:</span>
              </span>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                  fontSize === 'normal'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Ստանդարտ տառաչափ"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 text-xs sm:text-sm font-bold rounded transition-colors ${
                  fontSize === 'large'
                    ? 'bg-white text-slate-900 shadow-xs ring-1 ring-amber-400'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Մեծ տառաչափ"
              >
                A+ Մեծ
              </button>
              <button
                type="button"
                onClick={() => setFontSize('xl')}
                className={`px-2.5 py-1 text-sm sm:text-base font-extrabold rounded transition-colors ${
                  fontSize === 'xl'
                    ? 'bg-white text-amber-900 shadow-xs ring-1 ring-amber-500'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Շատ մեծ տառաչափ"
              >
                A++
              </button>
            </div>

            {/* Search Box */}
            <div className="relative flex-1 sm:w-52">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Որոնել բառ կամ թեմա..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>

            {/* View Mode Segment */}
            {activeTab === 'study' && (
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  title="Սեղմել իսպաներենին՝ հայերենը բացելու համար"
                  onClick={() => setViewMode('interactive')}
                  className={`px-2.5 py-1 text-xs sm:text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                    viewMode === 'interactive'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <MousePointerClick className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Կտտացնել</span>
                </button>
                <button
                  type="button"
                  title="Զուգահեռ դիտում (Իսպաներեն և Հայերեն միաժամանակ)"
                  onClick={() => setViewMode('side-by-side')}
                  className={`px-2.5 py-1 text-xs sm:text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                    viewMode === 'side-by-side'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Split className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Զուգահեռ</span>
                </button>
              </div>
            )}

            {/* Quick show/hide all buttons */}
            {activeTab === 'study' && viewMode === 'interactive' && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={revealAll}
                  className="px-2.5 py-1.5 text-xs sm:text-sm text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors inline-flex items-center gap-1"
                  title="Բացել բոլոր հայերեն թարգմանությունները"
                >
                  <Eye className="w-4 h-4 text-emerald-600" />
                  <span className="hidden md:inline">Բացել բոլորը</span>
                </button>
                <button
                  type="button"
                  onClick={hideAll}
                  className="px-2.5 py-1.5 text-xs sm:text-sm text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors inline-flex items-center gap-1"
                  title="Փակել բոլոր հայերեն թարգմանությունները"
                >
                  <EyeOff className="w-4 h-4 text-slate-400" />
                  <span className="hidden md:inline">Փակել բոլորը</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {activeTab === 'units' && (
          <div>
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                8. Las unidades de la lengua — Լեզվի միավորները
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1.5">
                Լեզվի միավորները դասավորվում են ամենափոքրից դեպի ամենամեծը՝
                <strong className="text-slate-900 ml-1">
                  fonema → morfema → palabra → sintagma → oración → texto
                </strong>
              </p>
            </div>
            <InteractiveUnitChain />
          </div>
        )}

        {activeTab === 'morphemes' && (
          <div>
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                5. Morfema — Ձևույթ և քերականական փոփոխություններ
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1.5">
                Ձևույթը բառի ամենափոքր մասն է, որն ունի իմաստ կամ քերականական գործառույթ:
              </p>
            </div>
            <MorphemeExplorer />
          </div>
        )}

        {activeTab === 'exam' && (
          <div>
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Շատ կարճ՝ քննության համար & Գիտելիքների ստուգում
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1.5">
                Անցեք թեստը և ստուգեք, թե ինչպես եք յուրացրել նյութը:
              </p>
            </div>
            <ExamTrainer />
          </div>
        )}

        {activeTab === 'study' && (
          <div className="space-y-10">
            {/* Interactive hint banner */}
            <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-3 text-sm sm:text-base text-amber-950">
              <div className="flex items-center gap-3">
                <MousePointerClick className="w-5 h-5 text-amber-700 shrink-0" />
                <span>
                  <strong>Հուշում.</strong> Կտտացրեք իսպաներեն ցանկացած տողի կամ քարտի վրա՝ նրա հայերեն թարգմանությունն ու բացատրությունը տեսնելու համար:
                </span>
              </div>
              <div className="text-slate-600 shrink-0 font-semibold text-xs sm:text-sm bg-white/80 px-2.5 py-1 rounded-md border border-amber-200">
                {Object.values(revealedIds).filter(Boolean).length} բացված
              </div>
            </div>

            {filteredSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs scroll-mt-28"
              >
                {/* Section Header */}
                <div className="p-5 sm:p-7 bg-slate-50/90 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-amber-700 uppercase tracking-wider mb-1.5">
                      {section.category === 'summary'
                        ? 'Ամփոփում · Resumen'
                        : `Բաժին ${section.number} · Sección ${section.number}`}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
                      <h2 className={`${headingTextSize} font-extrabold text-slate-900`}>
                        {section.titleEs}
                      </h2>
                      <span className="text-slate-400 hidden sm:inline text-xl">—</span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-700">
                        {section.titleHy}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => speakText(section.titleEs, 'es-ES')}
                      className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 rounded-lg transition-colors"
                      title="Լսել բաժնի վերնագիրը"
                    >
                      <Volume2 className="w-5 h-5 text-amber-600" />
                    </button>
                  </div>
                </div>

                {/* Section Items */}
                <div className="p-5 sm:p-7 space-y-4">
                  {section.items.map((item) => {
                    const isRevealed =
                      viewMode === 'side-by-side' || !!revealedIds[item.id];
                    const isBookmarked = !!bookmarks[item.id];

                    return (
                      <div
                        key={item.id}
                        className={`rounded-xl border transition-all duration-200 ${
                          item.type === 'correct'
                            ? 'border-emerald-300 bg-emerald-50/25'
                            : item.type === 'incorrect'
                            ? 'border-rose-300 bg-rose-50/25'
                            : item.type === 'rule'
                            ? 'border-amber-300/90 bg-amber-50/30'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        } ${isRevealed ? 'ring-1 ring-slate-300 shadow-xs' : ''}`}
                      >
                        {/* Interactive Click Area */}
                        <div
                          onClick={() => {
                            if (viewMode === 'interactive') {
                              toggleItemTranslation(item.id);
                            }
                          }}
                          className={`p-4 sm:p-5 cursor-pointer select-text transition-colors ${
                            viewMode === 'interactive'
                              ? 'hover:bg-slate-50/90'
                              : ''
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              {/* Spanish Row */}
                              <div className="flex items-start gap-3">
                                {item.type === 'correct' && (
                                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                                )}
                                {item.type === 'incorrect' && (
                                  <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                                )}
                                {item.type === 'rule' && (
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 mt-2.5" />
                                )}

                                <div className="flex-1">
                                  <div className="flex items-baseline gap-2.5">
                                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-400">
                                      🇪🇸
                                    </span>
                                    <p
                                      className={`${bodyTextSize} ${
                                        item.type === 'correct'
                                          ? 'font-bold text-emerald-950'
                                          : item.type === 'incorrect'
                                          ? 'font-semibold text-rose-950 line-through decoration-rose-500'
                                          : item.type === 'rule'
                                          ? 'font-bold text-slate-900'
                                          : 'font-medium text-slate-900'
                                      }`}
                                    >
                                      {item.es}
                                    </p>
                                  </div>

                                  {/* Note in Spanish if any */}
                                  {item.note?.es && (
                                    <div className="text-xs sm:text-sm text-slate-600 mt-1.5 pl-7">
                                      {item.note.es}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Action icons */}
                            <div
                              className="flex items-center gap-1.5 shrink-0"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                type="button"
                                onClick={() => speakText(item.es, 'es-ES')}
                                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                                title="Լսել իսպաներեն արտասանությունը"
                              >
                                <Volume2 className="w-4 h-4 text-amber-600" />
                              </button>

                              <button
                                type="button"
                                onClick={() => toggleBookmark(item.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                  isBookmarked
                                    ? 'text-amber-500 hover:text-amber-600'
                                    : 'text-slate-300 hover:text-slate-700'
                                }`}
                                title="Պահպանել էջանիշ"
                              >
                                <BookmarkCheck className="w-4 h-4" />
                              </button>

                              {viewMode === 'interactive' && (
                                <button
                                  type="button"
                                  onClick={() => toggleItemTranslation(item.id)}
                                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-semibold transition-colors inline-flex items-center gap-1.5 ${
                                    isRevealed
                                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                                  }`}
                                >
                                  {isRevealed ? (
                                    <>
                                      <EyeOff className="w-3.5 h-3.5 text-amber-700" />
                                      <span>Փակել</span>
                                    </>
                                  ) : (
                                    <>
                                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                                      <span>Թարգմանել</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Armenian Revealed Translation Area */}
                          {isRevealed && (
                            <div className="mt-4 pt-4 border-t border-slate-200/90 pl-7 bg-slate-50/80 -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 p-4 sm:p-5 rounded-b-xl animate-in fade-in duration-150">
                              <div className="flex items-start gap-2.5">
                                <span className="text-xs sm:text-sm font-mono font-bold text-amber-800">
                                  🇦🇲
                                </span>
                                <div className="flex-1">
                                  <p
                                    className={`${bodyTextSize} ${
                                      item.type === 'correct'
                                        ? 'font-bold text-emerald-950'
                                        : item.type === 'incorrect'
                                        ? 'font-semibold text-rose-950'
                                        : 'font-semibold text-slate-950'
                                    }`}
                                  >
                                    {item.hy}
                                  </p>

                                  {/* Armenian Note if any */}
                                  {item.note?.hy && (
                                    <div className="text-xs sm:text-sm text-slate-700 mt-2 font-normal">
                                      {item.note.hy}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Breakdown Parts (e.g. significante/significado, niñ-a-s, Sujeto/Predicado) */}
                        {item.breakdownParts && item.breakdownParts.length > 0 && (
                          <div className="p-4 sm:p-5 bg-slate-50/90 border-t border-slate-200">
                            <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mb-2.5">
                              Մասերի վերլուծություն · Desglose
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {item.breakdownParts.map((bp, i) => (
                                <div
                                  key={i}
                                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-300 transition-colors"
                                >
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className="font-bold text-base sm:text-lg text-slate-900 font-mono">
                                      {bp.part}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        speakText(
                                          bp.part.replace(/[\(\)նշանակիչյութ]/g, ''),
                                          'es-ES'
                                        )
                                      }
                                      className="p-1 text-slate-400 hover:text-slate-800"
                                      title="Լսել"
                                    >
                                      <Volume2 className="w-4 h-4 text-amber-600" />
                                    </button>
                                  </div>
                                  <div className="text-xs sm:text-sm text-slate-700 mb-1.5 leading-relaxed">
                                    🇪🇸 {bp.roleEs}
                                  </div>
                                  <div className="text-xs sm:text-sm font-semibold text-amber-950 pt-1.5 border-t border-slate-100 leading-relaxed">
                                    🇦🇲 {bp.roleHy}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Section Specific Widgets */}
                {section.extraWidget === 'sign-diagram' && (
                  <div className="p-5 sm:p-7 bg-slate-50 border-t border-slate-200">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3.5 flex items-center gap-2">
                      <span>Ինտերակտիվ նշան · El Signo Lingüístico («casa»)</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base mb-2.5">
                          1
                        </div>
                        <div className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wider">
                          c - a - s - a
                        </div>
                        <div className="text-sm font-bold text-amber-800 mt-1.5">
                          Significante · Նշանակիչ
                        </div>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          Հնչյունական կամ գրավոր ձևը, որը մենք լսում կամ կարդում ենք:
                        </p>
                        <button
                          type="button"
                          onClick={() => speakText('casa', 'es-ES')}
                          className="mt-3.5 px-4 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center gap-2"
                        >
                          <Volume2 className="w-4 h-4 text-amber-600" />
                          <span>Լսել «casa»</span>
                        </button>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base mb-2.5">
                          2
                        </div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          🏡 Տուն / Բնակարան
                        </div>
                        <div className="text-sm font-bold text-emerald-800 mt-1.5">
                          Significado · Նշանակություն
                        </div>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          Մեր գլխում ծագած հասկացությունը՝ վայր, որտեղ ապրում է մարդը:
                        </p>
                        <div className="mt-3 text-xs text-slate-500 italic">
                          Idea mental compartida por la comunidad
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.extraWidget === 'units-chain' && (
                  <div className="p-5 sm:p-7 bg-slate-50 border-t border-slate-200">
                    <InteractiveUnitChain />
                  </div>
                )}

                {section.extraWidget === 'morpheme' && (
                  <div className="p-5 sm:p-7 bg-slate-50 border-t border-slate-200">
                    <MorphemeExplorer />
                  </div>
                )}
              </section>
            ))}

            {/* Quick Exam Preparation Section Card */}
            <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="text-xs sm:text-sm font-mono text-amber-400 uppercase tracking-wider mb-1.5">
                    Քննության հուշաթերթիկ · Chuleta para el examen
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Պատրա՞ստ եք ստուգել ձեր գիտելիքները
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                    Անցեք ինտերակտիվ թեստը՝ ստուգելու լեզվի 4 մակարդակները (fónico, morfológico, sintáctico, léxico-semántico) և 6 միավորները:
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('exam');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors inline-flex items-center gap-2 shrink-0 shadow-xs"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Սկսել քննության թեստը</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Clean quiet footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs sm:text-sm text-slate-500 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="font-semibold text-slate-700">La lengua como sistema — Լեզուն որպես համակարգ</span>
            <span className="mx-2">·</span>
            <span>Իսպաներեն & Հայերեն</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-medium">
            <span>Ուսումնական ձեռնարկ</span>
            <span>·</span>
            <span>Օֆլայն աջակցություն</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
