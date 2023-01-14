import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles= [
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Alireza Akbari: Iran executes British-Iranian dual national, state media says - BBC",
          "description": "Former Iranian minister Alireza Akbari was arrested in 2019 and convicted of spying for the UK.",
          "url": "https://www.bbc.com/news/world-middle-east-64273520",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/126C3/production/_128295457_mediaitem128295456.jpg",
          "publishedAt": "2023-01-14T06:19:30Z",
          "content": "British-Iranian dual national Alireza Akbari, who was sentenced to death in Iran, has been executed, Iranian state media says.\r\nMr Akbari's family had been asked to go to his prison for a \"final visi… [+2962 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Tina Burnside, Aya Elamroussi",
          "title": "A single winning ticket for Friday's $1.35 billion Mega Millions jackpot drawing was sold in Maine - CNN",
          "description": "One ticket sold in Maine beat the eerie odds of Friday the 13th and is set to claim the Mega Millions jackpot of about $1.35 billion, the lottery said.",
          "url": "https://www.cnn.com/2023/01/14/us/mega-millions-jackpot-winner-saturday/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230114003409-01-mega-millions-011323.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-14T06:02:00Z",
          "content": "One ticket sold in Maine beat the eerie odds of Friday the 13th and is set to claim the Mega Millions jackpot of about $1.35 billion, the lottery said.\r\nFriday nights winning numbers were 30-43-45-46… [+1512 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Entertainment Tonight"
          },
          "author": "Jackie Willis",
          "title": "Chrissy Teigen Gives Birth, Welcomes New Baby With John Legend - Entertainment Tonight",
          "description": "Luna and Miles have a new sibling!",
          "url": "https://www.etonline.com/chrissy-teigen-gives-birth-welcomes-new-baby-with-john-legend-194657",
          "urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2022-11/GettyImages-1389467551.jpg?h=68c5e252&itok=Mdb4mPrK",
          "publishedAt": "2023-01-14T04:08:00Z",
          "content": "Chrissy Teigen and John Legend are proud parents to a newborn baby!\r\nLegend confirmed the news Friday evening at a private concert, sharing that he and Teigen welcomed their baby earlier in the day, … [+2238 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Zelenskyy mocks Russian forces fighting for ‘credit’ over Soledar - Al Jazeera English",
          "description": "Head of the Wagner mercenary group had accused Russia’s military establishment of trying to ‘steal victory’ in Soledar.",
          "url": "https://www.aljazeera.com/news/2023/1/14/zelenskyy-mocks-russian-forces-fighting-for-credit-over-soledar",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/01/AP23011353720510.jpg?resize=1920%2C1336",
          "publishedAt": "2023-01-14T03:01:49Z",
          "content": "Ukrainian President Volodymyr Zelenskyy has mocked infighting between the Russian defence ministry and the Wagner mercenary group over who should take credit for efforts to seize the town of Soledar,… [+4433 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Maegan Vazquez, Marshall Cohen, MJ Lee, Arlette Saenz, Zachary Cohen",
          "title": "What we know about Joe Biden's private office where classified documents were found - CNN",
          "description": "It was an office fit for a former vice president working in Washington -- dark hardwood floors, plush seating and a spacious desk set to a lofty backdrop of the Capitol building.",
          "url": "https://www.cnn.com/2023/01/13/politics/biden-penn-center-what-we-know/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230113164318-hp-only-20230113-biden-docs-floor-plan-hp.png?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-14T02:14:00Z",
          "content": "It was an office fit for a former vice president working in Washington dark hardwood floors, plush seating and a spacious desk set to a lofty backdrop of the Capitol building. \r\nThis week, what took … [+5145 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Sarah Rumpf",
          "title": "Missouri House tightens women's dress code, requiring covering of arms - Fox News",
          "description": "Republican Missouri State Representative has taken heat after she proposed a rule in the dress code for female lawmakers.",
          "url": "https://www.foxnews.com/politics/missouri-house-tightens-womens-dress-code-requiring-covering-arms",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/IMG_2018.jpg",
          "publishedAt": "2023-01-14T02:13:00Z",
          "content": "The Missouri's House of Representatives kicked off its new session by tightening its dress code and requiring female lawmakers to cover their arms and wear blazers while in the state's capitol-much t… [+3693 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Michael Ruiz, Stephanie Pagones",
          "title": "Idaho murders suspect Bryan Kohberger’s grad program had access to ‘crime lab’ with camera streams: insider - Fox News",
          "description": "Bryan Kohberger's Ph.D. program at WSU maintains access to a \"crime lab\" database of bodycam videos and live streams from security cameras, a source says.",
          "url": "https://www.foxnews.com/us/idaho-murders-suspect-bryan-kohbergers-grad-program-had-access-crime-lab-camera-streams-insider",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Kohberger-split.jpg",
          "publishedAt": "2023-01-14T02:09:00Z",
          "content": "EXCLUSIVE: PULLMAN, Wash. Bryan Kohberger's doctoral program at Washington State University maintains access to a \"crime lab\" database of police bodycam videos as well as live streams from security c… [+12530 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Guardian staff reporter",
          "title": "Treasury secretary: US to reach debt ceiling on Thursday - The Guardian",
          "description": "Janet Yellen told Congress that ‘extraordinary measures’ would be taken to avoid default until legislation is passed to raise ceiling",
          "url": "https://www.theguardian.com/business/2023/jan/13/treasury-secretary-janet-yellen-debt-ceiling",
          "urlToImage": "https://i.guim.co.uk/img/media/4396b2fdcd6bc2309ec9b4fd8b0b30583a70ecbd/0_148_3896_2337/master/3896.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=02ccf976819d926a60e12fb4c05b4d2e",
          "publishedAt": "2023-01-14T01:35:00Z",
          "content": "Janet Yellen, the US treasury secretary, has notified Congress that the US is projected to reach its debt limit on Thursday, 19 January, and will then resort to extraordinary measures to avoid defaul… [+3985 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "New Zealand egg shortage threatens pavlova - BBC",
          "description": "A government ban on battery-caged hens has led to a shortage of eggs in New Zealand.",
          "url": "https://www.bbc.com/news/world-asia-64267741",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DF8D/production/_128292275_gettyimages-489142880.jpg",
          "publishedAt": "2023-01-14T00:29:30Z",
          "content": "New Zealand is in the grip of a nationwide egg shortage which is driving up wholesale prices and putting its much-loved dessert, pavlova, at risk. \r\nSupermarket shelves are bare and some stores are p… [+3623 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Jason Owens",
          "title": "Derek Carr is leaving Las Vegas: 5 potential landing spots and 1 bad fit for the longtime Raiders QB - Yahoo Sports",
          "description": "Derek Carr in a Jets uniform would make a lot of sense. But there are other good fits for the soon-to-be ex-Raiders quarterback.",
          "url": "https://sports.yahoo.com/derek-carr-is-leaving-las-vegas-5-potential-landing-spots-and-1-bad-fit-for-the-longtime-raiders-qb-002322129.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XxgtIuYEikPC2Mpq4rLXyA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/37432b40-93a1-11ed-abbf-22cb844551dd",
          "publishedAt": "2023-01-14T00:23:00Z",
          "content": "Derek Carr is leaving Las Vegas.\r\nIt's not a matter of if at this point. Just a matter of when and how. The nine-year Raiders quarterback said his goodbyes on Thursday after the franchise that drafte… [+6698 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PEOPLE"
          },
          "author": "https://www.facebook.com/peoplemag",
          "title": "Liam Hemsworth's Girlfriend Gabriella Brooks Celebrates His 33rd Birthday with a Beach Photo - Yahoo Entertainment",
          "description": "Liam Hemsworth's girlfriend Gabriella Brooks posted a beachy photo to social media for his birthday.",
          "url": "https://people.com/movies/liam-hemsworth-girlfriend-gabriella-brooks-celebrates-birthday-with-beach-photo/",
          "urlToImage": "https://people.com/thmb/CXfM7kAdA2Yp3u70sq1euFtyLVo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x139:736x141)/liam-hemsworth-gabriella-brooks-111522-1-88378ecf6d484530ba6f8100538c41b0.jpg",
          "publishedAt": "2023-01-13T23:51:16Z",
          "content": "To some, it may be just another day...but to Gabriella Brooks, it's Liam Day!\r\nBrooks took to her Instagram stories on Friday to pay tribute to her boyfriend Liam Hemsworth on his 33rd birthday.\r\nThe… [+1326 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Brenda Goodman",
          "title": "CDC identifies possible safety issue with Pfizer's updated Covid-19 vaccine but says people should still get boosted - CNN",
          "description": "The US Centers for Disease Control and Prevention said Friday that there is a possible safety issue with the bivalent Covid-19 vaccine made by Pfizer and BioNTech but that it is unlikely to represent a true risk. The agency said it continues to recommend that…",
          "url": "https://www.cnn.com/2023/01/13/health/pfizer-bivalent-booster-safety-cdc/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230113155827-01-pfizer-biontech-booster.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-01-13T23:50:00Z",
          "content": "The US Centers for Disease Control and Prevention said Friday that there is a possible safety issue with the bivalent Covid-19 vaccine made by Pfizer and BioNTech but that it is unlikely to represent… [+5126 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Eonline.com"
          },
          "author": "Elyse Dupre",
          "title": "Kim Kardashian Shares Cryptic Messages Amid Ex Kanye West's Alleged Wedding Ceremony - E! NEWS",
          "description": "Kim Kardashian recently shared Instagram posts that caught fans' attention. Read about the messages she shared amid a report about Kanye West's new rumored romance.",
          "url": "https://www.eonline.com/news/1361405/kim-kardashian-shares-cryptic-messages-amid-ex-kanye-wests-alleged-wedding-ceremony",
          "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20221030/rs_1200x1200-221130142516-1200-kanye-west-kim-kardashian.cm.1130224.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
          "publishedAt": "2023-01-13T23:49:00Z",
          "content": "As Kris Jenner once said, \"This is a case for the FBI.\"\r\nKim Kardashian shared cryptic messages to Instagram amid a report about her ex Kanye West's alleged marital status.\r\n\"I'm in my quiet girl era… [+686 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Cancer deaths drop, but more late-stage prostate cancer diagnoses spark concerns - PBS NewsHour",
          "description": null,
          "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0NropqwiYQ4",
          "urlToImage": null,
          "publishedAt": "2023-01-13T23:32:37Z",
          "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
          "source": {
            "id": null,
            "name": "Hollywood Reporter"
          },
          "author": "Rick Porter",
          "title": "‘Snowpiercer’ Final Season Pulled From TNT - Hollywood Reporter",
          "description": "The series was the last remaining original on the Warner Bros. Discovery cable channel; producer Tomorrow Studios will shop it elsewhere.",
          "url": "https://www.hollywoodreporter.com/tv/tv-news/tnt-scraps-snowpiercer-final-season-1235299332/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/Snowpiercer-S3-Still-Diggs-TNT-Publicity-H-2023.jpg?w=1024",
          "publishedAt": "2023-01-13T23:26:15Z",
          "content": "Snowpiercer, the lone remaining scripted series on TNT, is now the latest show to be scrapped in Warner Bros. Discovery’s ongoing content write-offs.\r\nThe show’s fourth and final season will not air … [+2856 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KFOR Oklahoma City"
          },
          "author": "Kaylee Douglas/KFOR",
          "title": "AZ court docs: Second caregiver of missing Oklahoma child arrested on murder, neglect complaints - KFOR Oklahoma City",
          "description": "Newly filed arrest documents in Arizona show the second caregiver in the case of missing Oklahoma 4-year-old Athena Brownfield was arrested on a warrant for Murder in the First Degree and Child Neglect.",
          "url": "https://kfor.com/news/local/az-court-docs-second-caregiver-of-missing-oklahoma-child-arrested-on-murder-neglect-complaints/",
          "urlToImage": "https://kfor.com/wp-content/uploads/sites/3/2023/01/Ivon-Adams-court-appearance.png?w=1280",
          "publishedAt": "2023-01-13T23:17:42Z",
          "content": "MARICOPA COUNTY, Ariz. (KFOR) – Newly filed arrest documents in Arizona show the second caregiver in the case of missing Oklahoma 4-year-old Athena Brownfield was arrested on a warrant for Murder in … [+1351 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Sarah Elbeshbishi, USA TODAY",
          "title": "George Santos faces mounting pressure to step down by GOP leaders - USA TODAY",
          "description": "Rep. George Santos vows to serve full two-year term despite growing calls from Republicans, including former House Speaker Paul Ryan, to step down.",
          "url": "https://www.usatoday.com/story/news/politics/2023/01/13/paul-ryan-george-santos-resign-gop-leaders-congress/11047404002/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2023/01/12/USAT/f881f626-0ddb-4378-8413-62d98af7026c-VPC_SANTOS_ALLEGATIONS_REAX_ap.jpg?auto=webp&crop=1911,1075,x0,y0&format=pjpg&width=1200",
          "publishedAt": "2023-01-13T22:30:49Z",
          "content": "The chorus of prominent Republicans calling on freshman Rep. George Santos to resign keeps rising with former House Speaker Paul Ryan, R-Wis., joining the list.\r\n\"This isn't an embellished candidacy.… [+2858 chars]"
        },
        {
          "source": {
            "id": "fortune",
            "name": "Fortune"
          },
          "author": "David Welch, Sean O'Kane",
          "title": "Tesla owners lash out at Elon Musk after he slashes car prices by thousands of dollars: ‘I feel like I got duped’ - Fortune",
          "description": "Many recent Tesla buyers are angry they payed full price for their cars and that the resale value is now lower.",
          "url": "https://fortune.com/2023/01/13/tesla-price-cut-elon-musk-owners-resale-value-2023/",
          "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/01/GettyImages-1238367031.jpg?resize=1200,600",
          "publishedAt": "2023-01-13T22:01:00Z",
          "content": "Marianne Simmons, a self-professed Tesla fan girl, bought her second electric vehicle from the company in September: a white, high-performance Model Y ringing in at more than $77,000. Then the compan… [+4949 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Lansing State Journal"
          },
          "author": ", Lansing State Journal",
          "title": "MSU professor, NASA team, discover new planet that could sustain life - Lansing State Journal",
          "description": "Michigan State's Joey Rodriguez helped confirm the existance of the planet in the habitable zone around its star, nearly 100 light years away",
          "url": "https://www.lansingstatejournal.com/story/news/2023/01/13/michigan-state-professor-nasa-team-discover-planet-that-could-sustain-life/69807157007/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2023/01/13/PLSJ/30d5f01a-0eea-4728-b1f4-273d9bc041bf-toi700e_art.jpg?auto=webp&crop=4778,2688,x21,y0&format=pjpg&width=1200",
          "publishedAt": "2023-01-13T20:51:35Z",
          "content": "EAST LANSING After more than a year of extra-stellar detective work, a Michigan State University professor has helped NASA confirm the existence of a new planet about 100 light years away that could … [+3769 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ESPN"
          },
          "author": "Sarah Barshop",
          "title": "Sean McVay tells Rams he's staying as coach - ESPN",
          "description": "Sean McVay has told the Rams that he will remain the head coach in Los Angeles.",
          "url": "https://www.espn.com/nfl/story/_/id/35440229/sean-mcvay-tells-rams-staying-coach-sources-say",
          "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1222%2Fr644645_1296x1296_1%2D1.jpg",
          "publishedAt": "2023-01-13T20:39:44Z",
          "content": "LOS ANGELES -- Sean McVay has told the Rams that he will remain the head coach in Los Angeles, the team announced Friday.\r\nThe decision comes days after McVay said in his end-of-season news conferenc… [+2271 chars]"
        }
      ]


    constructor(){
    
        super();
        console.log("i am constructor from news component");
        this.state={
            articles: this.articles,
            loading: false

        }
    }

  render() {
    return (
      <div className="container my-3">

        <h2>NewsBoi Top Headlines</h2>
        <div className='row'>
        <div className='col-md-4'>
        <NewsItems title= "my title" description="my desc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/126C3/production/_128295457_mediaitem128295456.jpg"
        newsUrl="TODO"/>
        </div>
        <div className='col-md-4'>
        <NewsItems title= "my title" description="my desc"/>
        </div>
        <div className='col-md-4'>
        <NewsItems title= "my title" description="my desc"/>
        </div>
    </div>
        
      </div>
    )
  }
}

export default News