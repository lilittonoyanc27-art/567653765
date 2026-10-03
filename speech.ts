/**
 * Utility for speech synthesis in Spanish and Armenian
 */
export function speakText(text: string, lang: 'es-ES' | 'hy-AM' = 'es-ES') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Strip emoji and markdown marks
  const cleanText = text
    .replace(/[✅❌📘🧠🇦🇲🇪🇸→\*\#\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = lang;
  utterance.rate = 0.9; // slightly slower for language learners

  // Try finding voice with corresponding language
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang.startsWith(lang.slice(0, 2)));
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
}
