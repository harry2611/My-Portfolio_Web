# EmailJS Setup Guide for Portfolio Contact Form

## Overview
This guide will help you set up EmailJS to make your contact form functional. EmailJS allows you to send emails directly from your frontend without needing a backend server.

## Step 1: Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{user_name}}

From: {{user_name}} ({{user_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abcd1234567890`)

## Step 5: Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email to see if the message arrived

## Troubleshooting

### Common Issues:
1. **Form not sending**: Check browser console for errors
2. **Invalid credentials**: Verify your Service ID, Template ID, and Public Key
3. **Email not received**: Check spam folder, verify email service setup

### Template Variables:
Make sure your EmailJS template uses these variable names:
- `{{user_name}}` - For the sender's name
- `{{user_email}}` - For the sender's email
- `{{subject}}` - For the message subject
- `{{message}}` - For the message content

### Rate Limits:
- Free EmailJS accounts have a limit of 200 emails per month
- Upgrade to a paid plan if you need more

## Security Notes:
- Your Public Key is safe to expose in frontend code
- Never expose your Private Key in frontend code
- The Service ID and Template ID are also safe to expose

## Features Included:
✅ Form validation (required fields)
✅ Loading state during submission
✅ Success/error status messages
✅ Form reset after successful submission
✅ Responsive design
✅ Dark mode support
✅ Smooth animations

Your contact form is now ready to receive messages! 🎉
