# Change log

## v1.0.0 29 Aug, 2019

#### All Email Survey Functionality

**Added Backend:**

- middleware/requireCredits.js
- model/Recipient.js
- model/Survey.js
- routes/surveyRoutes.js
- sendgrid_webhook.js
- services/Mailer.js
- services/emailTemplates/

**Added FrontEnd:**

- client/public/img/
- client/src/components/Dashboard.jsx
- client/src/components/auth/
- client/src/components/surveys/
- client/src/img/
- client/src/reducers/surveysReducer.js
- client/src/utils/

## v1.0.0 1 Aug, 2019

#### Client side added with create-react-app

**Added:**

- components/App.jsx
- components/Header.jsx
- components/Payments.jsx
- components/Landing.jsx
- components/Header.jsx
- actions/index.js
- actions/types.js
- reducers/index.js
- reducers/authReducer.js
- setupProxy.js
- .env.development
- .env.production

#### Server side Changes

**Added:**

- middleware/requireLogin.js
- routes/billingRoutes.js

## v1.0.0 1 Aug, 2019

Authentication

**Added:**

- config/prod.js

## v1.0.0 31 Jul, 2019

Authentication heavy work

**Added:**

- model/User.js

## v1.0.0 30 Jul, 2019

Initial release

**Added:**

- index.js
- routes/authRouter.js
- services/passport.js
- config/keys
- CHANGELOG
- README
