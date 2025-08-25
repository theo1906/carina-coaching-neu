'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// Testimonials data moved to a separate file
const TESTIMONIALS = [
  {
    quote: "Carinas positive Ausstrahlung und starke Energie beeindruckt mich immer wieder. In unseren Sessions ist sie spürbar zu 100% präsent.",
    fullText: `Ich hatte meine 1. Session bei mir Zuhause, weil ich gerne in meinem gewohnten Umfeld sein wollte und mich da einfach sicherer gefühlt habe. Carina fragte sehr einfühlsam, aber auch fokussiert nach, was mich meiner ambivalenten Haltung zu meinem Frausein liebevoll näher brachte. Gemeinsam erarbeiteten wir in dem Vorgespräch mein Anliegen sehr präzise und deutlich heraus: „Wie kann ich in liebevoller Verbundenheit mit dem eigenen Frausein durch mein Leben gehen?“ Der Prozess hat mich zu überraschenden, aber auch emotional bewegenden Momenten geführt.

Ich war erstaunt, dass es mir so leicht gefallen ist, mich mit meinen verschiedenen Anteilen und Haltungen klar zu verbinden und ins Fühlen zu kommen. Normalerweise hat mein kontrollierender vernünftiger Anteil das Sagen, so dass der intuitive fühlende, weibliche Anteil oft unterdrückt ist. Das konnte ich in dieser Session sehr klar und bewusst erleben und durch eine wertschätzende, würdigende Haltung konnten sich die beiden Anteile in mir annähern.

Carina hat den Raum während des Prozesses wunderbar gehalten. Ich fühlte mich sicher geführt und emotional warm begleitet. Sodass ich mich zuletzt meinem weiblichen, fühlenden und verletzlichen Anteil in Neugierde und mit Wärme öffnen konnte. Ich durft für mich spüren, dass es sicher ist, mich in meiner Verletzlichkeit zu zeigen. Für mich noch sehr neu und ungewohnt, aber wunderschön. Diese Erfahrung hat sich durch das bewusste Zulassen und Fühlen in meinem Körper verankert. Ich konnte mich durch die Arbeit mit Carina bewusst dafür öffnen und bin sehr dankbar für diese neue, noch zarte Verbindung zu meiner Weiblichkeit und Sanftheit.`,
    author: "Carmen, 61"
  },
  {
    quote: "Das Coaching mit Carina war für mich ein ganz besonderer Prozess. Mein Anliegen und Ziel war es mich besser abgrenzen zu können, vor allem in der Beziehung zu meinen Eltern.",
    fullText: `In den Sitzungen durfte ich mich auf eine neue, tiefere Weise mit mir selbst verbinden. Carina hat einen sicheren Container geschaffen, in dem alles da sein durfte: leise Zweifel, alte Verletzungen, aber auch meine Stärke, mein Mut und mein Wunsch nach Entwicklung. Ich habe mich in diesem Raum sehr gesehen und verstanden gefühlt – als ganzer Mensch, mit allem, was da ist.

Besonders berührt hat mich, wie ich im Laufe des Coachings eine tiefe, innere Entschlossenheit spüren konnte – nicht nur im Kopf, sondern auch im Herzen und im Bauch. Obwohl ich dazu neige, viel im Kopf zu sein, hat Carina es geschafft, auch meine Körper- und Energieebene achtsam mit einzubeziehen. Ich weiß jetzt, dass diese Stärke in mir da ist, und ich probiere, mich im Alltag immer wieder bewusst mit ihr zu verbinden. Das hilft mir ganz konkret dabei, meine Grenzen klarer wahrzunehmen und in meinen Beziehungen achtsamer für mich einzustehen und meine Bedürfnisse offen zu kommunizieren. Auch gegenüber meinen Eltern.

Ich durfte verschiedene innere Anteile kennenlernen und verstehen – nicht mit dem Ziel, sie zu bewerten, sondern um ihnen Raum zu geben. Dabei habe ich auch erkannt, wie sehr ich eigene Erfahrungen manchmal klein rede – und wie heilsam es ist, ihnen Raum zu geben und sie liebevoll anzunehmen. Das hat mir geholfen, mehr Klarheit über mich selbst zu gewinnen und mit mir selbst mitfühlender zu werden. Das war für mich der Schlüssel für jede weitere Transformation in mir und für tiefere Heilung.

Carina hat mich darin bestärkt, mich auch verletzlich zu zeigen – in einem Raum, der vollkommen wertfrei und getragen war. Ihre Arbeit geht spürbar über reines Wissen hinaus. Ich konnte immer wieder sehr deutlich fühlen, egal ob in unseren persönlichen Session oder Online, dass Carina nicht nur einen Beruf ausübt, sondern ihre Berufung lebt. Danke, Carina, für deine Tiefe, deine Klarheit und deine achtsame Präsenz.`,
    author: "Paula, 31",
    role: "Coaching-Klientin",
    coachingType: "Spiritual Life Coaching"
  },
  {
    quote: "Mit Carina fühlte ich mich sofort wohl und sicher. Sie schafft einen Raum, in dem ich mich vollkommen frei gefühlt habe.",
    fullText: `Ich hatte ein Thema mit meiner Mama, eine der wichtigsten und stärksten Frauen in meinem Leben, aber gleichzeitig eine der Menschen, die mich am meisten verletzt hat, enttäuscht hat, benachteiligt hat, nicht adäquat behandelt und verstanden hat. Zumindest in meiner Wahrnehmung. Es ist hart, das so niederzuschreiben, aber aus der Wut, die ich anfänglich nur hatte, haben sich viele einzelne Gefühle und Situationen differenziert, durch die Anwesenheit, Anleitung und Unterstützung von Carina. Ich wollte eine Erklärung, warum meine Mutter meine Schwestern mir vorzieht und eine Legitimation, wütend zu sein. Bekommen habe ich hingegen einen differenzierten Blumenstrauß an Gefühlen, Sichtweisen und Impulsen. Keine einfache Lösung für eine Symptomatik, aber eine komplexe und der Situation angemessene Methode, mit diesem Thema umzugehen und weiter zu arbeiten. 

Carina hat es mit ihrer Art und Art zu arbeiten geschafft, dass ich mich komplett entspannen und frei machen konnte von allen Alltagsgedanken. Dass ich im Moment sein konnte, mich getraut habe, alle Emotionen zu äußern, wie sie gerade aus meinem Körper purzelten, egal ob mit Lachen, mit Tränen, mit Worten oder in imaginären Bildern. 

Das Coaching bei Carina war unglaublich und unglaublich intensiv, aber gleichzeitig befreiend und entlastend. Das Gefühl der Glücklichkeit hat sich nach ein paar Tagen und Wochen eingestellt, immer wieder und schleichend, aber stetig immer mehr werdend. Die Nachhaltigkeit und der Nachhall beeindrucken mich bis heute. 

So ein Coaching ist nichts, was man in der Mittagspause zwischen zwei Terminen macht. Ein Coaching bei Carina ist eine intensive Investition in das eigene Seelenheil, der Start einer Reise die man alleine nie beginnen würde bzw. beginnen kann, denn ohne Reiseführerin sieht man immer nur die offensichtlichen Attraktionen, aber nie die geheimen Ecken, die es lohnt zu betrachten. 

Alles in allem kann ich dir, Carina, nur DANKE sagen, für diese Erfahrung, für dein Feingefühl, deinen Raum, deine zarte, aber stützende und starke Anwesenheit und deine Empathie. Danke für den Beginn einer guten Reise zurück zu mir selbst!`,
    author: "Andrea, 34"
  },
  {
    quote: "Ich bin zu Carina gegangen, weil ich seit Langem mit einem Thema fast täglich konfrontiert war. Ich hatte das Gefühl, dass mir dieses Thema im Alltag immer wieder begegnet.",
    fullText: `Je mehr ich versuchte, es loszulassen, desto mehr wiederholte es sich. Das hat mich sehr angestrengt, und ich fühlte mich dadurch oft eingeschränkt und fremdgesteuert. Ich wollte mich endlich von dieser Hürde befreien. 

Ich bin mit gemischten Gefühlen zum Coaching gegangen: einerseits wollte ich mir helfen lassen, andererseits wusste ich wirklich nicht, wo ich anfangen sollte. Carina hat mir von Anfang an einen Weg gezeigt. Meine Unklarheit hat sie genutzt, um mich Schritt für Schritt aus der Verwirrung und Frustration herauszuholen. Keine 30 Minuten nach Beginn der Session saß ich plötzlich vor einer klaren Zusammenfassung meiner inneren Überzeugungen. Das Formulieren des konkreten Anliegens hat mir geholfen, mein Ziel direkt vor Augen zu behalten und mich energetisch damit zu verbinden. 

Und dann ging es richtig los. Durch eine klare Struktur – und vor allem durch Carinas liebevolle Begleitung und ihre diskrete Unterstützung – stand ich da, in einer ehrlichen und mutigen Auseinandersetzung mit meinen Gefühlen. Es war wunderschön, die Verbindung zu meinem Körper zu spüren, meine inneren Hindernisse wahrzunehmen, mit meinem Atem in Einklang zu sein – ganz mit mir verbunden zu sein. 

Jeden Anteil in mir, der in diesen wiederkehrenden Situationen entsteht, in die Augen zu schauen, hat sich angefühlt, als hätte ich den Ariadnefaden gefunden, um meinen Weg durch das innere Labyrinth zu finden. 

Ich habe diese Step-by-Step-Reise sehr genossen. Auch wenn der Weg sehr intensiv war, weil ich meine inneren Widerstände deutlich im Körper spüren konnte und es für mich auch neu und ungewohnt war, mich so verletzlich zeigen zu können, war Carina's wertvolle Anleitung jedes Mal wie ein Anker, der mich zurück zu mir selbst geführt hat. 

Ich bin aus dem Coaching gegangen mit dem Gefühl, in Frieden mit all meinen inneren Anteilen Hand in Hand weiterzugehen. Frieden zu schließen – vor allem mit dem Bewusstsein, wer ich wirklich bin und was ich nicht mehr brauche. 

Danke, liebe Carina, für diese wertvolle, tiefe Erfahrung, die mein Leben verändern kann. `,
    author: "Christina, 43",
    role: "Online Coaching-Klientin",
    coachingType: "Spiritual Life Coaching"
  },
  {
    quote: "Durch die Walk & Talk Session mit Carina habe ich zu mehr innerer Ruhe gefunden und konnte meine Beziehung zu meiner Tochter verbessern.",
    fullText: `Ich habe einen Vollzeit Bürojob und bin außerhalb der Arbeit gerne in Bewegung und draußen. Ich war daher neugierig auf das Angebot von Carina Coaching eine Walk & Talk Session in der Natur zu machen. Ich war emotional sehr aufgebracht, innerlich angespannt und auch erschöpft. Ich redete schnell und viel, mein Gehen war kein spazieren sondern eher gehetzt sein. 

Carina hat mich mit ihrer ruhigen und offenen Art dort abgeholt wo ich war und ich konnte dadurch sehr deutlich spüren, wie ich sowohl in meinem Kopf als auch körperlich ruhiger wurde. Ich erzählte Carina von meinem Anliegen, dass ich schon länger Schwierigkeiten habe im Umgang mit meiner Tochter und wie sehr ich schon eine ganze Zeit verzweifelt versuchte, eine gute Lösung zu finden, die vor allem auch in Einklang mit mir und meinen Bedürfnissen steht. 

Wir waren in dem nördlichen ruhigen Teil vom Englischen Garten unterwegs und nutzten den geschützten Raum auf einer Wiese, um tiefer ins Thema einzusteigen. Carina hat mit ihrer spürbaren Präsenz ein Energiefeld geschaffen, in dem es mir in kurzer Zeit möglich war, tief zu gehen, in mich hinein zu sinken und mich über den Körper bewusst in die unterschiedlichen Positionen der Beteiligten ein zu spüren. 

Durch gezielte, liebevolle Fragen haben wir uns dem tiefer liegenden Kern des Konflikts behutsam angenähert. Plötzlich kam ich vom Kopf in die Herzebene. Ich konnte bewusst wahrnehmen, wie sich mein Herz wieder öffnen konnte und der energetische Dialog mit meiner Tochter kam ins Fliessen. 

Carina hat mich in diesem Prozess sehr klar und mitfühlend begleitet. Aufgrund ihrer eigenen Erfahrungen konnte sie sich gut in mich und mein Thema einfühlen und mir die notwendige Hilfestellung geben, dass ich am Ende zu einem für mich neuen Ergebnis in Verbindung mit meinem Herz kam. 

Seit der Session sind 4 Wochen vergangen und meine Tochter und ich sind wieder mehr ein Team. Ich bin in der entspannten Zuversicht, dass sie ihr Leben gut meistern wird und dieses Vertrauen schenkt mir mehr Leichtigkeit und Freiheit für mein Leben. Danke dir, liebe Carina!`,
    author: "Tine, 61",
    role: "Coaching-Klientin",
    coachingType: "Spiritual Life Coaching"
  },
  {
    quote: "Kurz vor einem Burnout habe ich den Weg zu Carina gefunden und mich für ein Online Coaching Packet angemeldet.",
    fullText: `Ich war zunächst etwas skeptisch, aber ja - auch online funktioniert wunderbar! Carina hat für mich einen sicheren Raum gehalten, wo ich mir erlaubt habe mich komplett zu zeigen mit allem was ist. Durch ihre Feinfühligkeit und gezielten Fragen hat sie mir geholfen meine wiederkehrenden Muster im Leben sehr deutlich zu erkennen und dadurch auch direkt beim Schopf zu packen. 

Carina hat sehr schnell mit mir heraus gearbeitet, wo meine Kernthemen liegen und was meine Strategien sind, um den darunter liegenden Schmerz nicht fühlen zu müssen. In unseren 8 Stunden Coaching durfte ich erfahren wie es sich anfühlt sich verletzlich zu zeigen und trotzdem gehalten zu sein. Ich habe mein Vertrauen in mich und die Kraft in mir wieder entdeckt, sodass ich nach kurzer Zeit wieder "lebensfähig" war. 

Carina hat es mir ermöglicht, dass ich mutig in mich hinein gefühlt habe und Gefühle zulassen konnte, die ich sonst immer unterdrückt habe. Ich kann mich nun abgrenzen und trotzdem öffnen. Dafür werde ich dir immer dankbar sein liebe Carina und möchte deine Coachings gerne von Herzen weiterempfehlen. Die Entscheidung mit dir zu arbeiten ist eine wertvolle Investition in sich selbst und unsere Sessions haben mir geholfen, mich noch besser kennenzulernen. Seitdem gehe ich gefühlt entspannter durch mein Leben, in liebevoller Verbundenheit mit meinem Körper und in dem tiefen Wissen und Gefühl von innen heraus: ich bin gut so wie ich bin.`,
    author: "Martina, 53",
    role: "Online Coaching-Klientin",
    coachingType: "Spiritual Life Coaching"
  }
] as const;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (index: number) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextTestimonial();
    }
    if (touchStart - touchEnd < -50) {
      prevTestimonial();
    }
  };


  const testimonials = [
    {
      quote: "Es hat großen Spaß gemacht mit Carina zu arbeiten. Ihre einfühlsame Art und ihr professionelles Vorgehen haben mir geholfen, meine innere Stimme zu finden und ihr zu vertrauen. Jede Sitzung war eine bereichernde Reise zu mir selbst.",
      fullText: `Es hat großen Spaß gemacht mit Carina zu arbeiten. Ich hatte meine erste Session bei mir Zuhause, weil ich mich in meinem gewohnten Umfeld sicherer fühlte. Carina hat mit ihrer einfühlsamen und gleichzeitig fokussierten Art eine wunderbare Atmosphäre geschaffen. Ihre professionelle und zugleich herzliche Art hat mir geholfen, mich meinen Themen zu nähern. Ich war erstaunt, dass es mir so leicht gefallen ist, mich mit meinen verschiedenen Anteilen und Haltungen klar zu verbinden und ins Fühlen zu kommen. Normalerweise hat mein kontrollierender vernünftiger Anteil das Sagen, so dass der intuitive fühlende, weibliche Anteil oft unterdrückt ist. Das konnte ich in dieser Session sehr klar und bewusst erleben und durch eine wertschätzende, würdigende Haltung konnten sich die beiden Anteile in mir annähern. 

Carina hat den Raum während des Prozesses wunderbar gehalten. Ich fühlte mich sicher geführt und emotional warm begleitet. Sodass ich mich zuletzt meinem weiblichen, fühlenden und verletzlichen Anteil in Neugierde und mit Wärme öffnen konnte. Ich durfte für mich spüren, dass es sicher ist, mich in meiner Verletzlichkeit zu zeigen. Für mich noch sehr neu und ungewohnt, aber wunderschön. Diese Erfahrung hat sich durch das bewusste Zulassen und Fühlen in meinem Körper verankert. Ich konnte mich durch die Arbeit mit Carina bewusst dafür öffnen und bin sehr dankbar für diese neue, noch zarte Verbindung zu meiner Weiblichkeit und Sanftheit.`,
      author: "Carmen, 61",
      role: "Coaching-Klientin",
      coachingType: "Spiritual Life Coaching"
    },
    {
      quote: "Das Coaching mit Carina war für mich ein ganz besonderer Prozess. Mein Anliegen und Ziel war es mich besser abgrenzen zu können, vor allem in der Beziehung zu meinen Eltern und mir generell zu erlauben mehr Raum einzunehmen in meinem Leben für mich und meine Bedürfnisse.",
      fullText: "In den Sitzungen durfte ich mich auf eine neue, tiefere Weise mit mir selbst verbinden. Carina hat einen sicheren Container geschaffen, in dem alles da sein durfte: leise Zweifel, alte Verletzungen, aber auch meine Stärke, mein Mut und mein Wunsch nach Entwicklung. Ich habe mich in diesem Raum sehr gesehen und verstanden gefühlt – als ganzer Mensch, mit allem, was da ist. Besonders berührt hat mich, wie ich im Laufe des Coachings eine tiefe, innere Entschlossenheit spüren konnte – nicht nur im Kopf, sondern auch im Herzen und im Bauch. Obwohl ich dazu neige, viel im Kopf zu sein, hat Carina es geschafft, auch meine Körper- und Energieebene achtsam mit einzubeziehen. Ich weiß jetzt, dass diese Stärke in mir da ist, und ich probiere, mich im Alltag immer wieder bewusst mit ihr zu verbinden. Das hilft mir ganz konkret dabei, meine Grenzen klarer wahrzunehmen und in meinen Beziehungen achtsamer für mich einzustehen und meine Bedürfnisse offen zu kommunizieren. Auch gegenüber meinen Eltern. Ich durfte verschiedene innere Anteile kennenlernen und verstehen – nicht mit dem Ziel, sie zu bewerten, sondern um ihnen Raum zu geben. Dabei habe ich auch erkannt, wie sehr ich eigene Erfahrungen manchmal klein rede – und wie heilsam es ist, ihnen Raum zu geben und sie liebevoll anzunehmen. Das hat mir geholfen, mehr Klarheit über mich selbst zu gewinnen und mit mir selbst mitfühlender zu werden. Das war für mich der Schlüssel für jede weitere Transformation in mir und für tiefere Heilung. Carina hat mich darin bestärkt, mich auch verletzlich zu zeigen – in einem Raum, der vollkommen wertfrei und getragen war. Ihre Arbeit geht spürbar über reines Wissen hinaus. Ich konnte immer wieder sehr deutlich fühlen, egal ob in unseren persönlichen Session oder Online, dass Carina nicht nur einen Beruf ausübt, sondern ihre Berufung lebt. Danke, Carina, für deine Tiefe, deine Klarheit und deine achtsame Präsenz.",
      author: "Paula, 31",
      role: "Coaching-Klientin",
      coachingType: "Spiritual Life Coaching"
    },
    {
      quote: "Mit Carina fühlte ich mich sofort wohl und sicher. Sie schafft einen Raum, in dem ich mich vollkommen frei gefühlt habe und in dem ich fühlen konnte, ohne Impuls von Außen - einfach das, was aus meinem Inneren kam.",
      fullText: "Ich hatte ein Thema mit meiner Mama, eine der wichtigsten und stärksten Frauen in meinem Leben, aber gleichzeitig eine der Menschen, die mich am meisten verletzt hat, enttäuscht hat, benachteiligt hat, nicht adäquat behandelt und verstanden hat. Zumindest in meiner Wahrnehmung. Es ist hart, das so niederzuschreiben, aber aus der Wut, die ich anfänglich nur hatte, haben sich viele einzelne Gefühle und Situationen differenziert, durch die Anwesenheit, Anleitung und Unterstützung von Carina. Ich wollte eine Erklärung, warum meine Mutter meine Schwestern mir vorzieht und eine Legitimation, wütend zu sein. Bekommen habe ich hingegen einen differenzierten Blumenstrauß an Gefühlen, Sichtweisen und Impulsen. Keine einfache Lösung für eine Symptomatik, aber eine komplexe und der Situation angemessene Methode, mit diesem Thema umzugehen und weiter zu arbeiten.\n\nCarina hat es mit ihrer Art und Art zu arbeiten geschafft, dass ich mich komplett entspannen und frei machen konnte von allen Alltagsgedanken. Dass ich im Moment sein konnte, mich getraut habe, alle Emotionen zu äußern, wie sie gerade aus meinem Körper purzelten, egal ob mit Lachen, mit Tränen, mit Worten oder in imaginären Bildern.\n\nDas Coaching bei Carina war unglaublich und unglaublich intensiv, aber gleichzeitig befreiend und entlastend. Das Gefühl der Glücklichkeit hat sich nach ein paar Tagen und Wochen eingestellt, immer wieder und schleichend, aber stetig immer mehr werdend. Die Nachhaltigkeit und der Nachhall beeindrucken mich bis heute.\n\nSo ein Coaching ist nichts, was man in der Mittagspause zwischen zwei Terminen macht. Ein Coaching bei Carina ist eine intensive Investition in das eigene Seelenheil, der Start einer Reise die man alleine nie beginnen würde bzw. beginnen kann, denn ohne Reiseführerin sieht man immer nur die offensichtlichen Attraktionen, aber nie die geheimen Ecken, die es lohnt zu betrachten.\n\nAlles in allem kann ich dir, Carina, nur DANKE sagen, für diese Erfahrung, für dein Feingefühl, deinen Raum, deine zarte, aber stützende und starke Anwesenheit und deine Empathie. Danke für den Beginn einer guten Reise zurück zu mir selbst!",
      author: "Andrea, 34",
      role: "Coaching-Klientin"
    },
    {
      quote: "Ich bin zu Carina gegangen, weil ich seit Langem mit einem Thema fast täglich konfrontiert war. Ich hatte das Gefühl, dass mir dieses Thema im Alltag immer wieder begegnet.",
      fullText: "Carina hat sehr schnell mit mir heraus gearbeitet, wo meine Kernthemen liegen und was meine Strategien sind, um den darunter liegenden Schmerz nicht fühlen zu müssen.\n\nIn unseren 8 Stunden Coaching durfte ich erfahren wie es sich anfühlt sich verletzlich zu zeigen und trotzdem gehalten zu sein. Ich habe mein Vertrauen in mich und die Kraft in mir wieder entdeckt, sodass ich nach kurzer Zeit wieder \"lebensfähig\" war. Carina hat es mir ermöglicht, dass ich mutig in mich hinein gefühlt habe und Gefühle zulassen konnte, die ich sonst immer unterdrückt habe.\n\nIch kann mich nun abgrenzen und trotzdem öffnen. Dafür werde ich dir immer dankbar sein liebe Carina und möchte deine Coachings gerne von Herzen weiterempfehlen. Die Entscheidung mit dir zu arbeiten ist eine wertvolle Investition in sich selbst und unsere Sessions haben mir geholfen, mich noch besser kennenzulernen. Seitdem gehe ich gefühlt entspannter durch mein Leben, in liebevoller Verbundenheit mit meinem Körper und in dem tiefen Wissen und Gefühl von innen heraus: ich bin gut so wie ich bin.",
      author: "Christina, 43",
      role: "Online Coaching-Klientin"
    },
    {
      quote: "Das Coaching mit Carina war für mich ein ganz besonderer Prozess. Mein Anliegen und Ziel war es mich besser abgrenzen zu können, vor allem in der Beziehung zu meinen Eltern.",
      fullText: "In den Sitzungen durfte ich mich auf eine neue, tiefere Weise mit mir selbst verbinden. Carina hat einen sicheren Container geschaffen, in dem alles da sein durfte: leise Zweifel, alte Verletzungen, aber auch meine Stärke, mein Mut und mein Wunsch nach Entwicklung.\n\nIch habe mich in diesem Raum sehr gesehen und verstanden gefühlt – als ganzer Mensch, mit allem, was da ist. Besonders berührt hat mich, wie ich im Laufe des Coachings eine tiefe, innere Entschlossenheit spüren konnte – nicht nur im Kopf, sondern auch im Herzen und im Bauch. Obwohl ich dazu neige, viel im Kopf zu sein, hat Carina es geschafft, auch meine Körper- und Energieebene achtsam mit einzubeziehen.\n\nIch weiß jetzt, dass diese Stärke in mir da ist, und ich probiere, mich im Alltag immer wieder bewusst mit ihr zu verbinden. Das hilft mir ganz konkret dabei, meine Grenzen klarer wahrzunehmen und in meinen Beziehungen achtsamer für mich einzustehen und meine Bedürfnisse offen zu kommunizieren. Auch gegenüber meinen Eltern.\n\nIch durfte verschiedene innere Anteile kennenlernen und verstehen – nicht mit dem Ziel, sie zu bewerten, sondern um ihnen Raum zu geben. Dabei habe ich auch erkannt, wie sehr ich eigene Erfahrungen manchmal klein rede – und wie heilsam es ist, ihnen Raum zu geben und sie liebevoll anzunehmen. Das hat mir geholfen, mehr Klarheit über mich selbst zu gewinnen und mit mir selbst mitfühlender zu werden.\n\nDas war für mich der Schlüssel für jede weitere Transformation in mir und für tiefere Heilung. Carina hat mich darin bestärkt, mich auch verletzlich zu zeigen – in einem Raum, der vollkommen wertfrei und getragen war. Ihre Arbeit geht spürbar über reines Wissen hinaus. Ich konnte immer wieder sehr deutlich fühlen, egal ob in unseren persönlichen Session oder Online, dass Carina nicht nur einen Beruf ausübt, sondern ihre Berufung lebt. Danke, Carina, für deine Tiefe, deine Klarheit und deine achtsame Präsenz.",
      author: "Martina, 53",
      role: "Coaching-Klientin"
    },
    {
      quote: "Durch die Walk & Talk Session mit Carina habe ich zu mehr innerer Ruhe gefunden und konnte meine Beziehung zu meiner Tochter verbessern.",
      fullText: "Ich habe einen Vollzeit Bürojob und bin außerhalb der Arbeit gerne in Bewegung und draußen. Ich war daher neugierig auf das Angebot von Carina Coaching eine Walk & Talk Session in der Natur zu machen. Ich war emotional sehr aufgebracht, innerlich angespannt und auch erschöpft. Ich redete schnell und viel, mein Gehen war kein spazieren sondern eher gehetzt sein. Carina hat mich mit ihrer ruhigen und offenen Art dort abgeholt wo ich war und ich konnte dadurch sehr deutlich spüren, wie ich sowohl in meinem Kopf als auch körperlich ruhiger wurde. Ich erzählte Carina von meinem Anliegen, dass ich schon länger Schwierigkeiten habe im Umgang mit meiner Tochter und wie sehr ich schon eine ganze Zeit verzweifelt versuchte, eine gute Lösung zu finden, die auch in Einklang mit mir und meinen Bedürfnissen steht. Wir waren im nördlichen ruhigen Teil vom Englischen Garten unterwegs und nutzten den geschützten Raum auf einer Wiese, um tiefer ins Thema einzusteigen. Carina hat mit ihrer spürbaren Präsenz ein Energiefeld geschaffen, in dem es mir in kurzer Zeit möglich war, tief zu gehen, in mich hinein zu sinken und mich über den Körper bewusst in die unterschiedlichen Positionen der Beteiligten einzufühlen. Durch gezielte, liebevolle Fragen haben wir uns dem tiefer liegenden Kern des Konflikts behutsam angenähert. Plötzlich kam ich vom Kopf in die Herzebene. Ich konnte bewusst wahrnehmen, wie sich mein Herz wieder öffnen konnte und der energetische Dialog mit meiner Tochter kam ins Fliessen. Carina hat mich in diesem Prozess sehr klar und mitfühlend begleitet. Aufgrund ihrer eigenen Erfahrungen konnte sie sich gut in mich und mein Thema einfühlen und mir die notwendige Hilfestellung geben, dass ich am Ende zu einem für mich neuen Ergebnis in Verbindung mit meinem Herz kam. Seit der Session sind 4 Wochen vergangen und meine Tochter und ich sind wieder mehr ein Team. Ich bin in der entspannten Zuversicht, dass sie ihr Leben gut meistern wird und dieses Vertrauen schenkt mir mehr Leichtigkeit und Freiheit für mein Leben.",
      author: "Tine, 61",
      role: "Coaching-Klientin"
    }
  ];

  // Calculate visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3 % TESTIMONIALS.length;
    const endIndex = startIndex + 3;
    
    if (endIndex <= TESTIMONIALS.length) {
      return TESTIMONIALS.slice(startIndex, endIndex);
    } else {
      return [
        ...TESTIMONIALS.slice(startIndex),
        ...TESTIMONIALS.slice(0, endIndex % TESTIMONIALS.length)
      ];
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(TESTIMONIALS.length / 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(TESTIMONIALS.length / 3) - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Was <span className="font-medium">meine Klientinnen</span> sagen
          </h2>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-2 rounded-full bg-white shadow-md text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow duration-300 relative">
                {/* Name in top right corner */}
                <div className="absolute top-4 right-4 text-right">
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 italic mb-4 pr-16">
                  "{testimonial.quote}"
                </blockquote>
                
                {expandedTestimonial === index ? (
                  <div className="mt-4">
                    <p className="text-gray-700 whitespace-pre-line">{testimonial.fullText}</p>
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="mt-3 text-pink-600 hover:text-pink-800 text-sm font-medium flex items-center"
                    >
                      Weniger anzeigen
                      <ChevronUpIcon className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="text-pink-600 hover:text-pink-800 text-sm font-medium flex items-center mt-2"
                  >
                    Mehr lesen
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                )}
                
                {/* Removed coaching type */}
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-2 rounded-full bg-white shadow-md text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        
        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-pink-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
