import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Todd Nepola — Commercial Real Estate Investor, Author & Speaker'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Brand tokens (from src/styles/colors_and_type.css)
const NAVY_900 = '#04123F'
const NAVY_700 = '#0A278D'
const GOLD_500 = '#C9A24C'
const GOLD_200 = '#EBD9A8'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          background: `linear-gradient(135deg, ${NAVY_700} 0%, ${NAVY_900} 100%)`,
          color: '#FFFFFF',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: GOLD_500,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
          }}
        >
          Current Capital Real Estate Group
        </div>

        <div
          style={{
            fontSize: 118,
            fontWeight: 700,
            lineHeight: 1.02,
            marginTop: 28,
          }}
        >
          Todd Nepola
        </div>

        {/* gold rule */}
        <div
          style={{
            width: 160,
            height: 8,
            background: GOLD_500,
            margin: '36px 0',
            borderRadius: 4,
          }}
        />

        <div
          style={{
            fontSize: 42,
            lineHeight: 1.25,
            color: GOLD_200,
            fontFamily: 'Helvetica, Arial, sans-serif',
            maxWidth: 880,
          }}
        >
          Commercial Real Estate Investor, Author &amp; Speaker
        </div>
      </div>
    ),
    { ...size },
  )
}
