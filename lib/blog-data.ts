export interface Article {
  slug: string
  title: string
  category: string
  preview: string
  content: string[]
  image?: string
}

export const articles: Article[] = [
  {
    slug: "gordeszkazar-alapjai",
    title: "A gördeszkázás alapjai: Hogyan kezdjük el?",
    category: "Kezdőknek",
    preview:
      "A gördeszkázás egy olyan szabadsportág, amely bárki számára elérhető, életkortól és tapasztalattól függetlenül. Az első lépések megtétele izgalmas, ám némi tudatos felkészüléssel sokkal biztonságosabb és élvezetesebb élménnyé válhat.",
    image: "/images/blog-default.jpg",
    content: [
      "A gördeszkázás világa sokkal mélyebb és összetettebb, mint amilyennek elsőre látszik. Mielőtt első deszkadat a földre helyeznéd, érdemes megérteni azokat az alapelveket, amelyekre az egész sport épül: egyensúly, ritmus, és a testtudat fejlesztése.",
      "Az első és legfontosabb lépés a megfelelő felszerelés kiválasztása. Egy kezdőnek szánt gördeszkának kellően stabil konstrukcióval kell rendelkeznie: szélesebb deszkalap, rugalmas truckok és közepes keménységű kerekek az ideális kombináció. A sisak, könyök- és csuklóvédő nem opcionális, hanem kötelező elem minden edzésen.",
      "A tartás és a lábpozíció tanulása az igazi első lépés. Kétféle alap tartás létezik: a regular és a goofy pozíció. Regular esetén a bal lábad vezet, goofy esetén a jobb. Semleges nyomda, szabad gurulás, lassítás és megállás – ezek azok az alapkészségek, amelyeket az első néhány hétben el kell sajátítani.",
      "A séta során fokozatosan épül fel az egyensúlyérzék. Eleinte elegendő csupán állni a deszkán, majd lassan tolni, majd meredekebb felületen is egyensúlyozni. Minden kisebb siker motiváló visszajelzés a fejlődésről, ezért fontos türelmesnek lenni önmagunkkal szemben.",
      "A gördeszkázást legjobb más hasonló szintű tanulókkal, vagy tapasztaltabb mentorok jelenlétében végezni. A közösség ereje nagyban hozzájárul az egyéni fejlődéshez, a visszajelzések pedig pontosabb önismeretet adnak. A gördeszkás kultúra alapvetően befogadó és támogató, ezért ne félj segítséget kérni.",
    ],
  },
  {
    slug: "trukkok-kezdoknek",
    title: "Trükkök kezdőknek: Az első mozdulatok",
    category: "Technika",
    preview:
      "Miután az alapokat elsajátítottad, eljön az a pont, amikor az első trükkökkel is megismerkedhetsz. Az ollie az alapja szinte minden más mozdulatnak, ezért ez az első és legfontosabb trükk, amit érdemes megtanulni.",
    image: "/images/blog-default.jpg",
    content: [
      "Az ollie-t 1978-ban fejlesztette ki egy fiatal gördeszkás, és azóta a sport szinte minden trükkjének alapköve. Lényege, hogy a deszka hátulja ütésszerűen érinti le a talajon, miközben az első láb csúszik előre a deszkán, és mindkét lábbal a levegőbe emelkedünk.",
      "Az ollie elsajátítása heteket, néha hónapokat vesz igénybe. Ne csüggedj, ha nem sikerül azonnal. A sikeres ollie mögött rengeteg ismétlés és apró kiigazítás áll. Először állóhelyzetben próbáld, majd lassan mozgásban is.",
      "A kickflip az ollie természetes folytatása: a deszkalap forgásba kerül a saját hossztengelye körül, és újra a lábaid alá érkezik. A mozdulat a kisujj felőli oldalon való rúgásból indul. A timing és a precizitás kulcsfontosságú.",
      "A manual, vagyis az orrán vagy farkán való egyensúlyozás szintén alapvető készség. Ehhez nincs szükség ugrásra, csak egyensúlyozásra: a deszka egyik vége a levegőben marad, miközben te gurulsz. Tökéletes egyensúlyérzéket fejleszt.",
      "A heelflip a kickflip tükörképe: a rúgás iránya fordított. Mindkét trükknek megvan a maga ritmusa és logikája. A tanulás során minden lépés értékes tapasztalat, legyen szó sikerről vagy hibáról. Az elesések a fejlődés részei, a védekezőfelszerelés pedig ezért is nélkülözhetetlen.",
    ],
  },
  {
    slug: "magyarorszagi-helyszinek",
    title: "Magyarország legjobb gördeszkás helyszínei",
    category: "Helyszínek",
    preview:
      "Magyarország területén számos kiváló helyszín várja a gördeszkásokat, a főváros belső kerületeinek síma burkolatától kezdve a vidéki városok épített parkjain át a természetes urbanisztikai adottságokig.",
    image: "/images/blog-default.jpg",
    content: [
      "Budapest egyedülálló adottságokkal rendelkezik a gördeszkázáshoz: a belváros épített környezete, a pémafalépcsős terek, az aluljárók és az újabb fejlesztések egyaránt vonzó helyszínt kínálnak. A főváros egyes kerületeiben kifejezetten a gördeszkásokra gondolva alakítottak ki szabadtéri parkokat.",
      "A vidéki városok szintén felismerték a gördeszkás kultúra értékét. Pécs, Miskolc, Debrecen és Győr mind rendelkeznek legalább egy dedikált parkkal, ahol a helyi közösségek rendszeresen találkoznak. Ezek a helyszínek jellemzően rampákat, ledge-eket és síkos felületeket kínálnak.",
      "A természetes helyszínek – vagyis az utcai gördeszkázás különböző terei – szintén fontos részei a gördeszkás kultúrának. Kapualjak, lépcsők, korlátok és padok sajátos kihívásokat rejtenek. Az utcai gördeszkázás során azonban mindig figyelni kell mások biztonságára és a vonatkozó szabályokra.",
      "Az időszakos eseményeket és helyszíneket érdemes követni online platformokon és helyi közösségeken keresztül. Néha átmeneti parkokat hoznak létre eseményekre vagy fejlesztési szakaszokra, amelyek egyedi élményt kínálnak.",
      "A megfelelő helyszín megválasztása függ a tapasztalati szinttől is. Kezdőknek a sík, akadálymentes felületek az ideálisak, haladóknak az épített parkok, míg a tapasztaltabb gördeszkások az utcai helyszínek kihívásait keresik. Bárhol is gördeszkázol, a közösség mindig szívesen fogad.",
    ],
  },
  {
    slug: "skateboard-tortenete-magyarorszagon",
    title: "A gördeszkázás útja Magyarországon",
    category: "Történet",
    preview:
      "A gördeszkázás Magyarországra a nyolcvanas évek közepén érkezett el, először a nyugati kultúra szimbolikus elemeként, majd fokozatosan önálló közösséggel és hagyományokkal rendelkező mozgalomként bontakozott ki.",
    image: "/images/hist-sk8.jpg",
    content: [
      "A nyolcvanas évek második felében Magyarországon is megjelentek az első deszkák, elsősorban a nyugati határokon átjutó árucikkek és kulturális hatások révén. Kezdetben kevesen értették, de mindenki érezte: ez valami teljesen más, mint a hagyományos sportok.",
      "A kilencvenes évek elején, a politikai változások nyomán nyíló határok és a szabad kereskedelmi lehetőségek révén egyre több gördeszkás cikk érkezett az országba. Az első hazai gördeszkás közösségek spontán szerveződtek össze a városok fő tereinek közelében.",
      "A kétezres évek elején a gördeszkás közösség kezdett intézményesülni: megjelentek a hazai versenyek, a szervezett edzőhelyek és az első generáció, amely már rendszeresen haladt előre technikai szinten. A kultúra összefonódott a graffitivel, a zenével és az utcai élettel.",
      "A tízes évek hozták a legnagyobb változást: az önkormányzatok kezdtek aktívan beruházni gördeszkás létesítményekbe, és a sport egyre inkább elfogadottá vált a szélesebb közönség körében is. Az olimpiai elismerés 2020-ban tovább erősítette a sport presztízsét.",
      "Ma Magyarországon aktív és sokszínű gördeszkás közösség létezik, amely fiatalokat és felnőtteket egyaránt magában foglal. A hazai gördeszkás hagyomány rövid, de gazdag, és minden generáció hozzáad valamit a folyamatosan bővülő örökséghez.",
    ],
  },
  {
    slug: "street-vs-park",
    title: "Street és Park: Két világ, egy kultúra",
    category: "Stílusok",
    preview:
      "A gördeszkázásnak két meghatározó irányzata alakult ki az évtizedek során: a street stílus és a park stílus. Mindkettő egyedi kihívásokat, technikákat és esztétikát képvisel.",
    image: "/images/blog-default.jpg",
    content: [
      "A street stílus lényege az urbánus környezet kreatív értelmezése. Lépcsők, korlátok, padok, falak és más városi elemek válnak a gördeszkás mozgás terepévé. A street skateboarding a szabadság és az improvizáció szimbóluma, amelynek nincs rögzített pályája.",
      "A park stílus ezzel szemben épített, dedikált helyszíneken zajlik. A parkok gondosan tervezett akadályrendszere lehetővé teszi a kontrollált, technikailag fejlett gördeszkázást. A különböző rampák, transition-ok és egyéb elemek komplex, folyékony vonalakat tesznek lehetővé.",
      "A két stílus különböző testmozgást és gondolkodásmódot igényel. A street gördeszkázás a precíz, pontszerű mozdulatok mestere, ahol minden trükk egy adott akadályra reagál. A park gördeszkázás inkább a folyékony mozgás és a sebesség kombinációjára épül.",
      "Sokan kevélik a két stílust, és ez a legtermészetesebb dolog. A street szemlélet segíti a kreativitást, míg a park a technikai fejlődést gyorsítja. A versenyeken külön kategóriák léteznek, de a mindennapi gördeszkázásban a kettő természetesen ötvöződik.",
      "Magyarországon egyre több park épül, de az utcai gördeszkázás hagyománya is erős. A két irányzat egymást kiegészítve formálja a hazai gördeszkás kultúrát, és minden gördeszkás megtalálhatja azt a stílust, amely leginkább illeszkedik személyiségéhez és képességeihez.",
    ],
  },
  {
    slug: "biztonsagi-felszereles",
    title: "Biztonsági felszerelés: Védd magad, gurulj szabadon",
    category: "Felszerelés",
    preview:
      "A gördeszkázás fizikailag intenzív és olykor kockázatos tevékenység. A megfelelő védőfelszerelés nemcsak a komoly sérülések megelőzésében segít, hanem nagyobb önbizalmat is ad az újabb technikák elsajátításához.",
    image: "/images/equipment.jpg",
    content: [
      "A sisak a legfontosabb védőeszköz. Kemény külső héjjal és rugalmas belső réteggel kell rendelkeznie, amely a fejre simulva absorbeálja az ütés erejét. A sisak mindig zárt állkapocsvédővel legyen rögzítve, és rendszeresen ellenőrizd az állagát.",
      "A csuklóvédő az elesések egyik leggyakoribb sérülésveszélyét csökkenti. Amikor valaki elesik, ösztönösen kitámaszkodik a kezével, ami csuklótöréshez vezethet. A jó csuklóvédő merev belső sínt és rugalmas rögzítőrendszert kombinál.",
      "A könyökvédő a könyök védelme mellett a hosszabb csúszásokban is segít. Keményített kagyló alakú külső felülettel rendelkezik, amely a lecsúszás során csökkenti a súrlódást és a bőrre nehezedő nyomást. A térdvédő hasonló elvek szerint működik.",
      "A gördeszkás cipőnek speciális tulajdonságokkal kell rendelkeznie: vastag, tapadós talp, erős vászon vagy bőr felsőrész és jó talpbél a lábhosszt. A cipőnek kényelmes, de szoros illeszkedésűnek kell lennie, hogy a lábfej érezni tudja a deszkán lévő mozgást.",
      "A teljes felszerelés rendszeres karbantartása éppoly fontos, mint a helyes használata. Ellenőrizd a rögzítési pontokat, a kopást és az esetleges töréseket. A megkopott vagy sérült védőfelszerelést nem szabad tovább használni – egy sérült sisak például nem nyújtja a szükséges védelmet.",
    ],
  },
  {
    slug: "gordeszkazar-kultura",
    title: "A gördeszkás kultúra: Mozgalom, identitás és közösség",
    category: "Kultúra",
    preview:
      "A gördeszkázás nem csupán sport – önálló kultúra, amely sajátos értékrendszert, vizuális nyelvet és közösségi identitást hordoz. Megértése kulcs ahhoz, hogy miért vonz milliókat szerte a világon.",
    image: "/images/blog-default.jpg",
    content: [
      "A gördeszkás kultúra az ötvenes évek Kaliforniájában gyökerezik, ahol a szörfösök szárazföldi alternatívát kerestek. Ez az eredetmítosz máig meghatározó: a gördeszkázás szabadságot, kreativitást és a szabályok megkérdőjelezését szimbolizálja.",
      "A vizuális kultúra – a deszkalapok grafikái, a falfestmények, a fotográfia és a videófilm – a gördeszkás közösség önkifejezésének elsődleges eszközei. Ezek az alkotások nemcsak dekorációk, hanem identitásmeghatározó szimbólumok is.",
      "A gördeszkás közösség jellemzője a befogadás és a meritokrácia: nem a társadalmi háttér, hanem a tudás és az attitűd számít. Aki tiszteli a kultúrát és komolyan veszi a fejlődést, az a közösség részévé válhat, függetlenül korától, nemétől vagy hátterétől.",
      "A zene és a gördeszkázás szétválaszthatatlanul összefonódott. A punkzene, a hip-hop és az alternatív műfajok mind szorosan kapcsolódnak a gördeszkás kultúrához, egymást kölcsönösen inspirálva és erősítve.",
      "Magyarországon a gördeszkás kultúra a globális hatások és a helyi hagyományok sajátos keveréke. A hazai gördeszkás közösség saját hangot és identitást alakított ki, amelyet az évtizedes tapasztalat, a térspecifikus kreativitás és az összetartó közösségi szellem jellemez.",
    ],
  },
  {
    slug: "skateboard-valasztas",
    title: "Hogyan válasszunk gördeszkát: Útmutató minden szintnek",
    category: "Felszerelés",
    preview:
      "A piacot elárasztják a különböző méretű és kialakítású deszkák, truckok és kerekek. Az ideális gördeszkát a testméreted, a gördeszkázási stílusod és a tapasztalati szinted alapján érdemes kiválasztani.",
    image: "/images/equipment.jpg",
    content: [
      "A deszkalap mérete az egyik legfontosabb tényező. Az általánosan használt szélességek 7.5 és 8.5 hüvelyk között mozognak. Kisebb cipőmérethez és street stílushoz a keskenyebb lap ajánlott, míg vert és park gördeszkázáshoz a szélesebb lap nagyobb stabilitást biztosít.",
      "A truckok legyenek arányban a deszkalappal. A truck magasságának két alapkategóriája van: az alacsony truck stabilabb, a magas truck nagyobb távolságot ad a kerekeknek, ami nagyobb kerekek használatát teszi lehetővé. A truck anyaga és kialakítása meghatározza a fordulékonyságot és az élettartamot.",
      "A kerekek mérete és keménysége (durometer) döntő hatással van a gördeszkázás élményére. A kisebb, keményebb kerekek (99A-101A) street gördeszkázáshoz ideálisak, míg a nagyobb, puhább kerekek (78A-85A) hosszabb gurulási távolságot és simább menetérzést adnak.",
      "A csapágyak minősége meghatározza a gurulás sebességét és tartósságát. Az ABEC értékelési rendszer ugyan elterjedt, de a gördeszkás csapágyaknál fontosabb a gyártási minőség és az anyaghasználat. Rendszeres tisztítással és olajozással a csapágyak élettartama meghosszabbítható.",
      "Kezdőknek érdemes komplett szetteket választani, amelyek összeillő alkatrészeket tartalmaznak. Haladókkal érdemes megbeszélni az egyéni igényeket és az önálló alkatrész-összeállítás előnyeit. A tökéletes gördeszkát fokozatosan lehet kialakítani, tapasztalataink és preferenciáink alapján.",
    ],
  },
  {
    slug: "flip-trukkok",
    title: "A flip-trükkök világa: Technika és precizitás",
    category: "Technika",
    preview:
      "A flip-trükkök a gördeszkázás leglátványosabb és legtechnikásabb elemei közé tartoznak. A deszka levegőben végzett forgásai és pörgetései egyedi kombinációkat tesznek lehetővé.",
    image: "/images/blog-default.jpg",
    content: [
      "A flip-trükkök közös jellemzője, hogy a deszkalap a hossztengelye körül forog a levegőben. A kickflip esetén a deszka egy teljes fordulatot tesz a kisujj irányába, miközben a gördeszkás a levegőben marad és a deszka visszaérkezésekor talpra áll.",
      "A heelflip a kickflip ellentéte: a rúgás a sarok felőli oldalon történik, és a forgás is ellentétes irányú. Mindkét trükk elsajátítása hasonló mennyiségű gyakorlást igényel, de a gördeszkás természetes tartásától és domináns lábától függően az egyik könnyebbnek tűnhet.",
      "A varial flip a kickflip és egy oldalirányú fordulat kombinációja: a deszka egyszerre pörög és forgolódik. Ez az egyik első összetett trükk, amelyre érdemes törekedni, miután a kickflip már megbízhatóan sikerül.",
      "A hardflip a varial flip variációja, amelynek során a deszka fordított irányban pörög. A 360 flip – amelyet háromszázhatvannak is neveznek – a deszka teljes, háromszázhatvan fokos fordulásával jár. Mindkét trükk fejlett egyensúlyérzéket és precíz timing-ot igényel.",
      "A flip-trükkök fejlesztésekor érdemes minden egyes mozdulatot apró részletekre bontani: a lábpozíció, az ugrás magassága, a rúgás iránya és a fogás mind különálló elemek. Lassított felvételek segítségével azonosítani lehet a javítandó pontokat, és tudatosabban lehet közelíteni a technikához.",
    ],
  },
  {
    slug: "gordeszkazar-es-fitness",
    title: "Gördeszkázás és fitness: Az erő, az egyensúly és a kitartás",
    category: "Edzés",
    preview:
      "A gördeszkázás nemcsak szórakozás és önkifejezés – komoly fizikai edzésnek is számít. Rendszeres gördeszkázással fejlődnek az egyensúlyérzék, a koordináció, az erő és az állóképesség.",
    image: "/images/blog-default.jpg",
    content: [
      "A gördeszkázás komplex mozgásmintákat igényel, amelyek a legtöbb izomcsoportot aktívan bevonják. A core izmok – a has és a derék körüli izomzat – folyamatosan dolgoznak az egyensúly fenntartásán. A lábizmok a tolás, az ugrás és a landolás során dinamikus terhelésen esnek át.",
      "Az egyensúlyérzék fejlesztése az egyik legfontosabb gördeszkás fitness-hatás. A propriocepció – a testünk térbeli helyzetének érzékelése – látványosan javul rendszeres gördeszkázás hatására. Ez más sportokban és a mindennapi életben is érezhető pozitív változást hoz.",
      "Az állóképesség fejlesztése természetesen következik a hosszabb gördeszkás szesszionokból. Egy másfél-két órás edzés, amelyen aktívan gurulsz, trükközöl és rampán haladsz, könnyedén 600-900 kalóriát éget. A kardiovaszkuláris terhelés folyamatos és változatos, ami hatékonnyá teszi a testmozgást.",
      "A kiegészítő edzés segít a gördeszkázáshoz szükséges erő felépítésében. Guggolás, egyensúlygyakorlatok, plankok és a csuklóerő fejlesztése mind hozzájárulnak a jobb gördeszkás teljesítményhez. A rugalmasság és a stretching az elesések utáni regenerálódást gyorsítja.",
      "A mental fitness ugyanolyan fontos, mint a fizikai. A gördeszkázás türelmet, kitartást és kudarctolerancia-fejlesztést kíván. Egy trükk akár hetekig is tarthat, amíg megjelenik – ez az a fajta edzés, amely nemcsak testet, hanem jellemet is formál.",
    ],
  },
  {
    slug: "vert-technikak",
    title: "Vert gördeszkázás: A rampa mesterei",
    category: "Technika",
    preview:
      "A vert gördeszkázás a függőleges rampákon – vagyis a vertikális fallal rendelkező struktúrákon – végzett gördeszkázás különleges formája. Magasság, sebesség és levegőidő jellemzik ezt a dinamikus irányzatot.",
    image: "/images/blog-default.jpg",
    content: [
      "A vert rampák jellemzője, hogy a fal fokozatosan egészen függőlegessé válik az aljától a tetejéig, ahol egy kis elgörbülés – a coping – zárja le a struktúrát. A gördeszkás a rampán föl-le haladva lendületet épít fel, majd a coping fölött trükköket hajt végre.",
      "A vert gördeszkázás alapja a transition kezelése: az ívelt felületen való mozgás során a testsúly áthelyezése és az egyensúly fenntartása más technikát igényel, mint a síkfelületi gördeszkázás. Az ívek olvasása és az önálló lendületépítés az első elsajátítandó készség.",
      "Az axle stall az első coping-trükk: a deszka tengelye a copingon pihen meg egy pillanatra, majd visszalöki a gördeszkást. A rock'n'roll a deszka orrát a coping fölé billenti, majd visszakormányoz. Ezek az alaptrükkök a vert gördeszkázás építőkövei.",
      "A levegőbe emelt trükkök – az air-ek – a vert gördeszkázás leginkább látványos elemei. A gördeszkás a coping fölé emelkedik, trükköt hajt végre, majd visszaereszkedik a rampára. A 540, a 720 és más forgási kombinációk az élvonal gördeszkások repertoárjának részei.",
      "A vert gördeszkázáshoz speciális felszerelés ajánlott: a sisak és a térdvédő különösen fontos, hiszen az esések nagyobb energiával járnak, mint a sík felületen. A rampán való gördeszkázás biztonságos és összetartó környezetet kínál, amelyen belül a tapasztaltabbak szívesen adnak tanácsot az újonnan érkezőknek.",
    ],
  },
  {
    slug: "versenyeken-valo-reszvetel",
    title: "Versenyek és megmérettetés: A gördeszkás sportteljesítmény",
    category: "Versenyzés",
    preview:
      "A gördeszkázás 2020-tól olimpiai sportág, és a versenyrendszer egyre szervezettebbé vált. Magyarországon is rendszeres versenyeket tartanak, ahol a résztvevők tudásukat és kreativitásukat mérethetik meg.",
    image: "/images/blog-default.jpg",
    content: [
      "A gördeszkás versenyek kétféle formátumban zajlanak: a futam-alapú és a jam-alapú rendszerben. A futam-alapú versenyeken minden versenyző előre meghatározott idejű meneteket kap, amelyek során a legjobb mozdulataival igyekszik pontokat szerezni. A jam-formátumban mindenki egyszerre gördeszkázik, és a legjobb pillanatokat értékelik.",
      "A zsűrizés az egyik legösszetettebb eleme a versenyeknek. A bírók a nehézséget, a kreativitást, a végrehajtás minőségét és a különböző akadályok kihasználását értékelik. Az olimpiai rendszerben a legmagasabb és a legalacsonyabb pontszámot elhagyják, és a maradék pontokból átlagot számítanak.",
      "A versenyfelkészülés rendszeres és célzott edzést igényel. Érdemes előre megtervezni a menetben szereplő mozdulatok sorrendjét, és azokat következetesen gyakorolni. A versenynyomás kezelése külön tudást igényel: a stresszoldó technikák és a rutinszerű bemelegítés sokat segít.",
      "Kezdők számára a helyi és regionális versenyek ideálisak az első lépések megtételéhez. Ezeken a megmérettetéseken a hangsúly a részvételen és a tapasztalatszerzésen van, nem az eredményen. Minden verseny tanulási lehetőség, amelyből fejlődni lehet.",
      "Magyarország egyre aktívabban vesz részt a kelet-európai gördeszkás versenyrendszerben. A hazai versenyeken kialakult baráti légkör és a kölcsönös biztatás egy befogadó, pozitív közösséget hoz létre, amely minden tapasztalati szintű gördeszkást szívesen fogad.",
    ],
  },
  {
    slug: "gordeszkazar-kozosseg",
    title: "A gördeszkás közösség: Kötelékek, hagyományok és értékek",
    category: "Kultúra",
    preview:
      "A gördeszkás közösségek szerte a világon és Magyarországon is egyedi belső kultúrával és értékrendszerrel rendelkeznek. A közösség nemcsak a gördeszkázásról szól, hanem az emberekről és a közösen épített tér értelmezéséről is.",
    image: "/images/blog-default.jpg",
    content: [
      "A gördeszkás közösségek jellemzően spontán, alulról szervezett módon jönnek létre. Nincs szükség formális tagságra vagy belépési feltételekre: elegendő megjelenni a parkban vagy a kedvelt utcai helyszínen, és a közösség természetesen körülvesz. Ez az informális struktúra az egyik legerősebb összetartó erő.",
      "A generációk közti átadás a gördeszkás kultúra egyik legszebb vonása. A tapasztaltabb gördeszkások spontán segítenek a kezdőknek, trükköket mutatnak be, és visszajelzéseket adnak. Ez a mentoráló jelleg nem kötelesség, hanem önkéntes szokás, amelyet a közösség hosszú idő alatt alakított ki.",
      "A különböző hátterű, korú és tapasztalatú gördeszkások egy helyen való megjelenése rendkívül sokszínű közösséget hoz létre. A parkban természetesen keverednek diákok, dolgozók, fiatalok és középkorúak – mindannyiukat ugyanaz a szenvedély köti össze.",
      "A gördeszkás közösség saját szókincset, gesztusokat és szokásokat alakított ki az évtizedek alatt. Az egymásra mutogató pózok, a deszka megütése egy jó trükk után, a csoportos videómegosztás – ezek mind a közösség belső kommunikációs rendszerének részei.",
      "Magyarországon a gördeszkás közösség folyamatosan növekszik és fejlődik. Az új helyszínek, a növekvő érdeklődés és a sportág olimpiai jelenléte mind erősítik a hazai gördeszkás kultúrát. A közösség befogadó, dinamikus és mindig nyitott az új tagokra.",
    ],
  },
  {
    slug: "idojaras-es-gordeszkazar",
    title: "Időjárás és gördeszkázás: Évszakok és körülmények",
    category: "Praktikus",
    preview:
      "A gördeszkázás időjárásfüggő sport, amelyet a különböző évszakok és időjárási körülmények jelentősen befolyásolnak. A tapasztalt gördeszkások megtanulják, mikor és hol érdemes gördeszkázni.",
    image: "/images/blog-default.jpg",
    content: [
      "A száraz, meleg időjárás ideális a gördeszkázáshoz: a száraz aszfalt vagy beton maximális tapadást biztosít, és a napsütés kellemes körülményeket teremt. A nyári hónapok Magyarországon általában kedveznek a szabadtéri gördeszkázásnak, bár a rekkenő hőség rövidebbé teheti az edzésszesszionokat.",
      "Az esős időjárás az egyik legnagyobb kihívást jelenti. A nedves felületen a kerekek csúsznak, a trükkök kiszámíthatatlanná válnak, és a deszka anyaga is megrongálódhat. Esős napokon a fedett belső helyszínek – mint a beltéri gördeszkás parkok – az ideális alternatívák.",
      "Az ősz és a tavasz vegyes képet mutat. A száraz őszi napok közt sokan a gördeszkázás legjobb időszakának tartják a szeptembertől novemberig tartó időszakot: mérséklelt a hőmérséklet, és a levegő kevésbé párás. A tavaszi olvadás után azonban időbe telik, amíg a felszínek teljesen kiszáradnak.",
      "A tél gördeszkázást leginkább a hó és a jegesedés akadályozza. Száraz, fagyos napokon azonban lehet gördeszkázni fedett helyen. A téli hónapokban sokan a fitnesz-kiegészítő edzésre koncentrálnak, hogy tavasszal erősebbek és frissebben térjenek vissza.",
      "A szél is befolyásolja a gördeszkázást: erős szélben az irányítás nehezebb, és egyes trükkök kivitelezése veszélyesebbé válik. Érdemes megismerni a helyi időjárási szokásokat és a napszakok szerint változó körülményeket, hogy a legjobb feltételek között tudjunk gördeszkázni.",
    ],
  },
  {
    slug: "trukkok-evolucoja",
    title: "A trükkök evolúciója: Hogyan fejlődött a gördeszkázás technikája?",
    category: "Történet",
    preview:
      "A gördeszkás trükkök a sport kezdeteitől fogva folyamatosan fejlődnek. Minden évtized új technikákat, stílusokat és határokat hozott, amelyek alapvetően alakítják a mai gördeszkázást.",
    image: "/images/hist-sk8.jpg",
    content: [
      "A gördeszkázás kezdeti korszakában – az ötvenes és hatvanas évek Kaliforniájában – a trükkök egyszerűek és az alapmozgáshoz kötöttek voltak. A fordulatok, a wheelie (keréken való egyensúlyozás elődje) és az alapvető manőverek alkották az első trükkök készletét.",
      "A hetvenes évek hozták az első forradalmat: a vert gördeszkázás kialakulásával megjelent a levegőben végrehajtott trükkök fogalma. A medencékben és rampákon gördeszkázó úttörők fedezték fel, hogy a coping fölé lehet emelkedni – és ez minden addigi elképzelést megváltoztatott.",
      "Az 1978-as ollie feltalálása a gördeszkázás valódi forradalma volt. Ez az egyetlen mozdulat egy teljesen új dimenzióba emelte a sportot: hirtelen minden utcai akadály – lépcső, korlát, pad – elérhetővé vált a deszkával. Az ollie az összes modern trükk alapjává vált.",
      "A nyolcvanas és kilencvenes évek a technikai fejlődés aranykorát hozták. A flip-trükkök, a grind-ek és a slide-ok kombinációi robbanásszerűen sokasodtak. Minden évtizedben megjelentek új határokat feszegető gördeszkások, akik újabb és bonyolultabb kombinációkat mutattak be.",
      "Ma a gördeszkázás technikai szintje olyan magasra emelkedett, hogy a korábbi generációk által lehetetlen trükköknek tartott mozdulatokat a fiatalabbak viszonylag korán elsajátítják. Az evolúció folytatódik: az internet és a videómegosztás révén a tudás gyorsabban terjed, és a következő generáció minden bizonnyal ismét meglep majd bennünket.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug)
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  return articles.filter((a) => a.slug !== slug).slice(0, count)
}
