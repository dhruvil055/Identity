import React, { useState, useRef } from 'react';

interface CompareSectionProps {
  selectedIndex: number;
}

const CHECK_SVG = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8.5l3.2 3L13 4.5" />
  </svg>
);

const TIERS = [
  { name: 'Collective', price: '$19 / mo · $228 / yr', color: 'var(--camel)', col: 0 },
  { name: 'Inner Circle', price: '$49 / mo · $588 / yr', color: 'var(--navy)', col: 1 },
  { name: 'Private Member', price: '$129 / mo · $1,548 / yr', color: 'var(--char)', col: 2 },
];

const COMPARISON_DATA = [
  { group: 'CORE ACCESS', rows: [
    { feature: 'I-denty Journal access', values: [true, true, true] },
    { feature: 'Curated lifestyle and fashion ecosystem', values: [true, true, true] },
    { feature: 'Brand partner perks and curated offers', values: [true, true, true] },
  ]},
  { group: 'REINVENTION', rows: [
    { feature: 'Reinvention Framework', values: ['Included', 'Included', 'Included'] },
    { feature: 'Revisit the Framework anytime', values: [true, true, true] },
  ]},
  { group: 'ENGAGEMENT', rows: [
    { feature: 'Live Reinvention Sessions', values: [false, 'Monthly sessions', 'Small group sessions'] },
    { feature: 'Expert conversations', values: [false, true, 'Priority access'], hidden: true },
    { feature: 'Curated experiences', values: [false, true, 'Priority access'], hidden: true },
  ]},
  { group: 'EXCLUSIVE', rows: [
    { feature: 'Eligibility for 1:1 consultation', values: [false, false, true], hidden: true },
  ]},
];

export const CompareSection: React.FC<CompareSectionProps> = ({ selectedIndex }) => {
  const [expanded, setExpanded] = useState(false);
  const cmpRef = useRef<HTMLDivElement>(null);
  const cmpScrollRef = useRef<HTMLDivElement>(null);

  const renderValue = (value: boolean | string) => {
    if (value === true) return <span className="tick" style={{ color: 'var(--ok)', fontWeight: 600 }}>{CHECK_SVG}</span>;
    if (value === false) return <span className="dash" style={{ opacity: 0.35 }}>–</span>;
    return <span style={{ color: 'var(--muted)' }}>{value}</span>;
  };

  return (
    <section id="compare" aria-labelledby="c-h" style={{ padding: '104px 0 0' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="sec-h" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '42px',
        }}>
          <h2 id="c-h" style={{
            fontSize: 'clamp(40px, 5.4vw, 68px)',
            maxWidth: '15ch',
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: '-0.015em',
          }}>
            I-denty Ecosystem overview.
          </h2>
          <p style={{
            color: 'var(--muted)',
            maxWidth: '44ch',
            fontWeight: 300,
            fontSize: '17px',
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.35,
          }}>
            Find the level that matches your journey. The essentials are shown first.
          </p>
        </div>

        <div className="cmp-wrap" id="cmp" ref={cmpRef} style={{
          border: '1px solid var(--line)',
          borderRadius: '24px',
          background: 'var(--surface)',
          overflow: 'hidden',
        }}>
          <div className="cmp-scroll" ref={cmpScrollRef} style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px', fontSize: '15px', fontFamily: 'var(--font-sans)' }}>
              <caption className="sr" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Membership comparison</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'left', background: 'var(--wash)', padding: '18px 16px', fontWeight: 500, borderBottom: '3px solid var(--line)', fontFamily: 'var(--font-serif)', fontSize: '22px' }}>
                    Features
                  </th>
                  {TIERS.map((tier, i) => (
                    <th
                      key={tier.name}
                      scope="col"
                      data-col={i}
                      className={i === selectedIndex ? 'hl' : ''}
                      style={{
                        textAlign: 'center',
                        background: i === selectedIndex ? 'var(--gold-bg)' : 'var(--wash)',
                        padding: '18px 16px',
                        fontWeight: 500,
                        borderBottom: `3px solid ${tier.color}`,
                        fontFamily: 'var(--font-serif)',
                        fontSize: '22px',
                        transition: 'background 0.3s, border-color 0.3s',
                      }}
                    >
                      {tier.name}<br />
                      <small style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 400,
                        color: 'var(--muted)',
                        fontSize: '13px',
                        display: 'block',
                        marginTop: '4px',
                      }}>
                        {tier.price}
                      </small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((group, gIdx) => (
                  <React.Fragment key={group.group}>
                    <tr className="grp" style={{ background: expanded || !group.rows.some(r => r.hidden) ? 'var(--paper)' : 'transparent' }}>
                      <th colSpan={4} style={{
                        textAlign: 'left',
                        fontWeight: expanded || !group.rows.some(r => r.hidden) ? 500 : 400,
                        padding: '10px 16px',
                        fontSize: expanded || !group.rows.some(r => r.hidden) ? '12.5px' : '14px',
                        letterSpacing: '0.14em',
                        color: 'var(--gold)',
                        fontFamily: 'var(--font-sans)',
                        borderTop: gIdx === 0 ? 'none' : '1px solid var(--line)',
                      }}>
                        {group.group}
                      </th>
                    </tr>
                    {group.rows.map((row, rIdx) => (
                      <tr
                        key={row.feature}
                        className={row.hidden ? 'cmp-hide' : ''}
                        style={{ display: expanded || !row.hidden ? 'table-row' : 'none' }}
                      >
                        <th scope="row" style={{
                          textAlign: 'left',
                          fontWeight: 400,
                          padding: '14px 16px',
                          borderTop: rIdx === 0 ? 'none' : '1px solid var(--line)',
                          fontFamily: 'var(--font-sans)',
                        }}>
                          {row.feature}
                        </th>
                        {row.values.map((value, tIdx) => (
                          <td
                            key={tIdx}
                            data-col={tIdx}
                            className={tIdx === selectedIndex ? 'hl' : ''}
                            style={{
                              textAlign: 'center',
                              padding: '14px 16px',
                              color: 'var(--muted)',
                              fontSize: '14px',
                              fontFamily: 'var(--font-sans)',
                              borderTop: rIdx === 0 ? 'none' : '1px solid var(--line)',
                              background: tIdx === selectedIndex ? 'var(--gold-bg)' : 'transparent',
                              transition: 'background 0.3s',
                            }}
                          >
                            {renderValue(value)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <button
            className="cmp-more"
            id="cmpBtn"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            style={{
              display: 'block',
              width: '100%',
              background: 'var(--wash)',
              border: 'none',
              borderTop: '1px solid var(--line)',
              padding: '15px',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-sans)',
              cursor: 'pointer',
              color: 'var(--ink)',
              transition: 'background 0.2s',
            }}
          >
            {expanded ? 'Show fewer features' : 'Show full comparison'}
          </button>
        </div>
      </div>
    </section>
  );
};