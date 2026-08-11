import { css } from '../dc'
import { PageShell } from '../PageShell'
import { SectionHeader } from '../SectionHeader'

type Post = { title: string; href: string; imageUrl: string; date: string; author: string }

const posts: Post[] = [
  { title: 'South Florida Retail Feeling A Chill This Holiday Shopping Season', href: 'https://www.bisnow.com/south-florida/news/retail/holiday-shopping-may-merry-light-south-florida-retailers-132150', imageUrl: 'https://cdn.bisnow.net/fit?height=1200&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2025%2F12%2F6930bc09b576a-img_8567.jpeg&width=1200&sign=AjVIHnxrQLi8Kt0JT9qpQOn8QGdfohlZR2kn_cHhgYI', date: 'Dec 3, 2025', author: 'Chloe Gallivan' },
  { title: "Property Owners Caught In The Middle Of Florida's New Open-Carry Law", href: 'https://www.bisnow.com/south-florida/news/property-management/property-managers-caught-in-the-cross-fire-of-open-carry-law-131572', imageUrl: 'https://cdn.bisnow.net/fit?height=1200&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2025%2F10%2F68ffdfc7cf556-img_7282.jpeg&width=1200&sign=-quHqkMR6xaHqwh77JoCc8qr7zhvHrKaCFkl1SzWGic', date: 'Oct 27, 2025', author: 'Chloe Gallivan' },
  { title: 'Current Capital Real Estate Group acquires South Florida shopping center', href: 'https://www.costar.com/article/1575113247/current-capital-real-estate-group-acquires-south-florida-shopping-center', imageUrl: '/images/costar.webp', date: 'Jul 30, 2025', author: 'Joshua S. Andino' },
  { title: 'Miami Gardens, Fla., Shopping Center Sells for $33Mln', href: 'https://crenews.com/2025/07/29/miami-gardens-fla-shopping-center-sells-for-33mln/', imageUrl: 'https://crenews.com/wp-content/uploads/2022/11/social_logo_ex.jpg', date: 'Jul 29, 2025', author: 'Dan Moynihan' },
  { title: 'Todd Nepola expands South Florida shopping center portfolio with $33M buy', href: 'https://therealdeal.com/miami/2025/07/29/todd-nepola-buys-miami-gardens-shopping-center/', imageUrl: 'https://static.therealdeal.com/wp-content/uploads/2025/07/MIA_Nepola-County-Line-1024x683.jpg', date: 'Jul 29, 2025', author: '' },
  { title: 'Ex-basketball player Raanan Katz keeps growing his South Florida retail empire', href: 'https://therealdeal.com/magazine/july-2025/raanan-katz-profile/', imageUrl: 'https://static.therealdeal.com/wp-content/uploads/2025/07/Ranaan-Katz-1400x875.jpg', date: 'Jul 1, 2025', author: 'Francisco Alvarado' },
  { title: 'Margate CRA Discusses Funding Improvements at Shopping Center', href: 'https://margatetalk.com/margate-cra-discusses-funding-improvements-at-shopping-center-47469', imageUrl: 'https://margatetalk.com/wp-content/uploads/Atlantic-Center-Shopping-Plaza-at-6828-6896-West-Atlantic-Boulevard.png', date: 'Apr 10, 2025', author: 'David Volz' },
  { title: '"A screeching halt": South Florida retail construction drops off', href: 'https://therealdeal.com/miami/2024/01/10/south-florida-retail-construction-drops-off-in-q4/', imageUrl: 'https://static.therealdeal.com/wp-content/uploads/2024/01/main_MIA_Retail-Q4-1024x640.jpg', date: 'Jan 10, 2024', author: '' },
  { title: 'South Florida retail asking rents climb in first quarter', href: 'https://therealdeal.com/miami/2023/04/13/south-florida-retail-asking-rents-climb-in-first-quarter/', imageUrl: 'https://static.therealdeal.com/wp-content/uploads/2023/04/South-Florida-Retail-Asking-Rents-Climb-In-First-Quarter_Main-1024x640.jpg', date: 'Apr 13, 2023', author: '' },
  { title: 'South Florida commercial deals go cold', href: 'https://therealdeal.com/miami/2023/02/10/south-florida-commercial-deals-go-cold/', imageUrl: '/images/news/trd-deals-cold.webp', date: 'Feb 10, 2023', author: 'Francisco Alvarado & Katherine Kallergis' },
  { title: 'Todd Nepola pays $24M for Lauderdale Lakes shopping centers', href: 'https://therealdeal.com/miami/2022/12/21/todd-nepola-pays-24m-for-lauderdale-lakes-shopping-centers/', imageUrl: '/images/news/trd-lauderdale-lakes.webp', date: 'Dec 21, 2022', author: 'Francisco Alvarado' },
  { title: 'Why real estate shoppers are bagging grocery-anchored plazas', href: 'https://therealdeal.com/new-york/2022/11/30/why-real-estate-shoppers-are-bagging-grocery-anchored-plazas/', imageUrl: 'https://static.therealdeal.com/wp-content/uploads/2022/11/Shopping-Centers-main-1024x638.jpg', date: 'Nov 30, 2022', author: '' },
  { title: 'Todd Nepola buys a pair of Palm Beach County shopping centers for $13M', href: 'https://therealdeal.com/miami/2022/04/13/todd-nepola-buys-a-pair-of-palm-beach-county-shopping-centers-for-13m/', imageUrl: '/images/news/trd-palm-beach.webp', date: 'Apr 13, 2022', author: 'Francisco Alvarado' },
  { title: 'Current Capital Management Acquires Two Shopping Centers in South Florida for $12.8M', href: 'https://rebusinessonline.com/current-capital-management-acquires-two-shopping-centers-in-south-florida-for-12-8m/', imageUrl: 'https://rebusinessonline.com/wp-content/uploads/2022/04/Lake-Worth_LakeWorth-FL.jpg', date: 'Apr 12, 2022', author: 'Julia Sanders' },
  { title: 'Investor picks up Margate shopping center for $11M', href: 'https://therealdeal.com/miami/2021/09/23/investor-picks-up-margate-shopping-center-for-11m/', imageUrl: '/images/news/trd-margate.webp', date: 'Sep 23, 2021', author: 'Francisco Alvarado' },
  { title: 'Investor Bets on Aging South Florida Retail Center: Todd Nepola Plans Upgrades from ‘Head to Toe’', href: 'https://www.costar.com/article/2139466768/investor-bets-on-aging-south-florida-retail-center', imageUrl: '/images/costar.webp', date: 'Jun 19, 2020', author: 'CoStar' },
  { title: '5 shopping center trades that went through during COVID-19', href: 'https://www.icsc.com/news-and-views/icsc-exchange/5-shopping-center-trades-that-went-through-during-covid-19', imageUrl: 'https://www.icsc.com/images/made/ab31b87e491deb78/metaThe-Shoppes-at-Terra-Bella62020_1200_675.jpg', date: 'Jun 17, 2020', author: '' },
  { title: 'Parking Lot Owner Sells Retail Center in Lauderhill for $13M', href: 'https://therealdeal.com/miami/2020/06/15/miami-beach-parking-lot-mogul-sells-retail-center-in-lauderhill-for-13m/', imageUrl: '/images/news/trd-lauderhill.webp', date: 'Jun 15, 2020', author: 'Keith Larsen' },
]

export function NewsPage() {
  return (
    <PageShell>
      <SectionHeader title="News Articles" />
      <div data-news-body style={css('background:#fff;padding:4px 0 80px;')}>
        <div data-news-wrap style={css('margin:0 auto;max-width:80rem;padding:0 32px;')}>
          <div data-news-grid style={css('margin:32px auto 0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;')}>
            {posts.map((p) => {
              const hasDate = !!p.date
              const hasSep = !!p.date && !!p.author
              return (
                <a key={p.href} href={p.href} data-lift style={css('display:flex;flex-direction:column;gap:16px;text-decoration:none;')}>
                  <div style={css('position:relative;width:100%;aspect-ratio:3/2;border-radius:6px;overflow:hidden;background:#0a1638;box-shadow:0 18px 34px rgba(5,16,43,.2);')}>
                    <img src={p.imageUrl} alt="" style={css('width:100%;height:100%;object-fit:cover;display:block;')} />
                    <div style={css('position:absolute;inset:0;background:linear-gradient(to top,rgba(5,16,43,.6) 0%,rgba(5,16,43,.15) 45%,rgba(5,16,43,0) 100%);')} />
                  </div>
                  <div style={css('display:flex;flex-direction:column;gap:8px;')}>
                    <div style={css("display:flex;flex-wrap:nowrap;align-items:center;gap:10px;min-width:0;font-family:'Roboto Condensed',sans-serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;")}>
                      {hasDate && <time style={css('flex:none;')}>{p.date}</time>}
                      {hasSep && <span style={css('color:#6b7280;flex:none;')} aria-hidden="true">/</span>}
                      <span style={css('min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;')}>{p.author}</span>
                    </div>
                    {/* h2, not h3: this grid sits directly under the page <h1>
                        with no intervening section heading. */}
                    <h2 style={css("margin:0;font-family:'Roboto Condensed',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(19px,1.7vw,23px);line-height:1.14;letter-spacing:-.2px;color:#0A278D;text-wrap:pretty;")}>{p.title}</h2>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
