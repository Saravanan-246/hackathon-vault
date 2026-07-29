import { person1_questions } from './person1_questions';
import { person2_questions } from './person2_questions';
import { person3_questions } from './person3_questions';
import { person4_questions } from './person4_questions';

// Flat map of all team questions across all 4 researchers/teams
export const allQuestions = [
  ...person1_questions,
  ...person2_questions,
  ...person3_questions,
  ...person4_questions
];

/**
 * Groups questions dynamically by domain title for DomainSection component
 */
export const getDomainsData = () => {
  const domainsMap = {};

  allQuestions.forEach((q) => {
    const domain = q.domainTitle || 'General Research';
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