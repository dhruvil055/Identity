import { useState, useEffect } from 'react';

export interface JourneyState {
  lastVisitedSection?: string;
  lastInteraction?: string;
  pathFinderResult?: { tier: string; stage: string };
  visitCount: number;
  lastVisitTimestamp?: number;
}

const STORAGE_KEY = 'identy_journey';

const defaultState: JourneyState = {
  visitCount: 0,
};

export function useJourneyStore() {
  const [journey, setJourney] = useState<JourneyState>(defaultState);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setJourney(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to read journey state from localStorage', e);
    }
  }, []);

  const updateJourney = (updates: Partial<JourneyState>) => {
    setJourney((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save journey state', e);
      }
      return next;
    });
  };

  const incrementVisit = () => {
    updateJourney({ 
      visitCount: journey.visitCount + 1,
      lastVisitTimestamp: Date.now()
    });
  };

  const setPathFinderResult = (tier: string, stage: string) => {
    updateJourney({ pathFinderResult: { tier, stage } });
  };

  const getReturningVisitorMessage = (): string => {
    if (journey.visitCount === 0) return 'Welcome to I-denty';
    if (journey.pathFinderResult) return 'Continue your path to reinvention';
    if (journey.lastInteraction === 'journal') return 'Catch up on our latest journal entries';
    return 'Welcome back to I-denty';
  };

  return {
    journey,
    updateJourney,
    incrementVisit,
    setPathFinderResult,
    getReturningVisitorMessage
  };
}
