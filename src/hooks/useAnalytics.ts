export const EVENTS = {
  HERO_CTA: 'homepage_hero_cta',
  ECOSYSTEM_ITEM_CLICK: 'ecosystem_item_click',
  REINVENTION_STAGE_CLICK: 'reinvention_stage_click',
  MEMBERSHIP_CLICK: 'membership_click',
  JOURNAL_CLICK: 'journal_click',
  PATH_FINDER_START: 'path_finder_start',
  PATH_FINDER_COMPLETE: 'path_finder_complete',
  FOUNDER_STORY_CLICK: 'founder_story_click',
  HOMEPAGE_FINAL_CTA: 'homepage_final_cta',
  BACK_TO_TOP: 'back_to_top_click',
  SEARCH_OPEN: 'search_open',
  SEARCH_RESULT_CLICK: 'search_result_click',
  CONTINUE_JOURNEY_CLICK: 'continue_journey_click',
} as const;

export function trackEvent(name: string, properties?: Record<string, string>) {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${name}`, properties || {});
  }
  
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: name,
      ...properties
    });
  }
}

export function useAnalytics() {
  return { trackEvent };
}
