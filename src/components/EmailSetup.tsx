import React, { useEffect } from 'react';

// EmailJS Setup Instructions Component
const EmailSetup: React.FC = () => {
  useEffect(() => {
    console.log(`
    🔧 EMAILJS SETUP INSTRUKCIJE:
    
    1. Idi na https://www.emailjs.com/ i napravi nalog
    2. Kreiraj novi Email Service (Gmail, Outlook, itd.)
    3. Kreiraj Email Template sa sledećim parametrima:
       - {{from_name}} - ime pošaljioca
       - {{from_email}} - email pošaljioca  
       - {{message}} - poruka
       - {{to_email}} - tvoj email (urosjebrt@gmail.com)
    
    4. U Contact.tsx komponenti zameni:
       - YOUR_PUBLIC_KEY sa tvojim Public Key
       - YOUR_SERVICE_ID sa tvojim Service ID
       - YOUR_TEMPLATE_ID sa tvojim Template ID
    
    5. Primer template-a:
       Subject: Nova poruka sa portfolio sajta
       Body: 
       Ime: {{from_name}}
       Email: {{from_email}}
       
       Poruka:
       {{message}}
    
    Sve ključeve možeš naći u EmailJS dashboard-u.
    `);
  }, []);

  return null;
};

export default EmailSetup;