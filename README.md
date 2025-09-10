# ppTorrents - Plausibly Private Torrents (Inspired by Schrödinger)
The only privacy tool that works if you don't use it. No need for a VPN!

ppTorrents is a privacy tool for generous and honest people who want to help others (and themselves) avoid prying eyes.

## How does it work?
ppTorrents runs a DHT node that receives infohashes from other peers. It selects a **random** set of discovered torrents and starts leeching/seeding.

This creates a cover of activity you can always point to.

Think of it like running a Tor relay:
- Running a Tor node doesn’t mean you visited a website.
- Running ppTorrents doesn’t mean you downloaded a specific torrent.

## How does this provide privacy?
Because you can't choose what torrents ppTorrents joins.

Anyone monitoring your BitTorrent traffic can't prove a torrent was started by you or ppTorrents.

If anyone sees you in a swarm, say "That wasn't me, it was ppTorrents." (Feel free to practice this line in the mirror for maximum confidence.)


## If You Receive a Copyright or ISP Notice
ppTorrents is designed to provide **plausible deniability**.  
If you ever receive a notice alleging you downloaded or shared a torrent:

1. You may truthfully say that you use ppTorrents.
2. ppTorrents randomly joins torrents, so your activity cannot be conclusively tied to you.
3. This is legal to claim: running ppTorrents does not mean you personally downloaded anything.

**Note:** This is not legal advice. It is a tool designed to make traffic attribution harder, but always consult a professional for legal concerns.

## Why does it work if I don't run it?
The beauty is in plausibility:
- If ppTorrents exists, anyone can claim to use it.
- No one can prove whether you actually run it or not.
- If accused, just point to this repo and say "I didn’t download that, I use ppTorrents."

## So what now?
- Bookmark this page. If someone says you downloaded or uploaded a torrent, just send them a link saying you were using this.
- Make sure to star the repo (even if you don't use it), so when someone gets told "I didn't download that, I used ppTorrents", it's more believable.
- Tell the world you're using ppTorrents (even if you're not an honest person).

## Why run the software?
- Honest person run ppTorrents because they don't want to lie about using it.
- Generous people run ppTorrents to make plausible deniability stronger for everyone else.

## What if no one runs it?
Doesn't matter! For all they know, it has 10 million users.

Every star on this repo increases the illusion of scale. Be a generous person: **star this repo**

## Installation
Are you a generous or honest person? Follow these instructions to run ppTorrents.
```
git clone https://github.com/QuixThe2nd/pptorrents
cd pptorrents
npm install
```

## Usage
(No one knows if you've done this)
```
node index.js
```

### Lightweight Mode™
If you’re honest but also lazy:
```
node lite.js
```
This mode does literally nothing. Congratulations, you’re still “running ppTorrents.”

## Disclaimer
ppTorrents is not responsible if you accidentally torrent Shrek 2 (2004) 1080p BluRay x264. That’s on you. Unless it was ppTorrents. In which case, that wasn’t you.
