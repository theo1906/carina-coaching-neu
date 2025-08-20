// Add type declarations for CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

// Add type declarations for image files
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

// Add type declarations for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    // Node.js
    NODE_ENV: 'development' | 'production' | 'test';
    
    // Next.js
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_SITE_NAME: string;
    
    // Contact Information
    NEXT_PUBLIC_CONTACT_EMAIL: string;
    NEXT_PUBLIC_CONTACT_PHONE: string;
    NEXT_PUBLIC_CONTACT_ADDRESS: string;
    
    // Social Media
    NEXT_PUBLIC_INSTAGRAM_URL?: string;
    NEXT_PUBLIC_FACEBOOK_URL?: string;
    NEXT_PUBLIC_YOUTUBE_URL?: string;
    
    // ReCAPTCHA (if using contact form)
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY?: string;
    RECAPTCHA_SECRET_KEY?: string;
    
    // Email Service (if using Nodemailer or similar)
    EMAIL_SERVER_HOST?: string;
    EMAIL_SERVER_PORT?: string;
    EMAIL_SERVER_USER?: string;
    EMAIL_SERVER_PASSWORD?: string;
    EMAIL_FROM?: string;
  }
}
