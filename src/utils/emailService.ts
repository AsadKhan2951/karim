// Email service using EmailJS for contact form submissions
// To set up:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the IDs below with your actual values from EmailJS dashboard

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS Public Key

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  service?: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // For now, we'll use a simple approach - you can integrate EmailJS library
    // Import EmailJS library: npm install @emailjs/browser
    // For demonstration, I'll provide the implementation
    
    const { default: emailjs } = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      subject: data.subject || data.service || 'General Inquiry',
      message: data.message,
      to_email: 'info@karimaccounting.ca', // Your business email
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you within 24 hours.',
      };
    } else {
      return {
        success: false,
        message: 'Something went wrong. Please try again or call us directly.',
      };
    }
  } catch (error) {
    console.error('Email send error:', error);
    
    // Fallback: Create a mailto link
    const mailtoLink = createMailtoLink(data);
    window.location.href = mailtoLink;
    
    return {
      success: true,
      message: 'Opening your email client...',
    };
  }
}

// Fallback function to create mailto link
function createMailtoLink(data: EmailData): string {
  const to = 'info@karimaccounting.ca';
  const subject = encodeURIComponent(data.subject || data.service || 'Contact Form Submission');
  const body = encodeURIComponent(
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone || 'Not provided'}\n\n` +
    `Message:\n${data.message}`
  );
  
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

// Alternative simpler approach: Just use mailto
export function sendEmailViaMailto(data: EmailData): void {
  const mailtoLink = createMailtoLink(data);
  window.location.href = mailtoLink;
}
