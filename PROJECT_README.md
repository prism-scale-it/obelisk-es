# Email Signature Dashboard

A professional email signature generator for Obelisk Consulting built with React, TypeScript, and Tailwind CSS.

## Features

### Form Fields

- **First Name** (Required) - Your first name
- **Last Name** (Required) - Your last name
- **Middle Name** (Optional) - Your middle name
- **Position/Designation** (Required) - Your job title
- **Email** (Required) - Email with fixed @obelisk.au domain
- **Country Code** (Required) - Choose between AU (+61) or IN (+91)
- **Phone Number** (Required) - Auto-formatted based on country code
  - AU: 9 digits (formatted as XXX XXX XXX)
  - IN: 10 digits (formatted as XXXXX XXXXX)
- **Address** (Required) - Max 100 characters with character counter

### Validations

- ✅ All required fields must be filled
- ✅ Email domain is locked to @obelisk.au
- ✅ Phone number validates digit count based on country code
- ✅ Address limited to 100 characters
- ✅ Real-time error messages for invalid inputs

### Key Features

- **Live Preview** - See your signature update in real-time as you type
- **Copy to Clipboard** - One-click button to copy the HTML code
- **Country Code Management** - Phone number resets when changing country codes
- **Auto-formatting** - Phone numbers are automatically formatted for better readability
- **Responsive Design** - Works on desktop and mobile devices

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Usage

1. Fill in all required fields in the form
2. Preview your signature in real-time on the right panel
3. Click "Copy HTML Code" to copy the signature HTML
4. Paste the HTML into your email client's signature settings

## Components Structure

```
src/
├── components/
│   ├── Dashboard.tsx          # Main dashboard component
│   ├── TextInput.tsx          # Reusable text input with validation
│   ├── EmailInput.tsx         # Email input with fixed domain
│   ├── PhoneInput.tsx         # Phone input with auto-formatting
│   ├── CountryCodeSelect.tsx  # Country code dropdown
│   ├── TextArea.tsx           # Text area with character limit
│   └── SignaturePreview.tsx   # Live preview component
├── types/
│   └── index.ts               # TypeScript interfaces
├── utils/
│   ├── validation.ts          # Validation functions
│   └── generateSignature.ts   # HTML signature generator
└── App.tsx                    # Root component
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool

## License

Proprietary - Obelisk Consulting
