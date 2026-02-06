# EmailJS Setup Guide

## Steps to Complete EmailJS Integration

### 1. Install the Package
```bash
npm install @emailjs/browser
```

### 2. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 3. Create an Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Your service ID is already set: `service_8mb6nnq`

### 4. Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use these template variables in your email template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{project_type}}` - Project type selected
   - `{{message}}` - Project details/message
   - `{{to_name}}` - Your name (Abdelhadi)

4. Example template:
```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Save the template and copy the **Template ID**

### 5. Get Your Public Key
1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (it looks like: `xxxxxxxxxxxxx`)
3. Copy it

### 6. Update the Code
Open `src/app/page.tsx` and find the `handleSubmit` function (around line 230).

Replace these placeholders:
- `'YOUR_TEMPLATE_ID'` - Replace with your EmailJS template ID
- `'YOUR_PUBLIC_KEY'` - Replace with your EmailJS public key

The code should look like this:
```typescript
await emailjs.send(
  'service_8mb6nnq',
  'your_template_id_here', // Your template ID
  templateParams,
  'your_public_key_here' // Your public key
);
```

### 7. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting

- **"Failed to send message"**: Check that your template ID and public key are correct
- **"Service not found"**: Verify your service ID `service_8mb6nnq` is correct
- **No email received**: Check your spam folder and verify your email service is properly connected in EmailJS dashboard

## Security Note

The public key is safe to expose in client-side code. EmailJS uses it to identify your account, but it doesn't grant access to sensitive operations.
