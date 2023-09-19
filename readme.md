# HngX frontend assessment

Stage One
Task: Frontend Page Creation with Specific Elements
Objective: Develop and host a web page using HTML and CSS that showcases specific personal and real-time data attributes. Each required element should have a specified data-testid attribute for easy identification and testing.
Requirements:
Slack Name:
Display your Slack name prominently.
Attribute: data-testid="slackUserName"
Slack Display Picture:
Showcase your Slack profile picture.
The image's alt attribute should be your Slack username.
Attribute: data-testid="slackDisplayImage"
Current Day of the Week:
Indicate the current day of the week (e.g., Monday, Tuesday).
Attribute: data-testid="currentDayOfTheWeek"
Current UTC Time:
Display the current UTC time.
Attribute: data-testid="currentUTCTime"
Track:
Mention your track (e.g Frontend).
Attribute: data-testid="myTrack"
GitHub URL:
Provide a clickable link to your GitHub repository where the source code for this task resides.
Attribute: data-testid=“githubURL”

# Setup

Please follow the instructions below:

1. Clone the repo

```bash
git clone https://github.com/Benrobo/hngx-fe.git
```

2. Change directory

```bash
cd hngx-fe
```

3. Install all dependencies

```bash
# if you have npm or yarn installed, do the following

# yarn users
yarn

#npm users
npm install
```

4. Start the server

```bash
#yarn users
yarn dev

# npm users
npm run dev

```

The server should begin live at [http://localhost:3000/](http://localhost:3000/)
