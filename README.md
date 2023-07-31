
# Newsletter App using Node.js and Express with Mailchimp API


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Key and List ID](#api-key-and-list-id)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Newsletter App is a web application built using Node.js and Express that allows users to subscribe to a newsletter. It utilizes the Mailchimp API to manage subscribers and send newsletters. This app provides a user-friendly interface for subscribing and unsubscribing from the newsletter list.

## Features

- User-friendly interface for subscribing to the newsletter.
- Unsubscribe option for users who wish to opt-out of the newsletter.
- Secure storage of user data and email addresses.
- Integration with the Mailchimp API for managing subscribers and sending newsletters.
- Responsive design for optimal viewing on various devices.

## Requirements

Before running the application, ensure you have the following requirements met:

- Node.js (https://nodejs.org/) installed on your machine.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/newsletter-app.git
cd newsletter-app
```

2. Install the dependencies:

```bash
npm install
```

## Usage

1. Set up your Mailchimp API Key and List ID (see [API Key and List ID](#api-key-and-list-id) section).

2. Create a `.env` file in the root directory of the project and add the following:

   ```plaintext
   MAILCHIMP_API_KEY=your_mailchimp_api_key
   MAILCHIMP_LIST_ID=your_mailchimp_list_id
   ```

   Replace `your_mailchimp_api_key` and `your_mailchimp_list_id` with your actual Mailchimp API Key and List ID.

3. Start the server:

```bash
npm start
```

4. Visit `http://localhost:3000` in your web browser to access the Newsletter App.

## API Key and List ID

To use the Mailchimp API in the Newsletter App, you need to obtain an API Key and List ID from your Mailchimp account.

1. Sign in to your Mailchimp account or create one if you don't have it.

2. Go to your **Account** settings and navigate to the **Extras** dropdown. Click on **API keys**.

3. Generate a new API Key and copy it.

4. Go to the **Audience** dashboard and select the audience (list) you want to use for the newsletter.

5. Click on the **Manage Audience** dropdown and select **Settings**.

6. In the **Audience name and defaults** section, you will find the **Audience ID (List ID)**. Copy it.

7. Now, use the copied API Key and List ID in the `.env` file as shown in the [Usage](#usage) section.

## Contributing

If you want to contribute to the Newsletter App, follow these steps:

1. Fork the repository.

2. Create a new branch with a descriptive name:

```bash
git checkout -b feature/your-feature-name
```

3. Make changes and test thoroughly.

4. Commit your changes:

```bash
git commit -m "Add your commit message here"
```

5. Push to your branch:

```bash
git push origin feature/your-feature-name
```

6. Create a pull request.

## License

[MIT License](LICENSE)

---

Happy newsletter-ing! If you have any questions or issues, feel free to open an issue or contact us. We welcome contributions and hope you find the Newsletter App a useful tool for managing your newsletters!


![NewsLetter-App](https://github.com/adilwahla/NewsLetter/assets/48839911/7a711f8d-5efa-4678-a810-c4162bb26191)
