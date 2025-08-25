import React from 'react';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-playfair">Datenschutzerklärung</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">1. Allgemeine Hinweise</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Der Schutz deiner personenbezogenen Daten ist mir sehr wichtig. Ich behandle deine Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                Diese Datenschutzerklärung informiert dich über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website.
              </p>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Verantwortlich für die Datenverarbeitung ist:</h3>
                <div className="space-y-1">
                  <p>Carina Göb</p>
                  <p>Carina Göb Coaching – Embodiment for Women</p>
                  <p>Jella-Lepman-Str. 17</p>
                  <p>81673 München</p>
                  <p>E-Mail: <a href="mailto:connect@carina-coaching.de" className="text-pink-600 hover:underline transition-colors">connect@carina-coaching.de</a></p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">2. Zugriffsdaten / Server-Logfiles</h2>
            <div className="space-y-6 text-gray-700">
              <p>Beim Besuch dieser Website werden automatisch Informationen erfasst (sogenannte Server-Logfiles), darunter:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (gekürzt)</li>
              </ul>
              <p>Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs und werden nicht mit anderen Datenquellen zusammengeführt. Eine personenbezogene Auswertung erfolgt nicht.</p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">3. Terminbuchung</h2>
          <p className="mb-6">
            Wenn du über diese Website einen Termin buchst, werden personenbezogene Daten erhoben (z. B. Name, E-Mail-Adresse, ggf. Telefonnummer). Die Verarbeitung erfolgt zur Abwicklung deiner Buchung und ggf. zur Kontaktaufnahme.
          </p>
          <p className="mb-6">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
          </p>
          <p className="mb-6">
            Die Daten werden nicht an Dritte weitergegeben und nur so lange gespeichert, wie es für die Durchführung und Dokumentation deiner Buchung erforderlich ist.
          </p>
          
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">4. Anonyme Fragen und Feedback-Funktion</h2>
          <p className="mb-6">
            Du hast auf dieser Website die Möglichkeit, anonym Fragen oder Rückmeldungen zu übermitteln. Diese Inhalte werden ohne Rückschluss auf deine Identität ausgewertet und an mich weitergeleitet.
          </p>
          <p className="mb-6">
            Es werden keine IP-Adressen, Standortdaten oder personenbezogene Informationen gespeichert oder verknüpft. Die Verarbeitung erfolgt ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an anonymem Feedback zur Verbesserung des Angebots).
          </p>
          
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">5. Kontaktaufnahme per E-Mail oder Formular</h2>
          <p className="mb-6">
            Wenn du mich per E-Mail oder über ein Kontaktformular kontaktierst, werden deine Angaben zwecks Bearbeitung der Anfrage gespeichert. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
          </p>
          <p className="mb-6">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und lit. b (Vertragsanbahnung)
          </p>
          
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">6. Cookies und Drittanbieter-Technologien</h2>
          <p className="mb-6">
            Diese Website verwendet Cookies und ähnliche Technologien, um Inhalte und Funktionen optimal bereitzustellen, Zugriffe zu analysieren und die Nutzererfahrung zu verbessern. Einige Cookies sind für den Betrieb der Website technisch notwendig, während andere deiner ausdrücklichen Zustimmung bedürfen.
          </p>
          
            <h3 className="text-xl font-medium text-gray-800 mb-4">6.1 Cookie-Kategorien</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Essenzielle Cookies:</strong> Notwendig für den Betrieb der Website (z. B. Navigation, Buchungsfunktion). Diese können nicht deaktiviert werden.
            </li>
            <li>
              <strong>Statistik-Cookies:</strong> Ermöglichen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.
            </li>
          </ul>
          
          <p className="mb-6">
            Du kannst deine Cookie-Einstellungen jederzeit anpassen oder widerrufen – etwa über die <Link href="/cookie-einstellungen" className="text-pink-600 hover:underline">Cookie-Einstellungen</Link>.
          </p>
          
            <h3 className="text-xl font-medium text-gray-800 mt-8 mb-4">6.2 Google Analytics</h3>
          <p className="mb-4">
            Diese Website verwendet Google Analytics, einen Webanalysedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mb-4">
            Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch dich ermöglichen. Die durch den Cookie erzeugten Informationen über deine Benutzung dieser Website (einschließlich deiner IP-Adresse) werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p className="mb-4">
            IP-Anonymisierung ist auf dieser Website aktiviert. Deine IP-Adresse wird daher von Google innerhalb der Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
          </p>
          <p className="mb-4">
            <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Du kannst deine Einwilligung jederzeit widerrufen oder anpassen – etwa über die <Link href="/cookie-einstellungen" className="text-pink-600 hover:underline">Cookie-Einstellungen</Link>.
          </p>
          <p className="mb-4">
            Weitere Informationen zur Nutzung von Google Analytics findest du in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Datenschutzerklärung von Google</a> und den <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Nutzungsbedingungen von Google Analytics</a>.</p>
          
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">7. Deine Rechte nach der DSGVO</h2>
            <div className="space-y-6 text-gray-700">
              <p>Du hast jederzeit das Recht:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Auskunft über deine gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>unrichtige Daten korrigieren zu lassen (Art. 16 DSGVO)</li>
                <li>deine Daten löschen zu lassen (Art. 17 DSGVO)</li>
                <li>die Verarbeitung einzuschränken (Art. 18 DSGVO)</li>
                <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                <li>deine Daten in einem maschinenlesbaren Format zu erhalten (Art. 20 DSGVO)</li>
              </ul>
              <p>Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren, wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten rechtswidrig erfolgt.</p>
              <p><strong>Zuständige Aufsichtsbehörde in Bayern:</strong><br />
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">www.lda.bayern.de</a></p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">8. Änderung dieser Datenschutzerklärung</h2>
            <div className="space-y-6 text-gray-700">
              <p>Ich behalte mir vor, diese Datenschutzerklärung anzupassen, um sie an aktuelle rechtliche Anforderungen oder Änderungen meines Angebots anzupassen. Die jeweils aktuelle Version findest du stets auf dieser Website.</p>
            </div>
          </section>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
