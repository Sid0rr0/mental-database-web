import { Heading, Stack, Text } from "@chakra-ui/core";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

const information: React.FC = ({}) => {
	return (
		<>
			<Navbar />
			<Main align="center" px={4} pt="8rem" spacing="4rem" fontSize="xl">
				<Stack as="section" align="center">
					<Heading
						as="h1"
						fontSize={["3xl", "4xl", "5xl", "6xl"]}
						fontWeight="normal"
					>
						Informace
					</Heading>
					<Text>Před prvním setkáním s odborníkem</Text>
					<Text>
						„Chodím na terapii“ - přiznání, které se často dost
						špatně sděluje. Ale proč vlastně? Stydí se někdo za
						docházení k očaři, urologovi nebo zubaři? Svěřujete se
						těžko kamarádovi s bolestí břicha? Mám dojem, že nic z
						toho nám těžkou hlavu nedělá. Všechno to jsou části
						těla, kterých se můžeme dotknout, a většina z nás už
						někdy pocítila bolest s nimi spjatou.
					</Text>
					<Text>
						Zatímco na duši si nesáhneme. Nevíme, jaký zvuk vydá,
						když se zlomí. Nevíme ani, jak vypadá. Její léčení může
						zabrat několik měsíců či let. Ne jako se zánětem v
						osmičce jen pár sezení na zubařském křesle. A především,
						nemocná duše může mít tisíce různých příčin, tisíce
						různých příběhů od tisíce různých lidí. Každý z nich tu
						bolest, strach, bezmoc, vztek nebo smutek vnímá tisíce
						různými způsoby. Proto je každý průběh a délka zotavení
						individuální.
					</Text>
					<Text>
						Duše tu ale je, máme ji všichni. A i když ji nevidíme,
						neměli bychom na ni zapomínat. Psychoterapie může být
						cestou, jak se zase naučit být se svou hlavou kamarád.
					</Text>
					<Text>Jak takovou cestu začít a jak asi bude vypadat?</Text>
				</Stack>
				<section>
					<Heading fontWeight="normal">
						První kontakt - objednání
					</Heading>
					<Text>
						Pokud si psychologa hledáte sami bez doporučení, na
						internetu byste určitě měli najít kontaktní informace.
						Pokud jste dostali doporučení od svého lékaře nebo
						někoho z vašich blízkých, kontakt vám mohli poskytnout
						oni. Doporučení konkrétního psychoterapeuta od kamaráda
						sice není zárukou, že bude vyhovovat i vám, ale pokud s
						ním již někdo má pozitivní zkušenosti, stojí to za
						zkoušku.
					</Text>
					<Text>
						S psychoterapeutem se můžete domluvit na první schůzku
						telefonicky nebo třeba e-mailem. Objedná vás buď
						zdravotní sestra, recepční nebo přímo psycholog, se
						kterým se dohodnete na přesném datu a hodině. Při
						objednávání nemusíte do detailů popisovat důvod vaší
						návštěvy, někdy se vás na něj dokonce ani nikdo neptá.
						Pokud k tomu dojde, stačí říct třeba jen "Necítím se
						dobře" nebo "Potřebuji si promluvit s odborníkem".
					</Text>
				</section>
				<section>
					<Heading fontWeight="normal">První sezení</Heading>
					<Text>
						Někteří psychoterapeuti mají ke svým ordinacím
						připojenou čekárnu a z ní si vás také v určený čas
						vyzvednou (například v situaci, kdy má vícero psychologů
						ordinace poblíž sebe v jedné budově), jiní spoléhají na
						dochvilnost svých klientů a čekají na ně v domluveném
						čase přímo ve své ordinaci. Dostavit se včas na schůzku
						je důležité především pro vás, jelikož je sezení časově
						omezeno a pravděpodobně jsou po vás objednaní další
						lidé. Pozdním příchodem byste se zbytečně okrádali o
						svůj čas, který můžete věnovat terapii. Ovšem nečekané
						události se dějí, pokud se na domluvenou schůzku
						nemůžete dostavit, dejte psychoterapeutovi včas vědět.
					</Text>
					<Text>
						Při prvním sezení se psychoterapeut více zaměřuje na to,
						s čím k němu přicházíte, jaký je váš problém nebo
						starost a co od jeho pomoci očekáváte – kam byste se
						chtěli posunout, případně co je vaším cílem. Je pouze na
						vás, co všechno terapeutovi sdělíte a co si zatím
						necháte pro sebe. Důležité je, abyste se cítili bezpečně
						a do ničeho se nenutili. Psychoterapeut vám následně
						může sdělit, jakou formu pomoci nabízí, jaký je jeho
						způsob práce a co od něj můžete očekávat. Je opět pouze
						na vás, zda budete chtít pokračovat a domluvíte si další
						sezení s tímto terapeutem nebo zjistíte, že přístup,
						který právě tento psychoterapeut využívá, vám nesedí a
						zkusíte si najít terapeuta jiného. Pokud jste dospěli k
						závěru, že vám dotyčný psychoterapeut vyhovuje, pokusíte
						se společně dohodnout na krocích, které by vás mohly
						posunout blíž k cíli, k místu, ke kterému byste se rádi
						s pomocí terapie dostali. Někdy je potřeba pár sezení,
						jindy roky spolupráce. Je to velmi individuální.
					</Text>
				</section>
				<section>
					<Heading fontWeight="normal">
						Časté obavy oddalující první návštěvu psychologa
					</Heading>
					<Text>
						<strong>Odsouzení</strong> – psycholog nikdy svého
						klienta neodsuzuje, nehodnotí, přijímá ho takového, jaký
						je. Každé sezení bude jen o vás. O vašem smutku,
						radostech, vzteku, strachu, lásce, bolesti. Člověk
						naproti vám bude doopravdy poslouchat a snažit se
						všechno to, co se ve vás odehrává, pochopit.
						Psychoterapeut je člověk, který se na vás nedívá skrz
						prsty.
					</Text>
					<Text>
						<strong>Zjednodušování problému</strong> – jak bylo již
						zmíněno v předešlém bodě, psychoterapeut své klienty
						nesoudí, neodsuzuje a nezesměšňuje. Ať už za ním
						přijdete s čímkoliv, tráví s vámi čas proto, aby vám
						pomohl, ne aby se vám smál do očí. I kdyby vám samotným
						připadala vaše starost jako hloupost.
					</Text>
					<Text>
						<strong>Prozrazení</strong> – povinností každého
						psychoterapeuta je zachovávat mlčenlivost. Výjimkou je
						terapeutův supervizor (psycholog pro psychologa) a v
						případě psychoterapeuta placeného zdravotní pojišťovnou
						je to dokumentace ve zdravotnictví. I na tyto situace a
						informace se ovšem vztahuje mlčenlivost. Záleží pouze na
						vás, zda se někomu svěříte s tím, že docházíte na
						terapii.
					</Text>
					<Text>
						<strong>Špatná volba psychoterapeuta</strong> – konečně
						se odhodláte k objednání se k psychoterapeutovi, máte za
						sebou první sezení, možná i víc, a zjišťujete, že vám
						nevyhovuje tak, jak byste si přáli. Samozřejmě, i to se
						může stát. V našem životě se setkáváme se spoustou lidí,
						se kterými si nepadneme do noty a ve vztahu s
						psychoterapeutem to může být stejně. Neznamená to, že je
						dotyčný psychoterapeut špatný. To, že nevyhovuje vám,
						není zárukou toho, že nebude vyhovovat někomu jinému.
						Někteří si se svým prvním psychoterapeutem skvěle
						rozumí, jiní najdou "toho správného" třeba až na pátý
						pokus. Nenechte se odradit a vyzkoušejte jiného
						terapeuta. Děláte to pro sebe, později si za to
						poděkujete.
					</Text>
					<Text>
						Dejte tomu šanci a bude dobře. Za pár měsíců, let. Možná
						jen na chvíli a možná se taky budete potřebovat po
						ukončení psychoterapie za nějakou dobu vrátit. Každému z
						nás pomůže něco jiného. Stejně tak má každý z nás jinde
						postavené hranice, jiné potřeby, překážky, hodnoty,
						pocity. Nikdo není do puntíku stejný jako my sami, proto
						se zkusme nesrovnávat, protože to, že já potřebuji více
						času než člověk, kterému z něj stačí jen polovina,
						neznamená, že se nesnažím, nebo že jsem něco míň.
						Znamená to, že jsme prostě každý sám sebou.
					</Text>
				</section>
			</Main>
		</>
	);
};

export default information;
