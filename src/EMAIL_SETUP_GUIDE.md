# Email Setup Guide for Karim Accounting Website

This guide will help you set up email functionality for all contact and consultation forms on the website.

## Overview

The website uses **EmailJS** for sending emails from contact and consultation forms. This allows clients to receive form submissions directly to their email without needing a backend server.

## Setup Instructions

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add an Email Service

1. After logging in, go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
   - For Gmail: You'll need to enable "Less secure app access" or use an App Password
5. Give your service a name (e.g., "Karim Accounting Contact Form")
6. **Copy the Service ID** - you'll need this later

### Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject/Service: {{subject}}

Message:
{{message}}

---
This message was sent from the Karim Accounting website contact form.
```

4. In the template settings:
   - **To Email**: Set this to your business email (info@karimaccounting.ca)
   - **From Name**: {{from_name}}
   - **From Email**: Use your EmailJS email or verified sender
   - **Reply To**: {{from_email}} (so you can reply directly to the customer)

5. **Copy the Template ID** - you'll need this later

### Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. **Copy the Public Key** - you'll need this later

### Step 5: Update the Website Code

Open the file `/utils/emailService.ts` and update these three values at the top:

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID from Step 2
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID from Step 3
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key from Step 4
```

### Step 6: Install EmailJS Package

Run this command in your project terminal:

```bash
npm install @emailjs/browser
```

## Forms That Send Emails

The following forms on your website will now send emails:

1. **Contact Page** (`/contact`)
   - Main contact form with name, email, phone, subject, message

2. **Homepage** 
   - "Book a Free Consultation" form in the hero section

3. **Service Pages**
   - Personal Accounting consultation form
   - Corporate Accounting consultation form
   - All other service pages with consultation forms

## Email Notifications

When someone fills out a form, you will receive an email at **info@karimaccounting.ca** with:
- Customer's name
- Customer's email
- Customer's phone number
- Subject/Service they're interested in
- Their message

You can reply directly to these emails, and it will go to the customer's email address.

## Free Plan Limitations

EmailJS free plan includes:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Basic email delivery

If you need more emails per month, you can upgrade to a paid plan.

## Fallback Option

If EmailJS fails for any reason, the forms will automatically fall back to opening the user's default email client (mailto link) with the form data pre-filled. This ensures users can always contact you.

## Testing

After setup, test the forms by:
1. Filling out the contact form on `/contact`
2. Submitting the form
3. Checking your inbox at info@karimaccounting.ca
4. Verifying all form data came through correctly

## Alternative: Use a Different Email Service

If you prefer not to use EmailJS, you can also:

1. **Use Formspree**: Similar to EmailJS, form backend service
2. **Use Supabase**: Set up a backend with email sending capabilities
3. **Use your own backend**: Create an API endpoint to send emails

## Support

If you have issues setting up EmailJS:
- Check the EmailJS documentation: https://www.emailjs.com/docs/
- Verify your email service is connected properly
- Make sure you copied the IDs correctly
- Check browser console for error messages

## Security Note

The Public Key is safe to use in client-side code. However, for additional security, you can set up domain restrictions in EmailJS settings to only allow emails from your domain (karimaccounting.ca).

---

**Need help?** Contact your web developer or EmailJS support.
