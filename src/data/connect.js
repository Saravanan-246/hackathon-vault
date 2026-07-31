import person1 from './person1_questions.js';
import person2 from './person2_questions.js';
import person3 from './person3_questions.js';
import person4 from './person4_questions.js';

// Safe fallbacks in case any file returns undefined
const p1 = Array.isArray(person1) ? person1 : [];
const p2 = Array.isArray(person2) ? person2 : [];
const p3 = Array.isArray(person3) ? person3 : [];
const p4 = Array.isArray(person4) ? person4 : [];

// Flat map of all team questions across all 4 researchers/teams
export const allQuestions = [...p1, ...p2, ...p3, ...p4];

/**
 * Groups questions dynamically by domain title for DomainSection component
 */
export const getDomainsData = () => {
  const domainsMap = {};

  allQuestions.forEach((q) => {
    if (!q.domainTitle || q.domainTitle === 'Coming Soon') {
      return;
    }

    const domain = q.domainTitle;
    if (!domainsMap[domain]) {
      domainsMap[domain] = [];
    }
    domainsMap[domain].push(q);
  });

  return Object.keys(domainsMap).map((domainTitle) => {
    const problems = domainsMap[domainTitle];
    const totalImpact = problems.reduce((acc, p) => acc + (p.scores?.impact || 0), 0);
    const avgImpact = problems.length > 0 ? (totalImpact / problems.length).toFixed(1) : "0.0";

    return {
      title: domainTitle,
      avgImpact,
      problems
    };
  });
};

export default allQuestions;