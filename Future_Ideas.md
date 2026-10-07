`/Humanize` still on

# future_ideas.md

Ride booking is the core and it works. But every time we sat down to demo it someone asked "can it do X" and the answer was usually no. So this is a list of the X's we think are actually worth building before the capstone defense, plus some stuff that's clearly post-capstone.

The order here isn't priority. It's just how it came out of my head. The bottom has the short list if you don't want to read the whole thing.

---

## The driver toggle is embarrassing to not have

Right now a driver is always available. There's no way to go offline. So if Hamza's demo driver is eating lunch the app keeps throwing rides at him and he has to ignore them one by one. That's not a product, that's a bug we've been calling a feature. Adding an online/offline switch plus an accept/reject with a countdown timer is maybe two days of work and it's the single biggest jump in "this feels real" we can get.

The reject timer matters more than it sounds. If a driver can just let a request sit there the rider is stuck waiting on someone who already decided no. Ten seconds to accept or it auto-declines to the next driver. That one detail is the difference between a demo and something a person would actually use.

## Live tracking on the rider side

We show the map. We show the marker. But the marker doesn't move. The rider has no idea where the driver is, how far out they are, or whether they're even coming.

Wiring the driver's GPS to a websocket and pushing position updates to the rider is the feature everyone pictures when they hear "ride booking app." We've been avoiding it because it needs a real backend and we've been living in static HTML land. But Firebase has a free realtime tier and it's genuinely not that much code. The rider sees a dot moving toward them, ETA recalculates, done. This is the demo moment. Everything else is supporting cast.

## Share trip link

Cheap to build. Huge perceived value. Generate a URL with the trip ID, anyone with the link sees the rider's position on a map in real time. No login, no app install, just a page.

This is the feature that makes parents and safety-conscious people care. In Cairo specifically, the "tell someone where you are" thing is real. My mom asks me to text her when I get in a Careem. This replaces that text with a link. That's the pitch.

## Arabic

Half our users are going to open this on a phone in Arabic. If the app is English-only it reads as a class project. Full RTL support, not just flipping the direction. Translated strings, right-aligned text, the whole thing. It's tedious but it's not hard and it doubles the addressable audience in one commit.

I'd skip a language toggle and just detect from the browser. Or default to Arabic and let people switch to English. Either way.

## Admin panel for driver approval (3important)

Right now if someone registers as a driver the record just sits in the database with no review. That's fine for a capstone demo. It's terrible if this ever touches a real user.

A simple admin page where Marwa can see pending driver applications, look at the national ID photo, look at the face photo, and hit approve or reject. Maybe a complaints queue underneath it. This is boring work. Nobody wants to build it. But it's the thing that turns "we have a users table" into "we have a platform with a moderation story."

## Women-only matching

This came up in a team meeting and we all agreed it should exist but nobody wanted to say who builds it. Female riders get matched only to female drivers, opt-in on both sides. Culturally this matters a lot in Egypt. Uber and Careem both do it. If we don't, the first question in the defense is going to be why not.

The tricky part is the supply side. If there aren't enough female drivers the feature is a broken promise. Might need a waitlist mode where the rider gets told "no female driver available right now, want a regular ride or wait?"