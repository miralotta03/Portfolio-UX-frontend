export type ProjectImage = {
  src: string;
  alt: string;
};

export type FigmaLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  tag: string;
  summary: string;
  problem: string;
  process: string[];
  result: string;
  images: ProjectImage[];
  figma: FigmaLink[];
  ongoing?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dishdash",
    title: "DishDash",
    year: "Grupprojekt",
    role: "UX-design tillsammans med två andra — jag ansvarade för komponentbiblioteket och beställningsflödet",
    tag: "Matleverans-app",
    summary:
      "En matleverans-app där vi designade hela kedjan från att bläddra bland restauranger till beställning, betalning och leveransspårning.",
    problem:
      "Uppgiften var att designa en komplett matleverans-app i grupp om tre. Utmaningen var att hålla ihop ett konsekvent komponentspråk genom ett långt flöde — kategorisidor, restaurangsidor, varukorg, checkout och orderspårning — utan att det kändes som tre olika appar ihopklistrade.",
    process: [
      "Byggde ett delat komponentbibliotek (knappar, produktkort, navigationsfält) tidigt så att alla tre kunde jobba parallellt utan att designen drev isär",
      "Designade beställningsflödet i detalj: kategori → restaurang → produktval → varukorg → betalningsmetod",
      "Itererade på leveransspårningen med tydlig statuskommunikation (beräknad tid, kontakt med chauffören)",
    ],
    result:
      "En fullt klickbar prototyp som täcker hela resan från upptäckt till leverans, med ett återanvändbart komponentsystem som gjorde det möjligt för tre personer att designa i samma visuella språk.",
    images: [
      { src: "/images/dishdash/overview.png", alt: "Skärmar från DishDash: kontosidor, kategorisidor, beställningsflöde och orderspårning" },
    ],
    figma: [
      { label: "Prototyp", url: "https://www.figma.com/design/0ojjuY6BqL6LOFDnPAHAaO/Untitled?node-id=0-1&m=dev&t=nZufYurTGegRy4te-1" },
    ],
  },
  {
    slug: "melorie",
    title: "Melorie",
    year: "Grupprojekt",
    role: "UX-design och senare frontend-utveckling tillsammans med två andra",
    tag: "Smyckes-webbshop",
    summary:
      "En webbshop för smycken, designad från lowfi-wireframes till en highfi-prototyp i både webb- och appformat — som vi senare kodade tillsammans.",
    problem:
      "Vi skulle designa en e-handelsupplevelse för smycken som skulle fungera lika bra i mobil-app som på desktop, och som senare skulle byggas på riktigt. Det ställde krav på att strukturen höll ihop mellan formaten redan från lowfi-stadiet.",
    process: [
      "Startade i lowfi för att lägga grundflödet: produktlista, produktsida, varukorg, checkout, inloggning",
      "Testade layouten i både mobilt och desktop-format parallellt för att se var strukturen behövde skilja sig",
      "Highfi-designade med ett varmt, personligt färgschema som kändes rätt för ett smyckesvarumärke",
      "Gick vidare och kodade prototypen tillsammans med gruppen efter designfasen",
    ],
    result:
      "En sammanhållen highfi-prototyp för webb och app, som blev grunden för ett verkligt kodat projekt — ett av mina första steg från design till implementation.",
    images: [
      { src: "/images/melorie/lowfi.png", alt: "Lowfi-wireframes för Melories flöde: startsida, produktsida, varukorg och checkout" },
      { src: "/images/melorie/desktop.png", alt: "Highfi desktop-skärmar för Melorie" },
      { src: "/images/melorie/mobile.png", alt: "Highfi mobilskärmar för Melorie, sida 1 till 9 av flödet" },
    ],
    figma: [
      { label: "Lowfi", url: "https://www.figma.com/design/Jny5w5Y8ckFlTPbwc2Aii8/Untitled?node-id=0-1&m=dev&t=q8X0kBsbOwxrNsmM-1" },
      { label: "Highfi – webb", url: "https://www.figma.com/design/Jny5w5Y8ckFlTPbwc2Aii8/Untitled?node-id=128-16&m=dev&t=q8X0kBsbOwxrNsmM-1" },
      { label: "Highfi – app", url: "https://www.figma.com/design/Jny5w5Y8ckFlTPbwc2Aii8/Untitled?node-id=219-61&m=dev&t=q8X0kBsbOwxrNsmM-1" },
    ],
  },
  {
    slug: "villa-liljan",
    title: "Villa Liljan",
    year: "Soloprojekt",
    role: "Egen redesign, från research till färdig prototyp",
    tag: "Redesign av förskolehemsida",
    summary:
      "En redesign av en förskolas hemsida — jag tog en fullt fungerande men daterad sajt och byggde om den till en modern, tydligare version med samma innehåll.",
    problem:
      "Den ursprungliga hemsidan för förskolan Villa Liljan fungerade, men kändes daterad: tung textmassa, otydlig hierarki och ett besökarflöde som gjorde det svårt att snabbt hitta det man sökte, som kontaktuppgifter eller information om en specifik avdelning.",
    process: [
      "Kartlade den befintliga sajtens samtliga sidor (hem, Montessori, kontakt, personal, avdelningar, inskolning, vila/sömn) för att förstå hela innehållsstrukturen",
      "Identifierade var text kunde brytas upp och var hierarkin behövde bli tydligare",
      "Byggde om varje sida som en fungerande prototyp med komponenter, med bevarat innehåll men ny visuell struktur",
    ],
    result:
      "En komplett, klickbar redesign av samtliga sidor på sajten — ett before/after-projekt som visar hur samma innehåll kan bli betydligt mer tillgängligt med rätt struktur.",
    images: [
      { src: "/images/villaliljan/before.png", alt: "Villa Liljans hemsida innan redesign — samtliga sidor" },
      { src: "/images/villaliljan/after.png", alt: "Villa Liljans hemsida efter redesign — samtliga sidor" },
    ],
    figma: [
      { label: "Before", url: "https://www.figma.com/design/eXRmGZjRgIZh77V7m5hDCn/Villa-L%C3%A4rkan-website?node-id=0-1&m=dev&t=QdrRuhvOwP2kNlLW-1" },
      { label: "After", url: "https://www.figma.com/design/eXRmGZjRgIZh77V7m5hDCn/Villa-L%C3%A4rkan-website?node-id=40-188&m=dev&t=QdrRuhvOwP2kNlLW-1" },
    ],
  },
  {
    slug: "keramik",
    title: "Keramik-shop",
    year: "Soloprojekt",
    role: "Egen design från idé till highfi",
    tag: "Webbshop, eget koncept",
    summary:
      "Ett eget koncept för en webbshop med handgjord keramik, drivet av lowfi-wireframes som sedan highfi-designades för startsidan.",
    problem:
      "Jag ville öva på att ta ett projekt hela vägen från lösryckt idé till en visuellt genomarbetad design, med fokus på hur varm fotografi och produktbilder kan bära ett varumärke.",
    process: [
      "Lade grundstrukturen i lowfi: navigering, produktgrid, sortiment och en favoritsektion",
      "Valde ett varmt, jordnära färgschema (terrakotta och beige) som kändes rätt för handgjord keramik",
      "Highfi-designade startsidan med riktiga produktbilder för att testa hur helheten skulle kännas",
    ],
    result:
      "En highfi-startsida som visar den visuella riktningen tydligt, byggd ovanpå en genomtänkt lowfi-struktur — ett bra exempel på min designprocess från skiss till känsla.",
    images: [
      { src: "/images/keramik/lowfi.png", alt: "Lowfi-wireframes för keramik-webbshoppen" },
      { src: "/images/keramik/highfi.png", alt: "Highfi startsida för keramik-webbshoppen" },
    ],
    figma: [
      { label: "Lowfi", url: "https://www.figma.com/design/B36Xw9WT1pcDyaifdJZMBE/Untitled?node-id=0-1&m=dev&t=gwp8lW9LTbCzECHn-1" },
      { label: "Highfi", url: "https://www.figma.com/design/B36Xw9WT1pcDyaifdJZMBE/Untitled?node-id=11-402&m=dev&t=gwp8lW9LTbCzECHn-1" },
    ],
  },
  {
    slug: "b-movies",
    title: "B-movies",
    year: "Soloprojekt — mitt första UX-projekt",
    role: "Egen design, första gången i Figma",
    tag: "Streaming-app",
    summary:
      "En streaming-app för film, designad helt själv. Det första UX-projekt jag någonsin gjorde i Figma.",
    problem:
      "Som mitt allra första UX-projekt var målet att lära mig grunderna: hur man strukturerar en app med bläddring, kategorier, sökning och en spelarvy, och hur man anpassar samma flöde till olika skärmstorlekar.",
    process: [
      "Designade grundflödet: startsida med kategorier, filmsida, sökfunktion och videospelare",
      "Anpassade layouten för flera skärmstorlekar (iPhone 14/15 Pro och Pro Max)",
      "Testade en mörk spelarvy separat från den ljusare bläddringsvyn för att matcha hur man faktiskt tittar på film",
    ],
    result:
      "Min första kompletta UX-prototyp — grunden som resten av mina projekt byggt vidare på. Jag tar med den för att visa var jag började.",
    images: [
      { src: "/images/bmovies/overview.png", alt: "B-movies streaming-app: bläddringsvy, meny, sökning och videospelare i flera skärmstorlekar" },
    ],
    figma: [
      { label: "Prototyp", url: "https://www.figma.com/design/Rw3pOFHWhtUthiu8AOuL64/Video-stream-app?node-id=0-1&m=dev&t=AniBpPt86PhIYz69-1" },
    ],
  },
];

export const ongoingProject: Project = {
  slug: "mappares",
  title: "Mappares",
  year: "Pågående",
  role: "Eget projekt, under utveckling",
  tag: "Social kart-app",
  summary:
    "En social map-app där du låser upp kartan i takt med att du reser — ett pågående eget projekt jag jobbar på just nu.",
  problem:
    "Jag ville skapa en app som kombinerar reseloggning med socialt utforskande: en karta som gradvis avtäcks i takt med att man besöker nya platser, kombinerat med ett flöde för att dela och upptäcka andras resor.",
  process: [
    "Designade onboarding, inloggning och den centrala kart-vyn med pin-läggning",
    "Byggde profilsidor med resestatistik och andel av världen utforskad",
    "Jobbar just nu på sök- och upptäcktsflödet",
  ],
  result: "Fortfarande under arbete — kommer uppdateras här allt eftersom.",
  images: [
    { src: "/images/mappares/overview.png", alt: "Mappares: välkomstskärm, inloggning, kartvy, profil och flöde" },
  ],
  figma: [
    { label: "Prototyp", url: "https://www.figma.com/design/HMfzQOneuDVKOhDfj5IWzS/Untitled?node-id=0-1&m=dev&t=jscP1VITlFTmy9Y1-1" },
  ],
  ongoing: true,
};
