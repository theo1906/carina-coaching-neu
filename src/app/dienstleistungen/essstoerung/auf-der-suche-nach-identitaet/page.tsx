import { redirect } from 'next/navigation';

export default function AufDerSucheNachIdentitaetRedirect() {
  // Permanent redirect to the main Essstörung page
  redirect('/dienstleistungen/essstoerung');
}
